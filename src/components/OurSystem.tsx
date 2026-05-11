import Image from "next/image";

type OurSystemData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  description: string;
  items: { title: string; description: string }[];
};

const galleryImages = [
  "/images/system-1.jpg",
  "/images/system-2.jpg",
  "/images/system-3.jpg",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 16.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurSystem({ data }: { data: OurSystemData }) {
  return (
    <section id="system" className="relative w-full px-4 py-12 md:px-16 md:py-20">
      <div className="flex flex-col gap-6 md:gap-6">
        <p className="text-base md:text-xl">{data.eyebrow}</p>
        <h2 className="text-[40px] font-semibold leading-[0.95] tracking-tight md:text-[100px] md:leading-[0.9]">
          {data.titleStart}{" "}
          <span className="text-offbeat-violet">{data.titleAccent}</span>
        </h2>
        <p className="max-w-[528px] text-base md:text-2xl md:leading-snug">
          {data.description}
        </p>
      </div>

      <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-20 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 lg:gap-8">
        {data.items.map((item) => (
          <div
            key={item.title}
            className="flex w-[280px] shrink-0 snap-start flex-col gap-6 rounded-card border border-offbeat-violet-border bg-offbeat-violet-soft p-4 backdrop-blur-sm md:w-auto md:shrink md:gap-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none"
          >
            <CheckIcon className="h-8 w-8 text-offbeat-violet" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-offbeat-white">
              {item.title}
            </h3>
            <p className="text-base text-offbeat-white">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 md:gap-8">
        {galleryImages.map((src) => (
          <div
            key={src}
            className="relative aspect-[1/1.6] overflow-hidden rounded-card md:aspect-[416/664]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
