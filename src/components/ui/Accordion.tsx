"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionProps {
  question: string,
  answer: string;
}
export default function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        ${
          open
            ? "border-blue-200 shadow-lg"
            : "hover:border-blue-200 hover:shadow-md"
        }
      `}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <h3 className="text-lg font-semibold text-slate-800">
          {question}
          
        </h3>

        <ChevronDown
          className={`h-6 w-6 text-blue-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
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
          <div className="border-t border-slate-200 px-6 py-5 text-slate-600 leading-7">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}