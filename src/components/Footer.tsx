type FooterData = {
  logoAlt: string;
  tagline: string;
  contact: string;
  copyright: string;
  legal: { label: string; href: string }[];
  credit: string;
  social: { label: string; href: string; icon: string }[];
};

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="w-full bg-offbeat-violet px-4 py-10 md:px-16 md:py-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:gap-12">
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex items-center gap-5">
            <span className="text-2xl font-semibold tracking-tight text-offbeat-white">
              {data.logoAlt}
            </span>
            {data.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-offbeat-white transition-opacity hover:opacity-70"
              >
                {s.icon === "instagram" ? <InstagramIcon /> : <LinkedInIcon />}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-base text-offbeat-white">
            <p>{data.tagline}</p>
            <p>{data.contact}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <span>{data.copyright}</span>
              {data.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="underline-offset-2 hover:underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-base text-offbeat-white md:text-right">
          {data.credit}
        </p>
      </div>
    </footer>
  );
}
