type HeroData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  slogan: string;
  marquee: string[];
  stats: { value: string; label: string; description: string }[];
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative isolate">
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

        <div className="px-4 pb-10 pt-24 md:px-16 md:pt-32 md:pb-20">
          <div className="max-w-[638px]">
            <p className="text-base md:text-xl">{data.eyebrow}</p>
            <h1 className="mt-4 text-[42px] font-medium leading-[1.05] tracking-tight md:mt-4 md:text-[70px] md:leading-none">
              {data.titleStart}{" "}
              <span className="text-offbeat-violet">{data.titleAccent}</span>
            </h1>
            <p className="mt-4 text-lg md:mt-6 md:text-2xl">{data.slogan}</p>
          </div>
        </div>
      </div>

      <div className="relative -mt-2 overflow-hidden border-y border-offbeat-violet-border/40 bg-offbeat-black py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...data.marquee, ...data.marquee, ...data.marquee].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="text-2xl text-offbeat-white md:text-3xl"
            >
              {word}
              <span className="ml-12 text-offbeat-violet">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative px-4 py-10 md:px-16 md:py-20">
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
