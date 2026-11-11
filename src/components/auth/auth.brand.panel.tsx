import Image from 'next/image';
import Link from 'next/link';

type AuthBrandPanelProps = {
  variant: 'login' | 'register';
};

const panelCopy = {
  login: {
    title: 'Run your club with clarity.',
    description: 'Pick up where your club left off. Your people, plans and records stay together in one workspace.',
    note: 'Good to have you back',
  },
  register: {
    title: 'Make room for the game.',
    description: 'Bring your people and plans together from the first training session, then shape Pitchwork around your club.',
    note: 'Start with what your club needs',
  },
} satisfies Record<AuthBrandPanelProps['variant'], { title: string; description: string; note: string }>;

export function AuthBrandPanel({ variant }: AuthBrandPanelProps) {
  const copy = panelCopy[variant];

  return (
    <section className="relative isolate flex min-h-72 w-full flex-col overflow-hidden bg-[#22492F] p-6 text-primary-foreground sm:min-h-80 sm:p-8 lg:min-h-0 lg:w-1/2 lg:p-10">
      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-20" viewBox="0 0 600 500" fill="none" aria-hidden="true">
        <path d="M300 0v500M0 250h600" stroke="currentColor" />
        <circle cx="300" cy="250" r="132" stroke="currentColor" />
        <rect x="28" y="24" width="544" height="452" rx="2" stroke="currentColor" />
      </svg>

      <Link href="/" className="relative z-20 flex w-fit items-center gap-2.5 transition-opacity hover:opacity-85">
        <Image src="/images/brand/logo-mark-on-dark.svg" alt="Pitchwork" width={34} height={34} />
        <span className="text-lg font-bold tracking-tight">Pitchwork</span>
      </Link>

      <Image
        src="/logo-figure-on-dark-plate.svg"
        alt=""
        aria-hidden="true"
        width={534}
        height={1060}
        sizes="(min-width: 1024px) 20rem, 40vw"
        className="pointer-events-none absolute bottom-0 right-0 z-10 h-[88%] w-auto max-w-[52%] object-contain object-bottom opacity-45 sm:opacity-60 lg:max-w-[54%] lg:opacity-80"
        priority
      />

      <div className="relative z-20 mt-8 max-w-[62%] sm:mt-10 sm:max-w-[64%] lg:mt-8 lg:max-w-[62%]">
        <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-foreground/65">{copy.note}</p>
        <h2 className="max-w-xs text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{copy.title}</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">{copy.description}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Pitchwork club tools">
          {(variant === 'login' ? ['Squads', 'Training', 'Matchdays'] : ['People', 'Teams', 'Club records']).map((item) => (
            <span key={item} className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/90">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
