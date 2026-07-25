import { ProjectImage } from "@/app/components/ProjectImage";

const styles = {
  navRoot: {
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
    backgroundColor: "var(--color-canvas)",
    borderBottom: "1px solid var(--color-steel)",
  },
  navInner: {
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    height: "64px",
  },
  navBrand: {
    display: "flex" as const,
    alignItems: "center" as const,
    textDecoration: "none",
    gap: "10px",
  },
  navLogo: {
    height: "32px",
    width: "auto",
    display: "inline-block",
  },
  navWordmark: {
    fontFamily: "var(--font-display)",
    fontSize: "18px",
    fontWeight: 600,
    color: "var(--color-ink)",
    whiteSpace: "nowrap" as const,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "32px",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    fontWeight: 500,
    color: "var(--color-steel)",
    textDecoration: "none",
    letterSpacing: "0.02em",
    whiteSpace: "nowrap" as const,
    transition: "color var(--duration-fast) var(--ease-out)",
  },
};

export default function Nav() {
  return (
    <nav role="navigation" aria-label="Main navigation" style={styles.navRoot}>
      <div className="container">
        <div style={styles.navInner}>
          <a href="/" style={styles.navBrand} className="nav-brand">
            <ProjectImage id="logo" className="nav-logo" />
            <span style={styles.navWordmark} className="nav-wordmark">
              Kestrel Bond
            </span>
          </a>
          <ul style={styles.navLinks} className="nav-links">
            <li>
              <a href="#capabilities" style={styles.navLink} className="nav-link">
                Capabilities
              </a>
            </li>
            <li>
              <a href="#quote" style={styles.navLink} className="nav-link">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
