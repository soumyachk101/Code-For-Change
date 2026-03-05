import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sponsorsData from "../data/sponsorsData";
import "../styles/sponsors.css";

const titleVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Sponsors() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const tiers = [
    { key: "platinum", label: "PLATINUM SPONSORS", color: "var(--st-cyan)" },
    { key: "gold", label: "GOLD SPONSORS", color: "#ffd700" },
    { key: "silver", label: "SILVER SPONSORS", color: "#e8e8e8" },
  ];

  return (
    <section className="st-section sponsors-section" id="sponsors" ref={ref}>
      <div className="st-container">
        <motion.h2
          className="st-section-title"
          variants={titleVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          PARTNERS FROM THE OTHER SIDE
        </motion.h2>

        <div className="sponsor-tiers-container">
          {tiers.map((tier) => (
            <div key={tier.key} className="sponsor-tier">
              <h3 className="sponsor-tier-label" style={{ color: tier.color }}>
                {tier.label}
              </h3>
              <div className="sponsor-tier-underline"></div>

              <div className="sponsor-grid-centered">
                {sponsorsData[tier.key].map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="sponsor-card-new shadow-new"
                  >
                    {sponsor.link ? (
                      <a
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={sponsor.logo}
                          alt={sponsor.alt || sponsor.name}
                          className="sponsor-logo-img"
                        />
                      </a>
                    ) : (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.alt || sponsor.name}
                        className="sponsor-logo-img"
                      />
                    )}
                    <span className="sponsor-name-tooltip">{sponsor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}