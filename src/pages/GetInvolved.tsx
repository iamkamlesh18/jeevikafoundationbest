import { motion } from "framer-motion"
import { FiUsers, FiDollarSign, FiShare2 } from "react-icons/fi"
import { involvementOptions } from "../data/organization"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Pages.css"

const iconMap: Record<number, React.ReactNode> = {
  0: <FiUsers size={32} />,
  1: <FiUsers size={32} />,
  2: <FiDollarSign size={32} />,
  3: <FiShare2 size={32} />,
}

export default function GetInvolved() {
  usePageTitle(pageTitles.getInvolved.title, pageTitles.getInvolved.description)
  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Get Involved
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Multiple ways to support our mission and make a tangible difference.
          </motion.p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {involvementOptions.map((option, idx) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: "white",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  padding: 32,
                  textAlign: "center" as const,
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16, color: "var(--primary)" }}>
                  {iconMap[idx]}
                </div>
                <h3 style={{ marginBottom: 12 }}>{option.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {option.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginTop: "auto",
                    padding: "10px 20px",
                    backgroundColor: "var(--primary)",
                    color: "white",
                    border: "none",
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-content" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}
          >
            <h2 style={{ marginBottom: 16 }}>Ready to Make a Difference?</h2>
            <p style={{ marginBottom: 24, fontSize: 16, color: "var(--text-muted)" }}>
              Whether you're interested in volunteering, partnering, or making a donation, we'd love to hear from you. Reach out and let's build impact together.
            </p>
            <motion.a
              href="mailto:hello@jeevika.org"
              whileHover={{ scale: 1.05 }}
              style={{
                display: "inline-block",
                padding: "12px 32px",
                backgroundColor: "var(--primary)",
                color: "white",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
