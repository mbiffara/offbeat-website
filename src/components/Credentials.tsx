import Image from "next/image";

type CredentialsData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  description: string;
  highlights: { title: string; description: string }[];
};

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
              <CheckIcon className="mt-1 h-8 w-8 shrink-0 text-offbeat-violet" />
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-offbeat-white">
                  {highlight.title}
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
