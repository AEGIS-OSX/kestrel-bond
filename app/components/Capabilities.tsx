"use client";

import { motion } from "framer-motion";
import styles from "./Capabilities.module.css";

const bonds = [
  { code: "LIC-001", name: "License & Permit Bond" },
  { code: "LIC-002", name: "Contractor License Bond" },
  { code: "BID-001", name: "Bid Bond" },
  { code: "BID-005", name: "Performance Bond" },
  { code: "MAI-001", name: "Maintenance Bond" },
  { code: "MAI-008", name: "Supply Bond" },
  { code: "FID-001", name: "Fidelity Bond" },
  { code: "FID-002", name: "Employee Dishonesty Bond" },
];

export default function Capabilities() {
  return (
    <motion.section
      id="capabilities"
      className="surface-dark"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Bond Capabilities</h2>
        <div className={styles.grid}>
          {bonds.map((bond) => (
            <div key={bond.code} className={styles.card}>
              <span className={styles.code}>{bond.code}</span>
              <span className={styles.name}>{bond.name}</span>
            </div>
          ))}
        </div>
        <p className={styles.underwriters}>
          Liberty Mutual · Travelers · CNA · Hartford
        </p>
      </div>
    </motion.section>
  );
}
