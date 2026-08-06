import { siteContent } from "@/content/site";
import { socialIconMap } from "@/components/ui/SocialIcon";

export function Footer() {
  const { hero } = siteContent;

  return (
    <footer
      className="relative mx-auto w-full max-w-[920px] px-[30px] py-9 sm:px-10 sm:py-12 lg:py-14"
      aria-label="Footer"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-[var(--line)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[var(--line)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute bottom-0 left-[calc(50%-520px)] size-2 bg-white/55" />
        <div className="absolute bottom-0 right-[calc(50%-520px)] size-2 bg-white/55" />
      </div>

      <div className="flex flex-col gap-7 px-0 py-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-sans text-[clamp(1.75rem,3vw,2.85rem)] font-normal leading-none tracking-[-0.045em] text-white">
          Get in touch
        </h2>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          {hero.socials.map((social) => {
            const Icon = socialIconMap[social.icon];

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/95 transition duration-200 hover:border-white/24 hover:bg-white/[0.1] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:size-12"
              >
                <Icon className="size-[21px] sm:size-[22px]" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
