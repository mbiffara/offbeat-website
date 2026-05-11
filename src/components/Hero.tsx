type HeroData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  slogan: string;
  marquee: string[];
  stats: { value: string; label: string; description: string }[];
};

const Spark = () => (
  <svg
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
    className="h-3 w-3 shrink-0"
  >
    <path d="M6 0C6.4 3.4 8.6 5.6 12 6C8.6 6.4 6.4 8.6 6 12C5.6 8.6 3.4 6.4 0 6C3.4 5.6 5.6 3.4 6 0Z" />
  </svg>
);

export default function Hero({ data }: { data: HeroData }) {
  const statItems = data.stats.map((s) => `${s.value} ${s.label}`);

  return (
    <section id="home" className="relative isolate w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          src="/images/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-offbeat-black/30 via-offbeat-black/50 to-offbeat-black" />
      </div>

      <div className="px-4 pb-10 pt-32 md:px-16 md:pt-52 md:pb-20">
        <div className="max-w-[638px]">
          <p className="text-base md:text-xl">{data.eyebrow}</p>
          <h1 className="mt-4 text-[42px] font-medium leading-[1.05] tracking-tight md:mt-4 md:text-[70px] md:leading-none">
            {data.titleStart}{" "}
            <span className="text-offbeat-violet">{data.titleAccent}</span>
          </h1>
          <p className="mt-4 text-lg md:mt-6 md:text-2xl">{data.slogan}</p>
        </div>
      </div>

      <div className="relative overflow-hidden bg-offbeat-violet py-3 md:hidden">
        <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap">
          {[...statItems, ...statItems].map((label, i) => (
            <span
              key={`m-${label}-${i}`}
              className="flex items-center gap-6 text-base font-semibold uppercase tracking-tight text-offbeat-white"
            >
              {label}
              <Spark />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-offbeat-violet to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-offbeat-violet to-transparent" />
      </div>

      <div className="relative hidden px-4 py-10 md:block md:px-16 md:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-full flex-col items-center gap-4 rounded-card border border-offbeat-violet-border bg-offbeat-violet-soft px-6 py-12 text-center backdrop-blur-sm md:py-16"
            >
              <p className="text-[64px] font-semibold leading-none text-offbeat-violet md:text-[70px]">
                {stat.value}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-offbeat-white">
                {stat.label}
              </p>
              <p className="text-base text-offbeat-white">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
