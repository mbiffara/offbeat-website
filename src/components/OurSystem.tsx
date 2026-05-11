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

      <div className="mt-12 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {data.items.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <CheckIcon className="h-8 w-8 text-offbeat-violet" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-offbeat-white">
              {item.title}
            </h3>
            <p className="text-base text-offbeat-white">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 md:gap-8">
        {galleryImages.map((src, i) => (
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
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-offbeat-violet/80 text-offbeat-white backdrop-blur-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8 5v14l11-7L8 5z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">Gallery image {i + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
