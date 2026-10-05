import {
  BarChart3,
  BriefcaseBusiness,
  Database,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Map,
  MessageSquare,
  PieChart,
  Sparkles
} from "lucide-react";
import type { ContactLink, EducationItem, ExperienceItem, NavItem, Project, SkillGroup } from "@/types/portfolio";

export const contact = {
  email: "h13965060422@gmail.com",
  emailHref: "mailto:h13965060422@gmail.com",
  github: "https://github.com/ruilinBig4st",
  linkedin: "https://www.linkedin.com/in/ruilin-hu-75353a410",
  resumeUrl: "/resume/ruilin-hu-resume.pdf"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" }
];

export const education: EducationItem[] = [
  {
    school: "University of Southern California",
    degree: "M.S. in Economic and Data Science | Current GPA: 3.75/4.0",
    detail: "Graduate studying in  Machine Learning; Data Management; Econometrics; Microeconomic Analysis. "
  },
  {
    school: "University of California, Davis",
    degree: "B.S. in Statistics, Data Science Track | GPA: 3.635/4.0",
    detail: "Machine Learning, Statistical Learning, Database Systems, Statistical Modeling, Probability Theory, Mathematical Statistics, Data Management, Data Visualization."
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "Hungry Panda",
    role: "Business Development & Marketing Intern",
    period: "May 2025 - Jul 2025",
    icon: BriefcaseBusiness,
    bullets: [
      "Developed partnerships with local restaurants and beverage shops to support merchant acquisition and promotional campaigns in the Davis market.",
      "Built and managed a 500+ member WeChat community, increasing local user engagement and contributing to a 10% lift in brand awareness.",
      "Translated local merchant and student-customer feedback into campaign priorities for a cross-cultural food delivery platform."
    ]
  },
  {
    company: "China Industrial Bank",
    role: "Loan Department Intern",
    period: "Jul 2024 - Aug 2024",
    icon: BarChart3,
    bullets: [
      "Assisted with credit loan processing by reviewing personal credit reports and merchant information used to evaluate loan limits.",
      "Supported customer loan application procedures while maintaining attention to documentation accuracy and process consistency.",
      "Built practical exposure to banking operations, credit risk review, and compliance-oriented financial workflows."
    ]
  },
  {
    company: "USTC Library Language and Education Center",
    role: "Teaching Assistant",
    period: "Jul 2024 - Aug 2024",
    icon: MessageSquare,
    bullets: [
      "Assisted faculty with classroom teaching, lecture delivery, student tutoring, and task coordination for language education programs.",
      "Communicated concepts to students with varied backgrounds, strengthening presentation, facilitation, and audience-adapted explanation skills.",
      "Managed classroom responsibilities as a younger teaching assistant and completed assigned academic support tasks reliably."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "mini-sql-engine-health-data",
    title: "Mini SQL Engine for Health Data Exploration",
    eyebrow: "Data Systems / Analytics Engineering",
    icon: Database,
    stack: ["Python", "SQL Parsing", "CSV Processing", "Relational Operations", "Testing"],
    businessValue:
      "Built a lightweight SQL-style query engine from scratch to explore 253,680 health survey records across heart disease, BMI, activity, age, income, and care-access variables.",
    highlights: [
      "Implemented custom CSV parsing, column-oriented in-memory storage, SELECT projection, WHERE filtering, GROUP BY aggregation, and inner joins.",
      "Validated relational operations with tests covering projection, filtering, aggregation, joins, and SQL query execution.",
      "Used health indicators data to support exploratory questions such as obesity prevalence, activity patterns, and heart disease rates by age group."
    ],
    overview:
      "A from-scratch Python query engine that turns CSV files into a simplified relational analysis layer. The project demonstrates how analytical operations work below the surface of SQL tools.",
    role:
      "Designed and implemented the CSV parser, in-memory DataFrame abstraction, SQL parser, relational operations, command-line app, and validation scripts.",
    challenge:
      "The core challenge was translating SQL-like syntax into executable operations without relying on pandas, SQLite, or a database engine while keeping the code understandable for an academic systems project.",
    solution:
      "I built column-oriented storage, then layered projection, filtering, aggregation, joins, and a basic SQL interpreter over it. I also used targeted tests to validate behavior across the main relational operations.",
    results: [
      "Processed a 253,680-row public health indicators dataset with 22 variables.",
      "Supported SELECT, WHERE, GROUP BY aggregation, and inner join workflows.",
      "Created a project that is strongest for SQL-heavy analyst and analytics engineering interviews."
    ],
    details: [
      "The engine loads CSV data into Python dictionaries keyed by column names.",
      "Filtering attempts numeric comparison first and falls back to string comparison.",
      "Join logic handles column name collisions by suffixing right-table duplicates.",
      "Current limitations include incomplete LIMIT, ORDER BY, boolean condition, and production-grade SQL parsing support."
    ],
    links: [
      { label: "Live Demo", href: "/demos/mini-sql-engine" },
      { label: "Source Zip", href: "/downloads/mini-sql-engine-source.zip" },
      { label: "Source + Data", href: "/downloads/mini-sql-engine-with-data.zip" },
      { label: "GitHub Repository", disabledReason: "Repository URL has not been provided yet." }
    ],
    screenshots: [
      {
        title: "Query Engine Flow",
        description: "CSV parser, DataFrame abstraction, SQL parser, and relational operation pipeline.",
        kind: "terminal"
      },
      {
        title: "Health Data Exploration",
        description: "Example workflows over BMI, physical activity, age, income, healthcare access, and heart disease outcomes.",
        kind: "dashboard"
      }
    ]
  },
  {
    slug: "interactive-rental-market-visualization",
    title: "Interactive Rental Market Visualization",
    eyebrow: "Data Visualization / Interactive Analytics",
    icon: Map,
    stack: ["R", "Plotly", "Mapbox", "Crosstalk", "HTML", "JavaScript"],
    businessValue:
      "Built an interactive rental-market explorer for 600 Sacramento-area Craigslist listings, helping users connect geographic location with price, square footage, and property details.",
    highlights: [
      "Linked a Mapbox rental map with a Plotly price-vs-square-footage scatter plot using Crosstalk highlighting.",
      "Added JavaScript click and double-click callbacks to reveal listing-level details and synchronize selections across views.",
      "Surfaced a geographic insight that larger rental units in the sample clustered around Davis while Woodland listings tended to be smaller."
    ],
    overview:
      "An interactive data visualization project that helps users explore rental listings geographically and analytically through linked map, scatter plot, and detail-table interactions.",
    role:
      "Built the R htmlwidgets application, linked Plotly and Mapbox views, authored JavaScript callbacks, and exported the result as a deployable HTML demo.",
    challenge:
      "Static charts make it difficult to connect listing-level context with spatial and numerical patterns. The project needed an interface where one clicked rental unit could stay synchronized across views.",
    solution:
      "I used Crosstalk highlighting to connect the map and scatter plot, then added JavaScript event handlers that display listing metadata in a dynamic HTML table on click and hide it on double-click.",
    results: [
      "Built a live interactive demo from 600 Sacramento-area Craigslist rental listings.",
      "Connected location, price, square footage, bathroom count, and listing metadata in one interface.",
      "Revealed a sample pattern: larger listings clustered around Davis while Woodland listings tended to be smaller."
    ],
    details: [
      "The map uses Plotly Mapbox markers with price-based color encoding.",
      "The scatter plot compares square footage and price, with bathroom count encoded through color.",
      "Both views share click highlighting, hover links, and listing-level detail display.",
      "The published demo uses OpenStreetMap tiles without an embedded access token."
    ],
    links: [
      { label: "Live Demo", href: "/demos/interactive-rental-market/index.html" },
      { label: "GitHub Repository", href: "https://github.com/ruilinBig4st/ruilin-hu-portfolio/tree/master/public/demos/interactive-rental-market" }
    ],
    screenshots: [
      {
        title: "Linked Rental Map",
        description: "Geospatial view of Sacramento-area rental listings with point-level interaction.",
        kind: "map"
      },
      {
        title: "Price vs. Square Footage",
        description: "Interactive scatter plot synchronized with the map through Crosstalk highlighting.",
        kind: "dashboard"
      }
    ]
  }
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    icon: Sparkles,
    items: ["Python", "R", "SQL", "C"]
  },
  {
    category: "Data Analysis",
    icon: PieChart,
    items: ["Statistical analysis", "Business analysis", "Data cleaning", "Exploratory analysis"]
  },
  {
    category: "Visualization",
    icon: BarChart3,
    items: ["Plotly", "Mapbox", "Leaflet", "Data storytelling"]
  },
  {
    category: "Tools",
    icon: FileText,
    items: ["Microsoft Office Suite", "Excel", "HTML/JavaScript", "GitHub", "RStudio"]
  }
];

