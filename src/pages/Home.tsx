import { motion } from "framer-motion"
import { FiArrowRight, FiBook, FiHeart, FiTrendingUp, FiCheck } from "react-icons/fi"
import { Link } from "react-router-dom"
import { routes } from "../routes"
import { headlineStats, impactHighlights, testimonials } from "../data/organization"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Home.css"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Home() {
  usePageTitle(pageTitles.home.title, pageTitles.home.description)
  return (
    <div className="home">
      {/* Premium Hero Section */}
      <section className="hero">
        {/* Animated Background Layer */}
        <div className="hero-bg">
          <svg className="hero-svg-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2f6b49" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#8fd3a2" stopOpacity="0.05" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated Circles */}
            <circle cx="200" cy="150" r="120" fill="url(#heroGrad1)" opacity="0.6" filter="url(#glow)" className="hero-circle hero-circle-1" />
            <circle cx="1000" cy="200" r="140" fill="url(#heroGrad1)" opacity="0.4" filter="url(#glow)" className="hero-circle hero-circle-2" />
            <circle cx="600" cy="500" r="100" fill="url(#heroGrad1)" opacity="0.5" filter="url(#glow)" className="hero-circle hero-circle-3" />
          </svg>

          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>
          <div className="gradient-orb gradient-orb-4"></div>
        </div>

        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Tagline */}
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Gentle, rooted, community-first
            </motion.p>

            {/* Organization Name */}
            <motion.h2
              className="hero-org-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Jeevika Foundation
            </motion.h2>

            {/* Animated Line */}
            <motion.div 
              className="hero-accent-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Subtitle - Building dignity... */}
            <motion.p
              className="hero-subtitle-main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Building <span className="gradient-text">dignity, opportunity, and resilience</span> alongside communities
            </motion.p>

            <motion.div
              className="hero-divider"
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />

            {/* Description paragraph */}
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              We work alongside underserved communities to strengthen access to education, health, livelihoods, and grassroots leadership through patient, community-led programs.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <Link to={routes.about} className="btn btn-primary">
                Our Story <FiArrowRight size={18} />
              </Link>
              <Link to={routes.getInvolved} className="btn btn-secondary">
                Get Involved
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="scroll-dot"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Exploration Section */}
      <section className="programs-intro-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="programs-intro-header"
          >
            <p className="section-kicker">Explore Programs</p>
            <h2 className="programs-intro-title">Focus Areas</h2>
            <p className="programs-intro-description">Our work spans three interconnected focus areas, each designed to strengthen community resilience and opportunity.</p>
          </motion.div>

          <motion.div
            className="programs-intro-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: FiBook, title: "Education", description: "Digital learning support, scholarships, and bridge-learning opportunities" },
              { icon: FiHeart, title: "Health", description: "Community health outreach, awareness, and preventive care initiatives" },
              { icon: FiTrendingUp, title: "Livelihoods", description: "Vocational training and enterprise support for sustainable income" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div key={idx} className="program-intro-card" variants={itemVariants}>
                  <div className="program-intro-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {headlineStats.map((stat, idx) => (
              <motion.div key={idx} className="stat-card" variants={itemVariants}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <p className="stat-description">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <motion.div
            className="trust-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="trust-icon">
              <FiCheck size={32} />
            </div>
            <h2 className="trust-title">Steady local partnerships and community-rooted support</h2>
            <p className="trust-subtitle">Built with local trust</p>
            <p className="trust-description">
              Our work is designed for long-term capability, not short-term visibility. We respond to local priorities, strengthen local ownership, and stay committed beyond the first intervention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="impact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <p className="section-kicker">Our Impact</p>
            <h2>Creating Lasting Change Across Communities</h2>
            <p className="section-description">We measure success through meaningful progress in education, livelihoods, health, and leadership.</p>
          </motion.div>

          <motion.div
            className="impact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {impactHighlights.map((highlight, idx) => {
              const Icon = highlight.icon
              return (
                <motion.div key={idx} className="impact-card" variants={itemVariants}>
                  <div className="impact-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                  <div className="impact-metric">{highlight.metric}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <p className="section-kicker">Stories from the Field</p>
            <h2>Voices of Change</h2>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} className="testimonial-card" variants={itemVariants}>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Make a Difference?</h2>
            <p>Join us in building communities where everyone has dignity, opportunity, and hope.</p>
            <Link to={routes.getInvolved} className="btn btn-light">
              Explore Ways to Help <FiArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
