"use client";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium group-hover:text-primary-600 transition-colors">
          {question}
        </h3>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 transition-all">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  // FAQ data array for modularity
  const faqData = [
    {
      question: "What is Ragas?",
      answer:
        "Get real insights with our LLM QA pipeline evaluator. Built with trusted metrics and flexible benchmarks.",
    },
    {
      question: "Is Ragas open source?",
      answer:
        "Yes, Ragas is completely open source and community-driven. Join us on GitHub.",
    },
    {
      question: "How is it different from traditional test tools?",
      answer:
        "Unlike traditional tools, Ragas is specifically designed for LLM evaluation with specialized metrics.",
    },
    {
      question: "What features will be in the future?",
      answer:
        "We're working on advanced metrics, deeper integrations, and custom evaluation frameworks.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl mb-12 text-center">
          Questions and Answers
        </h2>
        <div className="divide-y divide-border">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
