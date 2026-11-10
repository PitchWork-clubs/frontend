'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBodyScrollViewport } from '@/components/ScrollArea';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 30;
const FRAME_IMAGE_SCALE = 0.7;
const ANIMATION_FRAME_INDICES = Array.from({ length: FRAME_COUNT }, (_, index) => index);
const INITIAL_HEADLINE = "Running a club shouldn't feel this scattered.";
const FINAL_HEADLINE = 'Everything your club needs. Together.';
const FRAME_PATH = (index: number) =>
  `/frames/frame_${String(index + 1).padStart(3, '0')}.webp`;

export function Chaos2ClaritySection() {
  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineInitialRef = useRef<HTMLHeadingElement>(null);
  const headlineFinalRef = useRef<HTMLHeadingElement>(null);
  const subtitleInitialRef = useRef<HTMLParagraphElement>(null);
  const subtitleFinalRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const scrollWrap = scrollWrapRef.current;
    const pinnedSection = stickyRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!scrollWrap || !pinnedSection || !canvas || !context) return;

    let disposed = false;
    let drawRequest = 0;
    const images: (HTMLImageElement | undefined)[] = Array(FRAME_COUNT);

    const updateHeadlines = (progress: number) => {
      const initialEraseEnd = 0.18;
      const finalTypeStart = 0.78;
      const finalTypeEnd = 1;
      const initialCharacters = progress < initialEraseEnd
        ? Math.round((1 - progress / initialEraseEnd) * INITIAL_HEADLINE.length)
        : 0;
      const finalCharacters = progress < finalTypeStart
        ? 0
        : Math.round(((progress - finalTypeStart) / (finalTypeEnd - finalTypeStart)) * FINAL_HEADLINE.length);
      const initialText = INITIAL_HEADLINE.slice(0, Math.max(0, Math.min(INITIAL_HEADLINE.length, initialCharacters)));
      const finalText = FINAL_HEADLINE.slice(0, Math.max(0, Math.min(FINAL_HEADLINE.length, finalCharacters)));

      if (headlineInitialRef.current) {
        if (headlineInitialRef.current.textContent !== initialText) {
          headlineInitialRef.current.textContent = initialText;
        }
        headlineInitialRef.current.style.opacity = initialText ? '1' : '0';
      }
      if (headlineFinalRef.current) {
        if (headlineFinalRef.current.textContent !== finalText) {
          headlineFinalRef.current.textContent = finalText;
        }
        headlineFinalRef.current.style.opacity = finalText ? '1' : '0';
      }
    };

    const drawImage = (image: HTMLImageElement, alpha: number) => {
      const scale = Math.min(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight) * FRAME_IMAGE_SCALE;
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      context.globalAlpha = alpha;
      context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    };

    const nearestLoadedImage = (index: number) => {
      if (images[index]?.naturalWidth) return images[index];
      for (let offset = 1; offset < FRAME_COUNT; offset += 1) {
        const earlier = images[index - offset];
        const later = images[index + offset];
        if (earlier?.naturalWidth) return earlier;
        if (later?.naturalWidth) return later;
      }
      return undefined;
    };

    const drawFrame = (framePosition: number) => {
      if (disposed || !canvas.width || !canvas.height) return;
      const keyframeIndex = Math.min(ANIMATION_FRAME_INDICES.length - 1, Math.floor(framePosition));
      const blend = framePosition - keyframeIndex;
      const currentIndex = ANIMATION_FRAME_INDICES[keyframeIndex];
      const nextIndex = ANIMATION_FRAME_INDICES[Math.min(keyframeIndex + 1, ANIMATION_FRAME_INDICES.length - 1)];
      const currentImage = nearestLoadedImage(currentIndex);
      const nextImage = nearestLoadedImage(nextIndex);

      context.clearRect(0, 0, canvas.width, canvas.height);
      if (currentImage) drawImage(currentImage, 1);
      if (blend > 0 && nextImage && nextImage !== currentImage) drawImage(nextImage, blend);
      context.globalAlpha = 1;
    };

    const scheduleDraw = (framePosition: number) => {
      cancelAnimationFrame(drawRequest);
      drawRequest = requestAnimationFrame(() => drawFrame(framePosition));
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = canvas.getBoundingClientRect();
      canvas.width = Math.round(bounds.width * pixelRatio);
      canvas.height = Math.round(bounds.height * pixelRatio);
      drawFrame(0);
    };

    const handleResize = () => {
      resizeCanvas();
      ScrollTrigger.refresh();
    };

    const loadAnimationFrames = () => Promise.all(
      ANIMATION_FRAME_INDICES.map((frameIndex) => new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = FRAME_PATH(frameIndex);
        images[frameIndex] = image;
      })),
    );

    void loadAnimationFrames().then(() => {
      if (disposed) return;
      resizeCanvas();

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        drawFrame(ANIMATION_FRAME_INDICES.length - 1);
        gsap.set([headlineInitialRef.current, subtitleInitialRef.current], { autoAlpha: 0 });
        gsap.set([headlineFinalRef.current, subtitleFinalRef.current], { autoAlpha: 1 });
        return;
      }

      const scrollViewport = getBodyScrollViewport();
      if (!scrollViewport) return;

      ScrollTrigger.create({
        scroller: scrollViewport,
        trigger: scrollWrap,
        start: 'top top',
        end: 'bottom top',
        pin: pinnedSection,
        pinSpacing: false,
        scrub: true,
        onUpdate: ({ progress }) => {
          const introHold = 0.02;
          const finishHold = 0.02;
          const progressThroughFrames = Math.min(1, Math.max(0, (progress - introHold) / (1 - introHold - finishHold)));
          const framePosition = progressThroughFrames * (ANIMATION_FRAME_INDICES.length - 1);
          const subtitleProgress = Math.min(1, Math.max(0, (progressThroughFrames - 0.82) / 0.14));

          updateHeadlines(progressThroughFrames);
          gsap.set(subtitleInitialRef.current, { autoAlpha: 1 - subtitleProgress });
          gsap.set(subtitleFinalRef.current, { autoAlpha: subtitleProgress });
          scheduleDraw(framePosition);
        },
        onRefresh: (self) => {
          const introHold = 0.02;
          const finishHold = 0.02;
          const progressThroughFrames = Math.min(1, Math.max(0, (self.progress - introHold) / (1 - introHold - finishHold)));
          const framePosition = progressThroughFrames * (ANIMATION_FRAME_INDICES.length - 1);
          updateHeadlines(progressThroughFrames);
          scheduleDraw(framePosition);
        },
      });

      window.addEventListener('resize', handleResize);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(drawRequest);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === scrollWrap) trigger.kill();
      });
    };
  }, []);

  return (
    <div ref={scrollWrapRef} className="chaos2-clarity-wrap relative h-[250vh] w-full motion-reduce:h-dvh">
      <div
        ref={stickyRef}
        className="chaos2-clarity-sticky relative h-dvh w-full overflow-hidden select-none bg-quaternary motion-reduce:static"
      >
        <canvas
          ref={canvasRef}
          className="chaos2-clarity-frame-canvas absolute inset-x-0 bottom-0 w-full"
          aria-hidden="true"
        />

        <div className="chaos2-clarity-headline-strip absolute inset-x-0 top-16 z-10 flex min-h-32 flex-col items-center justify-center gap-2 bg-[#f4eddd] px-4 py-3 text-center pointer-events-none sm:h-24 sm:min-h-0 sm:gap-1.5 sm:py-0">
          <div className="relative flex min-h-12 w-full items-center justify-center sm:min-h-8">
            <h2 ref={headlineInitialRef} className="absolute inset-x-0 font-bold text-xl text-zinc-900 tracking-tight leading-tight text-balance sm:text-2xl">
              {INITIAL_HEADLINE}
            </h2>
            <h2 ref={headlineFinalRef} className="absolute inset-x-0 font-bold text-xl text-zinc-900 tracking-tight leading-tight text-balance opacity-0 sm:text-2xl">
              {FINAL_HEADLINE}
            </h2>
          </div>
          <div className="relative min-h-8 w-full sm:min-h-4">
            <p ref={subtitleInitialRef} className="absolute inset-x-0 top-0 text-zinc-600 text-xs max-w-md mx-auto font-sans leading-snug">
              Spreadsheets, group chats, and disconnected schedules — all in one place.
            </p>
            <p ref={subtitleFinalRef} className="absolute inset-x-0 top-0 text-zinc-600 text-xs max-w-md mx-auto font-sans leading-snug opacity-0">
              One workspace. Every part of your club, organised.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chaos2ClaritySection;
