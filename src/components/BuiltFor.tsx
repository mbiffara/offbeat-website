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

      <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-20 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 lg:gap-8">
        {data.cards.map((card) => (
          <div
            key={card.title}
            className="flex w-[280px] shrink-0 snap-start flex-col gap-4 rounded-card border border-offbeat-violet-border bg-offbeat-violet-soft p-4 backdrop-blur-sm md:w-auto md:shrink md:rounded-none md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none"
          >
            <div className="flex items-center gap-3">
              <img
                src="/icons/hexicon.png"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 shrink-0"
              />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-offbeat-white">
                {card.title}
              </h3>
            </div>
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
