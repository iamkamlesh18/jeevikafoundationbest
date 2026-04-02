import {
  FiActivity,
  FiAward,
  FiBook,
  FiCompass,
  FiHeart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi"

export const organizationOverview = {
  name: "Jeevika Foundation",
  tagline: "Building dignity, opportunity, and resilience alongside communities.",
  mission:
    "Jeevika Foundation works alongside underserved communities to strengthen access to education, health, livelihoods, and grassroots leadership through patient, community-led programs.",
  story: [
    "Jeevika Foundation began with a simple belief: meaningful change lasts when communities are trusted, listened to, and supported over time.",
    "What started as a grassroots effort has grown into a network of field teams, volunteers, educators, health workers, and local partners working across multiple districts.",
    "Our work is designed for long-term capability, not short-term visibility. We respond to local priorities, strengthen local ownership, and stay committed beyond the first intervention.",
  ],
} as const

export const values = [
  {
    title: "Mission-Driven",
    description: "Every decision is guided by social purpose, measurable progress, and responsible follow-through.",
    icon: FiTarget,
  },
  {
    title: "Community-Led",
    description: "We shape programs with communities, not from a distance or in isolation from lived realities.",
    icon: FiUsers,
  },
  {
    title: "Compassionate",
    description: "We listen carefully and respond with dignity, empathy, and respect.",
    icon: FiHeart,
  },
  {
    title: "Transparent",
    description: "Clear communication, honest reporting, and careful stewardship guide our work.",
    icon: FiShield,
  },
  {
    title: "Adaptive",
    description: "We learn from the field and refine our approach as local realities evolve.",
    icon: FiCompass,
  },
  {
    title: "Sustainable",
    description: "We invest in people, relationships, and systems so progress continues beyond a single project cycle.",
    icon: FiAward,
  },
] as const

export const headlineStats = [
  { value: "500+", label: "Families supported", description: "Across education, livelihoods, health, and community initiatives." },
  { value: "300+", label: "Learners supported", description: "Through digital access, scholarships, mentoring, and bridge learning." },
  { value: "50+", label: "Active initiatives", description: "Running across rural and peri-urban communities with local partners." },
  { value: "2000+", label: "Volunteers and partners", description: "Contributing expertise, time, trust, and local leadership." },
] as const

export const impactHighlights = [
  {
    title: "Education Access",
    description: "Digital learning support, scholarships, and bridge-learning opportunities for children and young people.",
    metric: "300+ learners reached",
    icon: FiBook,
  },
  {
    title: "Livelihood Strengthening",
    description: "Vocational training and enterprise support that helps families build steady, sustainable income.",
    metric: "500+ people trained",
    icon: FiTrendingUp,
  },
  {
    title: "Health & Wellbeing",
    description: "Health camps, awareness drives, referrals, and preventive care initiatives in low-access areas.",
    metric: "1000+ beneficiaries per month",
    icon: FiActivity,
  },
  {
    title: "Women’s Leadership",
    description: "Programs that strengthen financial confidence, safety, participation, and community leadership.",
    metric: "300+ women engaged",
    icon: FiUsers,
  },
] as const

export const milestones = [
  { year: "2015", title: "Foundation Established", description: "Jeevika began as a grassroots effort focused on education and local welfare." },
  { year: "2017", title: "First Community Expansion", description: "Programs expanded to reach more families through volunteers, educators, and local partnerships." },
  { year: "2019", title: "Multi-District Initiatives", description: "Livelihood and health interventions were introduced alongside the education portfolio." },
  { year: "2021", title: "Digital Program Delivery", description: "Learning support, tracking, and coordination became more tech-enabled and more scalable." },
  { year: "2023", title: "Regional Partnerships", description: "Collaboration with institutions and grassroots groups deepened implementation capacity." },
  { year: "2026", title: "Integrated Impact Model", description: "The foundation now brings education, livelihoods, health, and leadership together under one long-term strategy." },
] as const

export const leadershipTeam = [
  {
    name: "Ananya Kulkarni",
    role: "Executive Director",
    bio: "Leads strategy, partnerships, and long-term direction with a focus on accountable, community-rooted impact.",
  },
  {
    name: "Raghav Deshmukh",
    role: "Programs Director",
    bio: "Oversees field implementation, program quality, and cross-functional coordination across core initiatives.",
  },
  {
    name: "Meera Joshi",
    role: "Community Partnerships Lead",
    bio: "Builds long-term local alliances with educators, health workers, volunteers, and civic groups.",
  },
  {
    name: "Sana Shaikh",
    role: "Monitoring & Learning Lead",
    bio: "Tracks outcomes, gathers field insight, and strengthens how the foundation learns, adapts, and reports impact.",
  },
] as const

export const testimonials = [
  {
    quote: "This foundation changed my child's future. She now dreams of becoming a teacher.",
    author: "Priya Kumar",
    role: "Parent & Program Beneficiary",
  },
  {
    quote: "The skill training program gave me financial independence. I now run my own business.",
    author: "Rajesh Singh",
    role: "Livelihood Program Graduate",
  },
  {
    quote: "Being a volunteer here has been one of the most meaningful experiences of my life.",
    author: "Aisha Patel",
    role: "Volunteer",
  },
  {
    quote: "The education support helped students from our village get into strong colleges and training programs.",
    author: "Mohan Patil",
    role: "Community Leader",
  },
] as const

export const impactStories = [
  {
    title: "Digital Pathways: From Village to College",
    category: "Education",
    story: "Priya and her siblings live in a remote village with limited internet access. Through our digital learning program, she accessed quality education resources, mentoring, and scholarship support. Today, she's pursuing engineering at a top college.",
    metric: "300+ learners reached annually",
    beneficiary: "Priya Kumar",
  },
  {
    title: "Transforming Skills into Sustainable Income",
    category: "Livelihoods",
    story: "Rajesh completed our vocational training in carpentry and business basics. With microcredit support, he established his own workshop, now employing two apprentices and earning 3x his previous daily wage.",
    metric: "500+ people trained in 2025",
    beneficiary: "Rajesh Singh",
  },
  {
    title: "Health Camps Reach Remote Areas",
    category: "Health",
    story: "Our mobile health clinics visit villages monthly, providing check-ups, awareness on nutrition, maternal health, and disease prevention. One camp detected diabetes in 40 people early, preventing complications.",
    metric: "1000+ beneficiaries per month",
    beneficiary: "Village of Dhanpur",
  },
  {
    title: "Women Leaders Shaping Community Change",
    category: "Women's Leadership",
    story: "Anita was shy and had never spoken in public. Through our women's leadership program, she gained financial literacy, entrepreneurial confidence, and voice in village-level decisions. Now she's a Self Help Group leader.",
    metric: "300+ women in leadership roles",
    beneficiary: "Anita Deshmukh",
  },
  {
    title: "Bridging the Literacy Gap",
    category: "Education",
    story: "Our bridge-learning centers serve 8-14 year-olds who dropped out or never enrolled. Through foundational literacy, numeracy, and life skills, children regain confidence and rejoin formal schools.",
    metric: "150+ children enrolled in bridge programs",
    beneficiary: "Govind, Age 10",
  },
  {
    title: "Community-Led Health Awareness",
    category: "Health",
    story: "Instead of top-down campaigns, we train local health workers from the community. They lead awareness drives on sanitation, vaccination, and prenatal care—trusted voices that actually create behavior change.",
    metric: "5000+ people reached annually",
    beneficiary: "Health Worker Network",
  },
] as const

export const involvementOptions = [
  {
    title: "Volunteer Your Time",
    description: "Support field events, mentoring, digital literacy, communications, and community outreach.",
  },
  {
    title: "Partner With Us",
    description: "Collaborate on CSR, institutional partnerships, research, or capacity-building initiatives.",
  },
  {
    title: "Give Strategically",
    description: "Fund a program area, sponsor essential resources, or support flexible community-responsive work.",
  },
  {
    title: "Share Our Mission",
    description: "Help us reach more supporters, advocates, and local champions through your networks.",
  },
] as const

export const organizationFaqs = [
  {
    question: "How can I volunteer with Jeevika Foundation?",
    answer:
      "You can contact us with your interests, skills, and availability. We align volunteers with suitable on-ground or remote opportunities.",
  },
  {
    question: "Do you work only in one district?",
    answer:
      "No. Our programs span multiple districts, and we expand carefully where local partnerships and implementation capacity exist.",
  },
  {
    question: "Can organizations collaborate with you?",
    answer:
      "Yes. We welcome collaboration with companies, educational institutions, healthcare providers, and grassroots groups.",
  },
  {
    question: "How do you measure impact?",
    answer:
      "We track participation, outcomes, stories from the field, and program-level indicators to strengthen delivery and transparency.",
  },
] as const
