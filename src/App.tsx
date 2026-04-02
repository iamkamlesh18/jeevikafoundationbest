import { BrowserRouter, useLocation, Navigate, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

// Shared Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Impact from "./pages/Impact"
import Team from "./pages/Team"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Contact from "./pages/Contact"
import GetInvolved from "./pages/GetInvolved"

// Routes configuration
import { routes } from "./routes"

function AppContent() {
  const location = useLocation()
  
  return (
    <>
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.programs} element={<Programs />} />
            <Route path={routes.impact} element={<Impact />} />
            <Route path={routes.team} element={<Team />} />
            <Route path={routes.blog} element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.getInvolved} element={<GetInvolved />} />
            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/jeevikafoundation/">
      <AppContent />
    </BrowserRouter>
  )
}

