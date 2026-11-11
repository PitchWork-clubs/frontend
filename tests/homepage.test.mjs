import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import test from "node:test";

const homepage = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const loginPage = await readFile(new URL("../src/app/login/page.tsx", import.meta.url), "utf8");
const registerPage = await readFile(new URL("../src/app/register/page.tsx", import.meta.url), "utf8");
const authBrandPanel = await readFile(
  new URL("../src/components/auth/auth.brand.panel.tsx", import.meta.url),
  "utf8",
);
const chaosClarity = await readFile(
  new URL("../src/components/home/chaos2Clarity.section.tsx", import.meta.url),
  "utf8",
);

test("homepage exposes the hero section and primary navigation actions", () => {
  assert.match(homepage, /<section id="hero"/);
  assert.match(homepage, /href="\/register"[\s\S]*?Get Started/);
  assert.match(homepage, /href="#features"[\s\S]*?See how it works/);
});

test("hero includes the club illustration with descriptive alternative text", () => {
  assert.match(homepage, /src="\/logo-figure-mono-white\.png"/);
  assert.match(homepage, /alt="Pitchwork — club manager illustration"/);
});

test("signup and login use the shared Pitchwork auth banner without legacy ClubSheet assets", () => {
  assert.match(loginPage, /<AuthBrandPanel variant="login"\s*\/>/);
  assert.match(registerPage, /<AuthBrandPanel variant="register"\s*\/>/);
  assert.match(authBrandPanel, /logo-mark-on-dark\.svg/);
  assert.match(authBrandPanel, /logo-figure-on-dark-plate\.svg/);
  assert.doesNotMatch(loginPage + registerPage, /hero-football-athlete|logo-light-clip/);
});

test("feature marquee is rendered inside the hero after the hero content", () => {
  const heroStart = homepage.indexOf('<section id="hero"');
  const heroEnd = homepage.indexOf("</section>", heroStart);
  const hero = homepage.slice(heroStart, heroEnd);
  const contentRowEnd = hero.indexOf("</div>\n        </div>");
  const marqueePosition = hero.indexOf("<InfiniteMarquee />");

  assert.notEqual(heroStart, -1, "hero section should exist");
  assert.notEqual(marqueePosition, -1, "marquee should be rendered in the hero");
  assert.ok(contentRowEnd < marqueePosition, "marquee should follow the hero content row");
});

test("desktop hero is sized to the viewport while small screens can grow with content", () => {
  assert.match(homepage, /min-h-\[calc\(100svh-3\.5rem\)\]/);
  assert.match(homepage, /lg:h-\[calc\(100svh-3\.5rem\)\]/);
});

test("Chaos to Clarity pins one canvas and maps ScrollTrigger progress through changing frames", () => {
  assert.match(chaosClarity, /<canvas[\s\S]*?aria-hidden="true"/);
  assert.match(chaosClarity, /pin:\s*pinnedSection/);
  assert.match(chaosClarity, /scroller:\s*scrollViewport/);
  assert.match(chaosClarity, /getBodyScrollViewport/);
  assert.match(chaosClarity, /end:\s*'bottom bottom'/);
  assert.match(chaosClarity, /pinSpacing:\s*true/);
  assert.match(chaosClarity, /scrub:\s*true/);
  assert.match(chaosClarity, /const FRAME_IMAGE_SCALE = 0\.7/);
  assert.match(chaosClarity, /\* FRAME_IMAGE_SCALE/);
  assert.match(chaosClarity, /framePosition = progressThroughFrames \* \(ANIMATION_FRAME_INDICES\.length - 1\)/);
  assert.match(chaosClarity, /const ANIMATION_FRAME_INDICES = Array\.from\(\{ length: FRAME_COUNT \}, \(_, index\) => index\)/);
  assert.match(chaosClarity, /h-\[250vh\]/);
});

test("Chaos to Clarity uses the numbered frame files and keeps reduced-motion users on a static final frame", async () => {
  const frameDirectory = new URL("../public/frames/", import.meta.url);
  const expectedNames = Array.from(
    { length: 30 },
    (_, index) => `frame_${String(index + 1).padStart(3, "0")}.webp`,
  );

  assert.deepEqual((await readdir(frameDirectory)).sort(), expectedNames);
  for (const name of expectedNames) {
    const { size } = await stat(new URL(name, frameDirectory));
    assert.ok(size <= 50 * 1024, `${name} exceeds 50 KiB`);
  }

  assert.match(chaosClarity, /\/frames\/frame_\$\{String\(index \+ 1\)\.padStart\(3, '0'\)\}\.webp/);
  assert.match(chaosClarity, /prefers-reduced-motion: reduce/);
  assert.match(chaosClarity, /drawFrame\(ANIMATION_FRAME_INDICES\.length - 1\)/);
});
