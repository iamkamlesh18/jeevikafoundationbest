import { useState, useCallback } from "react"
import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck } from "react-icons/fi"
import { siteConfig } from "../site"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Pages.css"

const contactQuestions = [
  {
    question: "How can I volunteer with Jeevika Foundation?",
    answer: "Share your skills, interests, and availability with us. We will suggest volunteer opportunities that fit our current work.",
  },
  {
    question: "Can organizations partner with the foundation?",
    answer: "Yes. We welcome institutional, CSR, research, and implementation partnerships aligned with our mission areas.",
  },
  {
    question: "What is the best way to discuss donations or sponsorships?",
    answer: "Email or call us directly and we can guide you toward the most relevant program area or type of support.",
  },
]

export default function Contact() {
  usePageTitle(pageTitles.contact.title, pageTitles.contact.description)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState<Record<string, boolean>>({})
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const copyToClipboard = useCallback(async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000)
    } catch (err) {
      console.error("Failed to copy", err)
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    event.currentTarget.reset()
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Got a question about our work? Ready to volunteer, partner, or contribute? Reach out and let's build impact together.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="page-content">
        <div className="container">
          <motion.h2 style={{ marginBottom: 40, textAlign: "center" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Reach us anytime
          </motion.h2>

          <div className="page-grid">
            {/* Email Card */}
            <motion.div
              className="page-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 12, backgroundColor: "var(--primary)", color: "white", marginBottom: 16 }}>
                <FiMail size={24} />
              </div>
              <h3>Email us</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>Best for partnerships, volunteering, and program inquiries.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                  onClick={() => copyToClipboard(siteConfig.email, "email")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 12px",
                    backgroundColor: "var(--bg-light)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontSize: 13,
                    transition: "all 0.2s",
                  }}
                  title="Copy email"
                >
                  {copied.email ? <FiCheck color="var(--primary)" /> : <FiCopy />}
                  <span>{siteConfig.email}</span>
                </button>
                <a href={`mailto:${siteConfig.email}`} style={{ padding: "10px 12px", backgroundColor: "var(--primary)", color: "white", borderRadius: 6, textDecoration: "none", textAlign: "center", fontSize: 13, fontWeight: 500, transition: "all 0.2s" }}>
                  Send Email
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="page-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 12, backgroundColor: "var(--primary)", color: "white", marginBottom: 16 }}>
                <FiPhone size={24} />
              </div>
              <h3>Call us</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>For immediate questions and coordination.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                  onClick={() => copyToClipboard(siteConfig.phone, "phone")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 12px",
                    backgroundColor: "var(--bg-light)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontSize: 13,
                    transition: "all 0.2s",
                  }}
                  title="Copy phone"
                >
                  {copied.phone ? <FiCheck color="var(--primary)" /> : <FiCopy />}
                  <span>{siteConfig.phone}</span>
                </button>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} style={{ padding: "10px 12px", backgroundColor: "var(--primary)", color: "white", borderRadius: 6, textDecoration: "none", textAlign: "center", fontSize: 13, fontWeight: 500, transition: "all 0.2s" }}>
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="page-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 12, backgroundColor: "var(--primary)", color: "white", marginBottom: 16 }}>
                <FiMapPin size={24} />
              </div>
              <h3>Visit us</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>{siteConfig.location}</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "10px 12px", backgroundColor: "var(--primary)", color: "white", borderRadius: 6, textDecoration: "none", textAlign: "center", fontSize: 13, fontWeight: 500, transition: "all 0.2s" }}>
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="page-content" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ marginBottom: 12, textAlign: "center" }}>Send us a message</h2>
            <p style={{ marginBottom: 32, textAlign: "center", color: "var(--text-muted)" }}>We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>
                    Full Name <span style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      fontSize: 14,
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>
                    Email Address <span style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      fontSize: 14,
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>
                  What's your inquiry about? <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <select
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    fontSize: 14,
                    fontFamily: "inherit",
                  }}
                >
                  <option value="">Select a topic</option>
                  <option>Volunteering</option>
                  <option>Partnerships</option>
                  <option>Donations</option>
                  <option>General inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>
                  Message <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <textarea
                  placeholder="Tell us about your interest, skills, or how you'd like to collaborate..."
                  rows={6}
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    fontSize: 14,
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontSize: 13, color: "var(--text-muted)" }}>We'll respond thoughtfully within 1-2 business days.</p>
                <button
                  type="submit"
                  style={{
                    padding: "12px 20px",
                    backgroundColor: "var(--primary)",
                    color: "white",
                    border: "none",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Send Message
                </button>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: 12,
                    backgroundColor: "rgba(47, 107, 73, 0.1)",
                    borderRadius: 6,
                    color: "var(--primary)",
                    fontSize: 14,
                  }}
                >
                  <FiCheck size={20} />
                  <span>Thank you! Your message has been sent. We'll get back to you soon.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="page-content">
        <div className="container">
          <motion.div style={{ maxWidth: 700, margin: "0 auto" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ marginBottom: 12, textAlign: "center" }}>Frequently asked questions</h2>
            <p style={{ marginBottom: 32, textAlign: "center", color: "var(--text-muted)" }}>Before reaching out, check if your question is answered here.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactQuestions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    style={{
                      padding: 16,
                      backgroundColor: expandedFAQ === idx ? "var(--bg-light)" : "transparent",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontWeight: 600, fontSize: 15 }}>{item.question}</p>
                    <span style={{ fontSize: 20, color: "var(--primary)" }}>{expandedFAQ === idx ? "−" : "+"}</span>
                  </div>
                  {expandedFAQ === idx && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }} style={{ padding: "0 16px 16px", backgroundColor: "var(--bg-light)", borderTop: "1px solid var(--border)" }}>
                      <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

