export const siteConfig = {
  name: "Jeevika Foundation",
  siteUrl: "https://example.com",
  basePath: "",
  email: "jeevikafoundation@gmail.com",
  phone: "+91 7770000347",
  location: "2nd Floor, Shree Ganesh Complex, FC Road, Shivajinagar, Pune, Maharashtra 411005",
  workingHours: {
    weekdays: "Monday to Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 4:00 PM",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/iamkamlesh18" },
    { label: "Instagram", href: "https://instagram.com/thekalpesh9" },
    { label: "LinkedIn", href: "https://linkedin.com/in/iamkamlesh18" },
    { label: "Twitter", href: null },
    { label: "WhatsApp", href: "https://wa.me/917770000347?text=Hi%20Kamlesh%2C%20I%20would%20like%20to%20discuss%20with%20you%20about%20Jeevika%20Foundation." },
  ],
  navigation: [
    { path: "/", label: "Home" },
    { path: "/about/", label: "About" },
    { path: "/projects/", label: "Programs" },
    { path: "/impact/", label: "Impact" },
    { path: "/get-involved/", label: "Get Involved" },
    { path: "/blog/", label: "Stories" },
    { path: "/contact/", label: "Contact" },
  ],
  focusAreas: [
    "Education Access",
    "Livelihood Programs",
    "Healthcare",
    "Women Empowerment",
    "Community Development",
  ],
} as const

export const sitePaths = {
  home: `${siteConfig.basePath}`,
  about: `${siteConfig.basePath}/about`,
  projects: `${siteConfig.basePath}/projects`,
  impact: `${siteConfig.basePath}/impact`,
  getInvolved: `${siteConfig.basePath}/get-involved`,
  team: `${siteConfig.basePath}/team`,
  blog: `${siteConfig.basePath}/blog`,
  contact: `${siteConfig.basePath}/contact`,
  privacyPolicy: `${siteConfig.basePath}/privacy-policy`,
  termsOfService: `${siteConfig.basePath}/terms-of-service`,
  cookiePolicy: `${siteConfig.basePath}/cookie-policy`,
} as const

export function buildAbsoluteUrl(path = "") {
  const origin = typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : siteConfig.siteUrl

  if (!path) {
    return `${origin.replace(/\/$/, "")}${siteConfig.basePath}`
  }

  if (/^https?:\/\//.test(path)) {
    return path
  }

  return `${origin.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`
}

