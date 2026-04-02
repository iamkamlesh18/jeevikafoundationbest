import { motion } from "framer-motion"
import { programs } from "../data/programs"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Pages.css"

export default function Programs() {
  usePageTitle(pageTitles.programs.title, pageTitles.programs.description)
  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our Programs
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Comprehensive initiatives across education, livelihoods, health, and community development.
          </motion.p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="page-grid">
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column" as const,
                    height: "100%",
                  }}
                  whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
                >
                    {/* Icon */}
                    <div style={{ padding: 24, backgroundColor: "var(--bg-light)", minHeight: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {Icon && <Icon size={48} color="var(--primary)" />}
                    </div>

                    {/* Content */}
                    <div style={{ padding: 24, flex: 1 }}>
                      <h3 style={{ marginBottom: 12 }}>{program.title}</h3>
                      <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16, lineHeight: 1.6 }}>
                        {program.summary}
                      </p>

                      {/* Outcomes */}
                      {program.outcomes && (
                        <div style={{ marginBottom: 16 }}>
                          <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", color: "var(--primary)", marginBottom: 8 }}>
                            Key Outcomes
                          </p>
                          <ul style={{ paddingLeft: 16 }}>
                            {program.outcomes.map((outcome) => (
                              <li key={outcome} style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Location */}
                      {program.location && (
                        <p style={{ fontSize: 12, fontWeight: 500, color: "var(--primary)", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                          📍 {program.location}
                        </p>
                      )}
                    </div>
                  </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
