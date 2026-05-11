import Image from "next/image";

type CredentialsData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  description: string;
  highlights: { title: string; description: string }[];
};

export default function Credentials({ data }: { data: CredentialsData }) {
  return (
    <section
      id="credentials"
      className="relative w-full px-4 py-12 md:px-16 md:py-20"
    >
      <div className="mx-auto flex max-w-[990px] flex-col gap-6 md:items-start md:gap-6">
        <p className="text-base md:text-xl">{data.eyebrow}</p>
        <h2 className="text-[40px] font-semibold leading-[0.95] tracking-tight md:text-[100px] md:leading-[0.9]">
          {data.titleStart}{" "}
          <span className="text-offbeat-violet">{data.titleAccent}</span>
        </h2>
        <p className="text-base md:text-2xl md:leading-snug">{data.description}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 md:gap-8">
        <div className="relative aspect-[416/664] overflow-hidden rounded-card md:aspect-auto md:h-[664px]">
          <Image
            src="/images/credentials.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          {data.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="flex items-start gap-4"
            >
              <img
                src="/icons/hexicon.png"
                alt=""
                aria-hidden="true"
                className="mt-1 h-8 w-8 shrink-0"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-offbeat-white">
                  {highlight.title.split("*").map((part, i) => (
                    <span key={i} className={i % 2 === 1 ? "text-offbeat-violet" : ""}>
                      {part}
                    </span>
                  ))}
                </h3>
                <p className="text-base text-offbeat-white">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
