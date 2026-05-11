"use client";

import { useState } from "react";

type HeaderData = {
  logoAlt: string;
  nav: { label: string; href: string }[];
  cta: { label: string; href: string };
};

export default function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full px-4 pt-4 md:px-11 md:pt-6">
      <div className="mx-auto flex max-w-[1089px] items-center justify-between rounded-card border border-offbeat-violet-border bg-offbeat-violet-soft px-4 py-3 backdrop-blur-md md:px-8 md:py-4">
        <a href="#home" className="text-xl font-semibold tracking-tight text-offbeat-white">
          {data.logoAlt}
        </a>

        <nav className="hidden items-center gap-3 lg:flex">
          {data.nav.map((item, i) => (
            <span key={item.label} className="flex items-center gap-3 text-base text-offbeat-white">
              <a
                href={item.href}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
              {i < data.nav.length - 1 && (
                <span className="text-offbeat-white/60">/</span>
              )}
            </span>
          ))}
        </nav>

        <a
          href={data.cta.href}
          className="hidden rounded-button border border-offbeat-violet-border bg-offbeat-violet px-6 py-3 text-base text-offbeat-white transition-opacity hover:opacity-90 md:inline-flex lg:px-13 lg:py-4"
        >
          {data.cta.label}
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-button bg-offbeat-violet text-offbeat-white lg:hidden"
        >
          <span aria-hidden className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1089px] rounded-card border border-offbeat-violet-border bg-offbeat-black/95 p-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {data.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-offbeat-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={data.cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-button border border-offbeat-violet-border bg-offbeat-violet px-6 py-3 text-base text-offbeat-white"
            >
              {data.cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
