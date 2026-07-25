"use client";

import { motion } from "framer-motion";

/**
 * Kestrel Bond Hero Component
 * Pure typographic authority. No imagery. Left-aligned.
 * Matches ramp.com visual density and typography.
 */
export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className="hero-section w-full pt-[96px] pb-[128px] md:pt-[96px] md:pb-[128px]"
      style={{ backgroundColor: "var(--color-canvas)" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <div className="hero-content max-w-[720px] text-left">
          <motion.div variants={itemVariants} className="mb-[24px]">
            <span 
              className="hero-eyebrow font-[family-name:var(--font-mono)] text-[15px] font-normal tracking-[0.04em]"
              style={{ color: "var(--color-steel)" }}
            >
              Bonds from $100/yr. Call (800) 555-0199.
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="hero-headline font-[family-name:var(--font-display)] text-[36px] md:text-[56px] font-semibold leading-[1.1] mb-[24px] [overflow-wrap:anywhere] min-w-0"
            style={{ color: "var(--color-ink)" }}
          >
            One-day bond quotes for licensed contractors.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="hero-sub font-[family-name:var(--font-body)] text-[17px] leading-[1.65] max-w-[600px] mb-[40px]"
            style={{ color: "var(--color-steel)" }}
          >
            Kestrel Bond matches your business with A-rated underwriters to secure the surety bonds required for your next project. No credit check to request a quote.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.a
              href="#quote"
              className="hero-cta inline-block font-[family-name:var(--font-body)] text-[14px] font-medium px-[32px] py-[14px] rounded-[var(--radius-btn)] no-underline whitespace-nowrap transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--color-amber-dark)]"
              style={{ 
                backgroundColor: "var(--color-amber)", 
                color: "var(--color-canvas)" 
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Quote
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
