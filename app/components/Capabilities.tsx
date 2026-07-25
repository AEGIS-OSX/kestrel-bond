"use client";

import { motion } from "framer-motion";
import styles from "./Capabilities.module.css";

const bonds = [
  { code: "PB-001", name: "Performance Bond" },
  { code: "PB-002", name: "Payment Bond" },
  { code: "LB-001", name: "License & Permit Bond" },
  { code: "LB-002", name: "Contractor License Bond" },
  { code: "CB-001", name: "Court Bond" },
  { code: "CB-002", name: "Fidelity Bond" },
  { code: "MB-001", name: "Maintenance Bond" },
  { code: "SB-001", name: "Subdivision Bond" },
];

export default function Capabilities() {
  return (
    <motion.section
      className={styles.capabilitiesSection}
      style={{ backgroundColor: "var(--color-ink)" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <h2 className={styles.capabilitiesHeading}>Bond Capabilities</h2>
        <p className={styles.capabilitiesSub}>
          Performance, payment, and license bonds issued in hours — not weeks. Every bond backed by A-rated underwriters.
        </p>
        <div className={styles.bondGrid}>
          {bonds.map((bond) => (
            <div key={bond.code} className={styles.bondItem}>
              <span className={styles.bondCode}>{bond.code}</span>
              <span className={styles.bondName}>{bond.name}</span>
              <div className={styles.underwriterRow}>A-Rated Underwriter</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
