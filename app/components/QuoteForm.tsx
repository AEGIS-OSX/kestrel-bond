"use client";

import { useState } from "react";

const BOND_TYPES: Array<{ value: string; label: string }> = [
  { value: "contractor-license", label: "Contractor License Bond" },
  { value: "permit", label: "Permit Bond" },
  { value: "public-works", label: "Public Works Bond" },
  { value: "subcontractor", label: "Subcontractor Bond" },
  { value: "bid", label: "Bid Bond" },
  { value: "payment", label: "Payment Bond" },
  { value: "performance", label: "Performance Bond" },
  { value: "maintenance", label: "Maintenance Bond" },
];

const STATES: Array<{ value: string; label: string }> = [
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

const inputBackground = { backgroundColor: "var(--color-canvas)" };

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="quote-section" style={{ backgroundColor: "var(--color-canvas)" }}>
      <div className="container">
        <h2 className="quote-heading">Request a Quote</h2>
        <p className="quote-sub">
          We&apos;ll match you with an A-rated underwriter and return your quote within one business day. No credit
          check required.
        </p>

        {submitted ? (
          <div className="quote-success">
            <p>Your quote request has been received. Expect a response within one business day.</p>
          </div>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="businessName" className="field-label">
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                placeholder="Acme Construction LLC"
                className="quote-input"
                style={inputBackground}
                disabled={isSubmitting}
              />
            </div>

            <div className="field-group">
              <label htmlFor="ein" className="field-label">
                Employer Identification Number (EIN)
              </label>
              <input
                id="ein"
                name="ein"
                type="text"
                required
                placeholder="12-3456789"
                pattern="[0-9]{2}-[0-9]{7}"
                className="quote-input"
                style={inputBackground}
                disabled={isSubmitting}
              />
              <span className="field-hint">
                Your EIN is used only to verify your contractor license. We do not run a credit check.
              </span>
            </div>

            <div className="field-group">
              <label htmlFor="bondType" className="field-label">
                Bond Type
              </label>
              <select
                id="bondType"
                name="bondType"
                required
                defaultValue=""
                className="quote-select"
                style={inputBackground}
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Select bond type
                </option>
                {BOND_TYPES.map((bondType) => (
                  <option key={bondType.value} value={bondType.value}>
                    {bondType.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="bondAmount" className="field-label">
                Bond Amount Required
              </label>
              <input
                id="bondAmount"
                name="bondAmount"
                type="text"
                required
                placeholder="$50,000"
                className="quote-input"
                style={inputBackground}
                disabled={isSubmitting}
              />
            </div>

            <div className="field-group">
              <label htmlFor="state" className="field-label">
                Project State
              </label>
              <select
                id="state"
                name="state"
                required
                defaultValue=""
                className="quote-select"
                style={inputBackground}
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Select state
                </option>
                {STATES.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="email" className="field-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="quote-input"
                style={inputBackground}
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className="quote-submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting…" : "Request a Quote"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