export const socialLinks: ContactLink[] = [
  { label: "Email", href: contact.emailHref, icon: Mail },
  { label: "Resume", href: contact.resumeUrl, icon: Download },
  { label: "GitHub", href: contact.github, icon: Github, external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin, external: true }
];

export const credentials = [
  { label: "Education", value: "UC Davis + USC", icon: GraduationCap },
  { label: "Focus", value: "Analytics, BI, AI-data", icon: BarChart3 },
  { label: "Strength", value: "Business insight", icon: Sparkles }
];

export const portfolio = {
  name: "Ruilin Hu",
  role: "Data Analyst | Economic & Data Science M.S. Student",
  location: "Los Angeles, CA",
  summary:
    "Statistics and Economic & Data Science student focused on turning data into business insights through SQL, Python, R, visualization, and business-facing analysis.",
  headline: "Turning data into business insights.",
  subheadline:
    "I build clear analyses, decision-ready dashboards, and business narratives for data analyst, data scientist, business analyst, and AI-data roles.",
  resumeUrl: contact.resumeUrl,
  contact,
  nav: navItems,
  education,
  strengths: [
    "Translate ambiguous business questions into measurable analysis plans.",
    "Use SQL, Python, R, and visualization tools to surface patterns and recommendations.",
    "Communicate clearly across technical, business, and cross-cultural teams."
  ],
  experience,
  projects,
  skills,
  socialLinks,
  credentials
};

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
