"use client";

import { useState } from "react";

type FaqData = {
  eyebrow: string;
  titleAccent: string;
  titleEnd: string;
  items: { question: string; answer: string }[];
};

export default function Faq({ data }: { data: FaqData }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full px-4 py-12 md:px-16 md:py-20">
      <div className="flex flex-col gap-2">
        <p className="text-base md:text-xl">{data.eyebrow}</p>
        <h2 className="text-[40px] font-semibold leading-[0.95] tracking-tight md:text-[100px] md:leading-[0.9]">
          <span className="text-offbeat-violet">{data.titleAccent}</span>{" "}
          {data.titleEnd}
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 md:mt-20 md:grid-cols-2 md:gap-6">
        {data.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <details
              key={item.question}
              open={isOpen}
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) setOpen(i);
                else if (isOpen) setOpen(null);
              }}
              className="group rounded-button border border-offbeat-violet-border bg-offbeat-violet-soft backdrop-blur-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-base font-semibold text-offbeat-white md:text-lg">
                <span>{item.question}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-base text-offbeat-white/90">
                {item.answer}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
