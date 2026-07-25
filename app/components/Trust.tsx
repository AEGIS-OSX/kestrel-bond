"use client";

import { motion } from "framer-motion";

export default function Trust() {
  const trustSignals = [
    { label: "Rating", value: "A-Rated Underwriters" },
    { label: "Coverage", value: "All 50 States" },
    { label: "Status", value: "BBB Accredited" },
  ];

  return (
    <motion.section
      id="trust"
      className="trust-section py-[96px]"
      style={{ backgroundColor: "var(--color-canvas)" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="trust-signals flex gap-[48px] flex-wrap mb-0">
          {trustSignals.map((signal, index) => (
            <div key={index} className="trust-signal flex flex-col gap-[6px]">
              <span className="trust-label font-[family-name:var(--font-mono)] text-[13px] text-[var(--color-steel)] tracking-[0.06em] uppercase">
                {signal.label}
              </span>
              <span className="trust-value font-[family-name:var(--font-display)] text-[24px] font-medium text-[var(--color-ink)]">
                {signal.value}
              </span>
            </div>
          ))}
        </div>

        <hr className="trust-divider border-none border-t border-[var(--color-steel)] opacity-30 my-[48px]" />

        <blockquote className="trust-quote margin-0">
          <p className="trust-quote-text font-[family-name:var(--font-display)] text-[22px] font-normal leading-[1.4] text-[var(--color-ink)] italic max-w-[680px]">
            {`Kestrel had our performance bond approved in 18 hours. We've never moved that fast on a public works bid.`}
          </p>
          <footer className="trust-quote-attribution font-[family-name:var(--font-mono)] text-[13px] text-[var(--color-steel)] mt-[16px] not-italic block">
            — Marcus T., General Contractor, Phoenix AZ
          </footer>
        </blockquote>
      </div>
    </motion.section>
  );
}
