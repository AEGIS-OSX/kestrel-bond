"use client";

import { motion } from "framer-motion";

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
      className="surface-dark capabilities-section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <h2 className="capabilities-heading">What we bond.</h2>
        <p className="capabilities-sub">
          Kestrel Bond writes surety bonds across all major construction categories. A-rated underwriters only.
        </p>
        <div className="bond-grid">
          {bonds.map((bond) => (
            <div key={bond.code} className="bond-item">
              <span className="bond-code">{bond.code}</span>
              <span className="bond-name">{bond.name}</span>
            </div>
          ))}
        </div>
        <div className="underwriter-row">Liberty Mutual · Travelers · CNA · Hartford</div>
      </div>
    </motion.section>
  );
}
