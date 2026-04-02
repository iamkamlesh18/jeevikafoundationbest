import { motion } from "framer-motion"
import { organizationOverview, values, milestones } from "../data/organization"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Pages.css"

export default function About() {
  usePageTitle(pageTitles.about.title, pageTitles.about.description)
  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            About Jeevika Foundation
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            {organizationOverview.tagline}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="page-content">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2>Our Mission</h2>
            <p>{organizationOverview.mission}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="page-content" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ marginBottom: 32 }}>Our Story</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
              <div>
                {organizationOverview.story.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    style={{ marginBottom: 16, lineHeight: 1.8 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: "var(--primary)",
                  borderRadius: 16,
                  padding: 40,
                  color: "white",
                  minHeight: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: 48,
                  fontWeight: 700,
                }}
              >
                Building Dignity & Opportunity
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="page-content">
        <div className="container">
          <motion.h2 style={{ marginBottom: 40, textAlign: "center" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Our Values
          </motion.h2>

          <div className="page-grid">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="page-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 12, backgroundColor: "var(--primary)", color: "white", marginBottom: 16 }}>
                    <Icon size={24} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="page-content" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <motion.h2 style={{ marginBottom: 40, textAlign: "center" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Our Journey
          </motion.h2>
          <div style={{ marginTop: 40, maxWidth: 800, margin: "0 auto" }}>
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                style={{
                  marginBottom: 40,
                  display: "flex",
                  gap: 24,
                  paddingBottom: 40,
                  borderBottom: idx !== milestones.length - 1 ? "1px solid var(--border-light)" : "none",
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div style={{ fontWeight: 700, color: "var(--primary)", minWidth: 80, fontSize: 24 }}>{milestone.year}</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 8, fontSize: 18 }}>{milestone.title}</h4>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
