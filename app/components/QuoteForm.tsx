"use client";

import { useState } from "react";

const BOND_TYPES = [
  { value: "contractor-license", label: "Contractor License Bond" },
  { value: "maintenance", label: "Maintenance Bond" },
  { value: "performance", label: "Performance Bond" },
  { value: "payment", label: "Payment Bond" },
  { value: "bid", label: "Bid Bond" },
  { value: "license-permit", label: "License & Permit Bond" },
  { value: "fidelity", label: "Fidelity Bond" },
  { value: "customs", label: "Customs Bond" },
];

const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export default function QuoteForm() {
  const [businessName, setBusinessName] = useState("");
  const [ein, setEin] = useState("");
  const [bondType, setBondType] = useState("");
  const [bondAmount, setBondAmount] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const fieldClass =
    "w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:opacity-50";

  if (isSubmitted) {
    return (
      <section id="quote">
        <div>
          Your quote request has been received. Expect a response within one business day.
        </div>
      </section>
    );
  }

  return (
    <section id="quote">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="businessName">Business Name</label>
          <input
            id="businessName"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            disabled={isSubmitting}
            className={fieldClass}
            required
          />
        </div>

        <div>
          <label htmlFor="ein">EIN</label>
          <input
            id="ein"
            type="text"
            value={ein}
            onChange={(e) => setEin(e.target.value)}
            disabled={isSubmitting}
            className={fieldClass}
            required
          />
          <p>
            Your EIN is used only to verify your contractor license. We do not run a credit check.
          </p>
        </div>

        <div>
          <label htmlFor="bondType">Bond Type</label>
          <select
            id="bondType"
            value={bondType}
            onChange={(e) => setBondType(e.target.value)}
            disabled={isSubmitting}
            className={fieldClass}
            required
          >
            <option value="">Select bond type</option>
            {BOND_TYPES.map((bt) => (
              <option key={bt.value} value={bt.value}>
                {bt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="bondAmount">Bond Amount</label>
          <input
            id="bondAmount"
            type="text"
            value={bondAmount}
            onChange={(e) => setBondAmount(e.target.value)}
            disabled={isSubmitting}
            className={fieldClass}
            required
          />
        </div>

        <div>
          <label htmlFor="state">State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            disabled={isSubmitting}
            className={fieldClass}
            required
          >
            <option value="">Select state</option>
            {US_STATES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className={fieldClass}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="disabled:opacity-50"
        >
          {isSubmitting ? "Submitting…" : "Request a Quote"}
        </button>
      </form>
    </section>
  );
}
