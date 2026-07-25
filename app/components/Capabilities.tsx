"use client";

import { motion } from "framer-motion";
import styles from "./Capabilities.module.css";

const bonds = [
  { code: "LIC-001", name: "Contractor License Bond" },
  { code: "PER-002", name: "Permit Bond" },
  { code: "PUB-003", name: "Public Works Bond" },
  { code: "SUB-004", name: "Subcontractor Bond" },
  { code: "BID-005", name: "Bid Bond" },
  { code: "PAY-006", name: "Payment Bond" },
  { code: "PER-007", name: "Performance Bond" },
  { code: "MAI-008", name: "Maintenance Bond" },
];

export default function Capabilities() {
  return (
    <motion.section
      id="capabilities"
      className={`${styles.capabilitiesSection} surface-dark`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <h2 className={styles.capabilitiesHeading}>What we bond.</h2>
        <p className={styles.capabilitiesSub}>
          Kestrel Bond writes surety bonds across all major construction categories. A-rated underwriters only.
        </p>
        <div className={styles.bondGrid}>
          {bonds.map((bond) => (
            <div key={bond.code} className={styles.bondItem}>
              <span className={styles.bondCode}>{bond.code}</span>
              <span className={styles.bondName}>{bond.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.underwriterRow}>Liberty Mutual · Travelers · CNA · Hartford</div>
      </div>
    </motion.section>
  );
}
