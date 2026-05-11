"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
};

type ContactData = {
  title: string;
  description: string;
  privacy: string;
  fields: Field[];
  serviceQuestion: string;
  services: string[];
  submitLabel: string;
};

export default function ContactUs({ data }: { data: ContactData }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (service: string) =>
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );

  return (
    <section
      id="contact"
      className="relative w-full px-4 py-12 md:px-16 md:py-20"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-[56px] font-semibold leading-[0.9] tracking-tight md:text-[100px]">
            {data.title}
          </h2>
          <p className="text-base md:text-2xl md:leading-snug">{data.description}</p>
          <p className="text-base text-offbeat-white/80 md:text-xl">{data.privacy}</p>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {data.fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-2 text-base">
              <span className="text-offbeat-white">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  rows={4}
                  placeholder={field.placeholder}
                  className="resize-none rounded-button bg-offbeat-input-bg px-4 py-3 text-base text-offbeat-white placeholder:text-offbeat-input-placeholder focus:outline-none focus:ring-2 focus:ring-offbeat-violet"
                />
              ) : (
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="h-16 rounded-button bg-offbeat-input-bg px-4 text-base text-offbeat-white placeholder:text-offbeat-input-placeholder focus:outline-none focus:ring-2 focus:ring-offbeat-violet"
                />
              )}
            </label>
          ))}

          <fieldset className="mt-2 flex flex-col gap-4">
            <legend className="text-base text-offbeat-white">
              {data.serviceQuestion}
            </legend>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.services.map((service) => {
                const isOn = selected.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggle(service)}
                    aria-pressed={isOn}
                    className={`flex items-center gap-3 rounded-button px-4 py-3 text-left text-base transition-colors ${
                      isOn
                        ? "bg-offbeat-violet text-offbeat-white"
                        : "bg-offbeat-input-bg text-offbeat-white"
                    }`}
                  >
                    <span
                      className={`grid h-6 w-6 place-items-center rounded border ${
                        isOn
                          ? "border-offbeat-white bg-offbeat-white text-offbeat-violet"
                          : "border-offbeat-white/40"
                      }`}
                    >
                      {isOn && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 12.5l4 4 10-11"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    {service}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-4 w-full self-end rounded-button border border-offbeat-violet-border bg-offbeat-violet px-13 py-4 text-base text-offbeat-white transition-opacity hover:opacity-90 md:w-auto"
          >
            {data.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
