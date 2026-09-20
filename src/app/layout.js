import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = "https://sarang-space.site";

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Leela Ranga Prasad — AI Systems & Software Engineer",
    template: "%s — Leela Ranga Prasad | AI Systems Engineer",
  },
  description:
    "Artificial Intelligence & Data Science undergraduate at VR Siddhartha Engineering College specializing in Backend AI Systems, NLP pipelines, API orchestration, and Applied Machine Learning.",
  keywords: [
    "Leela Ranga Prasad", "AI Systems Engineer", "Machine Learning", 
    "Python Developer", "Flask", "NLP Pipelines", "API Orchestration", 
    "Google Student Ambassador", "VRSEC", "Vijayawada", "Data Engineering"
  ],
  authors: [{ name: "Leela Ranga Prasad", url: BASE }],
  creator: "Leela Ranga Prasad",
  publisher: "Leela Ranga Prasad",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Leela Ranga Prasad — AI Systems & Software Engineer",
    title: "Leela Ranga Prasad — AI Systems & Software Engineer",
    description: "Artificial Intelligence & Data Science undergraduate at VR Siddhartha Engineering College specializing in Backend AI Systems, NLP pipelines, API orchestration, and Applied Machine Learning.",
    images: [{
      url: "/photo/hero.webp",
      width: 1200,
      height: 630,
      alt: "Leela Ranga Prasad — AI Systems & Software Engineer",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Leela Ranga Prasad — AI Systems & Software Engineer",
    description: "Artificial Intelligence & Data Science undergraduate at VR Siddhartha Engineering College specializing in Backend AI Systems, NLP pipelines, API orchestration, and Applied Machine Learning.",
    images: ["/photo/hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/photo/favicon.png", type: "image/png" },
    ],
    apple: "/photo/favicon.png",
    shortcut: "/photo/favicon.png",
  },

  manifest: "/manifest.json",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": "Leela Ranga Prasad",
      "url": BASE,
      "jobTitle": "AI Systems & Software Engineer",
      "description": "Artificial Intelligence & Data Science undergraduate at VR Siddhartha Engineering College (2024–2028). Specializing in Backend AI Systems, NLP pipelines, API orchestration, and Applied Machine Learning.",
      "knowsAbout": [
        "Python", "Flask", "Machine Learning", "Natural Language Processing",
        "REST APIs", "Data Structures and Algorithms", "Git", "GitHub", "Postman", "Linux"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "VR Siddhartha Engineering College"
      },
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "Google Android Developer Intern",
          "occupationLocation": { "@type": "Country", "name": "India" },
          "skills": "Android, Kotlin, Mobile App Development"
        },
        {
          "@type": "Occupation",
          "name": "Campus Ambassador",
          "occupationLocation": { "@type": "Country", "name": "India" },
          "skills": "Community Leadership, Event Coordination"
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Systems & Intelligent Agents",
            "description": "Building production-ready conversational agents, WhatsApp automation, and intelligent task orchestration."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backend AI & NLP Pipelines",
            "description": "High-throughput RESTful services, Python Flask backends, and automated NLP pipelines."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Applied Machine Learning Solutions",
            "description": "Custom machine learning models, predictive pipelines, and automated data engineering workflows."
          }
        }
      ],
      "sameAs": [
        "https://linkedin.com/in/leela-rangaprasad-ba4936214"
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}/#localbusiness`,
      "name": "Leela Ranga Prasad — AI Systems & Software Engineer",
      "image": `${BASE}/photo/hero.webp`,
      "url": BASE,
      "email": "n.leelaranga@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vijayawada",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      },
      "description": "AI Systems and Software Engineering portfolio of Leela Ranga Prasad.",
      "founder": { "@id": `${BASE}/#person` }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": "Leela Ranga Prasad — AI Systems & Software Engineer",
      "description": "Portfolio of Leela Ranga Prasad, specializing in Backend AI Systems, NLP pipelines, and Applied Machine Learning.",
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      "url": BASE,
      "name": "Leela Ranga Prasad — AI Systems Portfolio",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "mainEntity": { "@id": `${BASE}/#person` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${BASE}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Work", "item": `${BASE}/work` },
          { "@type": "ListItem", "position": 4, "name": "About", "item": `${BASE}/about` },
          { "@type": "ListItem", "position": 5, "name": "Contact", "item": `${BASE}/contact` },
        ],
      },
    },
    {
      "@type": "ItemList",
      "name": "Featured AI Systems",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "WhatsApp-Based AI Assistant",
          "description": "Multi-functional assistant with task reminders, translation, grammar correction, and Q&A via WhatsApp Cloud API."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Backend & NLP Pipelines",
          "description": "Scalable Flask services for NLP text processing and webhook orchestration."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Applied Machine Learning Workflows",
          "description": "Data processing and predictive ML pipelines."
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Leela Ranga Prasad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Leela Ranga Prasad is an Artificial Intelligence & Data Science undergraduate at VR Siddhartha Engineering College (2024–2028), specializing in Backend AI Systems, NLP pipelines, and Applied Machine Learning."
          }
        },
        {
          "@type": "Question",
          "name": "What are Leela Ranga Prasad's core skills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Core technical skills include Python, Flask, Machine Learning, Natural Language Processing (NLP), REST APIs, Data Structures & Algorithms, and Git/GitHub."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Leela Ranga Prasad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach Leela via email at n.leelaranga@gmail.com or connect on LinkedIn at linkedin.com/in/leela-rangaprasad-ba4936214."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/#webpage`,
      "url": BASE,
      "name": "Leela Ranga Prasad — AI Systems & Software Engineer",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "description": "Portfolio of Leela Ranga Prasad — AI Systems & Software Engineer specializing in backend AI systems, NLP pipelines, and machine learning.",
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".hero-tagline", ".about-summary", "article p"]
      }
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

