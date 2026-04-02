import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"
import { FiArrowLeft, FiClock, FiUser, FiTag } from "react-icons/fi"
import { posts } from "../data/posts"
import { usePageTitle } from "../hooks/usePageTitle"
import "./Pages.css"

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  
  usePageTitle(
    post ? `${post.title} | Jeevika Foundation` : "Post Not Found | Jeevika Foundation",
    post ? post.excerpt : "The post you're looking for couldn't be found."
  )

  if (!post) {
    return (
      <div className="page-container">
        <section className="page-hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              Post Not Found
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              Sorry, we couldn't find the story you're looking for.
            </motion.p>
          </div>
        </section>
        <section className="page-content">
          <div className="container">
            <Link to="/blog" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>
              ← Back to Stories
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const relatedPosts = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  return (
    <div className="page-container">
      {/* Back Button */}
      <section className="page-content">
        <div className="container">
          <Link
            to="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            <FiArrowLeft size={16} />
            Back to Stories
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="page-content">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
                <span style={{ fontSize: 32 }}>{post.image}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", margin: 0 }}>
                    {post.category}
                  </p>
                </div>
              </div>

              <h1 style={{ fontSize: 40, marginBottom: 12, lineHeight: 1.2 }}>{post.title}</h1>

              <div
                style={{
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  paddingBottom: 24,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-muted)", fontSize: 14 }}>
                  <FiClock size={16} />
                  {post.date}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-muted)", fontSize: 14 }}>
                  <FiUser size={16} />
                  {post.author}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-muted)", fontSize: 14 }}>
                  <FiTag size={16} />
                  {post.category}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="page-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: 800, margin: "0 auto" }}
          >
            <div
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--text)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {post.content}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="page-content" style={{ backgroundColor: "var(--bg-light)" }}>
          <div className="container">
            <motion.h2 style={{ marginBottom: 32, textAlign: "center" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              More Stories from {post.category}
            </motion.h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {relatedPosts.map((relatedPost, idx) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={`/blog/${relatedPost.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        overflow: "hidden",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "var(--bg-light)",
                          padding: 24,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 48,
                          minHeight: 120,
                        }}
                      >
                        {relatedPost.image}
                      </div>
                      <div style={{ padding: 20 }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", marginBottom: 8 }}>
                          {relatedPost.category}
                        </p>
                        <h3 style={{ marginBottom: 8, fontSize: 16 }}>{relatedPost.title}</h3>
                        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="page-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "var(--primary)",
              borderRadius: 12,
              padding: 40,
              textAlign: "center",
              color: "white",
            }}
          >
            <h2 style={{ marginBottom: 12, color: "white" }}>Inspired by This Story?</h2>
            <p style={{ marginBottom: 20, fontSize: 16, opacity: 0.9 }}>
              Discover more about our programs and how you can make an impact.
            </p>
            <motion.a
              href="mailto:hello@jeevika.org"
              whileHover={{ scale: 1.05 }}
              style={{
                display: "inline-block",
                padding: "12px 28px",
                backgroundColor: "white",
                color: "var(--primary)",
                borderRadius: 6,
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              Get Involved →
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
