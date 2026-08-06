import { siteContent } from "@/content/site";

export function TopBar() {
  const { brand, availability, location } = siteContent;

  return (
    <header className="relative z-20 border-b border-[var(--line)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute left-[calc(50%-520px)] top-0 size-2 bg-white/55" />
        <div className="absolute right-[calc(50%-520px)] top-0 size-2 bg-white/55" />
        <div className="absolute bottom-0 left-[calc(50%-520px)] size-2 bg-white/55" />
        <div className="absolute bottom-0 right-[calc(50%-520px)] size-2 bg-white/55" />
      </div>
      <div className="mx-auto grid min-h-20 w-full max-w-[920px] grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 sm:grid-cols-3 sm:px-8 lg:min-h-28">
        <a
          href="#home"
          className="group flex min-w-0 items-center justify-self-start"
          aria-label={`${brand.name} home`}
        >
          <span className="truncate text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
            {brand.name}
          </span>
        </a>

        <div className="hidden justify-self-center sm:block">
          <div className="flex items-center gap-4 rounded-full border border-[var(--line-strong)] bg-black/28 px-5 py-3 text-sm text-[var(--muted)] shadow-[0_0_40px_rgba(0,0,0,0.22)] backdrop-blur-md lg:min-w-64 lg:justify-center lg:text-base">
            <span
              className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]"
              aria-hidden="true"
            />
            <span>{availability.text}</span>
          </div>
        </div>

        <div className="hidden justify-self-end text-right text-base font-medium leading-relaxed tracking-[-0.02em] text-white/88 sm:block lg:text-lg">
          <p>{location.line1}</p>
          <p>{location.line2}</p>
        </div>

        <div className="col-span-2 flex justify-end sm:hidden">
          <div className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.04] px-3 py-2 text-xs text-[var(--muted)] backdrop-blur-md">
            <span
              className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.6)]"
              aria-hidden="true"
            />
            <span>{availability.text}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
