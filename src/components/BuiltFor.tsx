import Image from "next/image";

type BuiltForData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  cards: { title: string; description: string }[];
};

const galleryImages = [
  "/images/builtfor-1.jpg",
  "/images/builtfor-2.jpg",
  "/images/builtfor-3.jpg",
  "/images/builtfor-4.jpg",
  "/images/builtfor-5.jpg",
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

export default function BuiltFor({ data }: { data: BuiltForData }) {
  return (
    <section
      id="built-for"
      className="relative w-full px-4 py-12 md:px-16 md:py-20"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 text-center">
        <p className="text-base md:text-xl">{data.eyebrow}</p>
        <h2 className="text-[40px] font-semibold leading-[0.95] tracking-tight md:text-[100px] md:leading-[0.9]">
          {data.titleStart}{" "}
          <span className="text-offbeat-violet">{data.titleAccent}</span>
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {data.cards.map((card) => (
          <div key={card.title} className="flex flex-col gap-4">
            <CheckIcon className="h-8 w-8 text-offbeat-violet" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-offbeat-white">
              {card.title}
            </h3>
            <p className="text-base text-offbeat-white">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="scrollbar-none mt-12 -mx-4 flex gap-4 overflow-x-auto px-4 md:mt-20 md:-mx-16 md:gap-8 md:px-16">
        {galleryImages.map((src) => (
          <div
            key={src}
            className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-card md:h-[520px] md:w-[520px]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 768px) 520px, 280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
