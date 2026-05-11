import Image from "next/image";

type WeWorkData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd: string;
  partners: { name: string; src: string }[];
};

export default function WeWork({ data }: { data: WeWorkData }) {
  return (
    <section className="relative w-full px-4 py-8 md:px-16 md:py-16">
      <div className="rounded-card border border-offbeat-violet-border bg-offbeat-violet-soft px-6 py-12 backdrop-blur-sm md:px-16 md:py-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-base md:text-xl">{data.eyebrow}</p>
          <h2 className="text-[40px] font-semibold leading-[0.95] tracking-tight md:text-[100px] md:leading-[0.9]">
            {data.titleStart}{" "}
            <span className="text-offbeat-violet">{data.titleAccent}</span>{" "}
            {data.titleEnd}
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:mt-12 md:gap-20">
          {data.partners.map((partner) => (
            <div key={partner.name} className="relative h-16 w-32 md:h-24 md:w-44">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="(min-width: 768px) 176px, 128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
