import { motion } from "framer-motion"
import { leadershipTeam } from "../data/organization"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Pages.css"

export default function Team() {
  usePageTitle(pageTitles.team.title, pageTitles.team.description)
  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Dedicated professionals working toward lasting community impact.
          </motion.p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {leadershipTeam.map((member, idx) => (
              <motion.div
                key={member.name}
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
                }}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
              >
                {/* Member Avatar */}
                <div
                  style={{
                    backgroundColor: "var(--bg-light)",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 80,
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  {member.name.charAt(0)}
                </div>

                {/* Member Info */}
                <div style={{ padding: 24 }}>
                  <h3 style={{ marginBottom: 8 }}>{member.name}</h3>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", marginBottom: 16, textTransform: "uppercase" }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
