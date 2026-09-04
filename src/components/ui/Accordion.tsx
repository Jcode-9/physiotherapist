"use client";

import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

export default function Accordion({
  question,
  answer,
  open,
  onToggle,
}: AccordionProps) {
  const contentId = `faq-${question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div
      className={`
        rounded-2xl
        border
        bg-white
        transition-all
        duration-300
        ${
          open
            ? "border-blue-200 shadow-lg"
            : "border-slate-200 hover:border-blue-200 hover:shadow-md"
        }
      `}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
        aria-controls={contentId}
      >
        <h3 className="text-lg font-semibold text-slate-800">
          {question}
        </h3>

        <ChevronDown
          className={`
            h-6
            w-6
            shrink-0
            text-blue-600
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        id={contentId}
        className={`
          grid
          transition-all
          duration-300
          ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-200 px-6 py-5 leading-7 text-slate-600">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}