import { motion } from "framer-motion"
import { impactHighlights, impactStories } from "../data/organization"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Pages.css"

export default function Impact() {
  usePageTitle(pageTitles.impact.title, pageTitles.impact.description)
  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            Impact & Stories
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Measurable progress and inspiring stories from communities we serve.
          </motion.p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Impact Areas</h2>
          <div className="page-grid">
            {impactHighlights.map((area) => {
              const Icon = area.icon
              return (
                <motion.div key={area.title} className="page-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Icon size={24} style={{ color: "var(--primary)", marginBottom: 12 }} />
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <p style={{ marginTop: 12, fontSize: 12, fontWeight: 600, color: "var(--primary)" }}>{area.metric}</p>
                </motion.div>
              )
            })}
          </div>

          <h2 style={{ marginTop: 60 }}>Community Stories</h2>
          <div style={{ marginTop: 32 }}>
            {impactStories.map((story, idx) => (
              <motion.div
                key={story.title}
                style={{
                  marginBottom: 40,
                  padding: 32,
                  backgroundColor: "var(--bg-light)",
                  borderRadius: 12,
                  borderLeft: "4px solid var(--primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                  <div>
                    <h3 style={{ marginBottom: 4 }}>{story.title}</h3>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", letterSpacing: 0.5 }}>{story.category}</p>
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", backgroundColor: "white", padding: "4px 12px", borderRadius: 20 }}>{story.metric}</p>
                </div>
                <p style={{ marginBottom: 16, lineHeight: 1.8, color: "var(--text-secondary)" }}>{story.story}</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)" }}>— {story.beneficiary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
