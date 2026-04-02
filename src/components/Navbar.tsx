import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"
import { routes } from "../routes"
import Logo from "./Logo"
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => location.pathname === path ? "active" : ""

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks = [
    { path: routes.home, label: "Home" },
    { path: routes.about, label: "About" },
    { path: routes.programs, label: "Programs" },
    { path: routes.impact, label: "Impact" },
    { path: routes.team, label: "Team" },
    { path: routes.blog, label: "Blog" },
    { path: routes.contact, label: "Contact" },
  ]

  return (
    <nav className="navbar" ref={navRef}>
      <Link to={routes.home} className="navbar-logo">
        <Logo />
        <span>Jeevika Foundation</span>
      </Link>

      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        {navLinks.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`nav-link ${isActive(link.path)}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to={routes.getInvolved} className="nav-link" onClick={() => setIsOpen(false)}>
            Get Involved
          </Link>
        </li>
      </ul>
    </nav>
  )
}
