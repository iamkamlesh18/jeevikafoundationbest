import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FiSearch, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"
import { posts } from "../data/posts"
import { usePageTitle } from "../hooks/usePageTitle"
import { pageTitles } from "../config/pageTitles"
import "./Pages.css"

const categories = ["All", "Education", "Livelihood", "Healthcare", "Development", "Community", "Relief"]

export default function Blog() {
  usePageTitle(pageTitles.blog.title, pageTitles.blog.description)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = activeCategory === "All" || post.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, activeCategory])

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Stories & Insights
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Discover stories from the field and insights from our work across communities.
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section className="page-content" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ maxWidth: 600, margin: "0 auto", marginBottom: 32 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "12px 16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <FiSearch color="var(--primary)" size={20} />
                <input
                  type="text"
                  placeholder="Search stories by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: 14,
                    fontFamily: "inherit",
                    backgroundColor: "transparent",
                  }}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FiX color="var(--text-muted)" size={18} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {categories.map((category, idx) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 6,
                    border: "1px solid var(--border)",
                    backgroundColor: activeCategory === category ? "var(--primary)" : "white",
                    color: activeCategory === category ? "white" : "var(--text)",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="page-content">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        overflow: "hidden",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {/* Image/Icon */}
                      <div
                        style={{
                          backgroundColor: "var(--bg-light)",
                          padding: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 56,
                          minHeight: 160,
                        }}
                      >
                        {post.image}
                      </div>

                      {/* Content */}
                      <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", marginBottom: 8 }}>
                          {post.category} • {post.date}
                        </p>
                        <h3 style={{ marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h3>
                        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16, lineHeight: 1.6, flex: 1 }}>
                          {post.excerpt}
                        </p>

                        <motion.button
                          whileHover={{ x: 4 }}
                          style={{
                            alignSelf: "flex-start",
                            padding: "8px 16px",
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
                          Read Story →
                        </motion.button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", padding: "60px 20px" }}
            >
              <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 12 }}>
                No stories found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("All")
                }}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="page-content" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <h2 style={{ marginBottom: 24 }}>Impact Through Stories</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, color: "var(--primary)", marginBottom: 8 }}>{posts.length}</p>
                <p style={{ color: "var(--text-muted)" }}>Stories Published</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, color: "var(--primary)", marginBottom: 8 }}>
                  {new Set(posts.map((p) => p.category)).size}
                </p>
                <p style={{ color: "var(--text-muted)" }}>Impact Categories</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 700, color: "var(--primary)", marginBottom: 8 }}>100+</p>
                <p style={{ color: "var(--text-muted)" }}>Monthly Readers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
