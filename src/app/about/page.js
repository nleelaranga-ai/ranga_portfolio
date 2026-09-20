import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About — Leela Ranga Prasad | AI Systems & Software Engineer",
  description: "Learn about Leela Ranga Prasad — Artificial Intelligence & Data Science undergraduate at VR Siddhartha Engineering College (2024–2028), specializing in Backend AI Systems, NLP pipelines, and Applied Machine Learning.",
  keywords:    ["Leela Ranga Prasad", "AI Engineer", "Machine Learning", "VRSEC", "Python Developer", "Google Student Ambassador"],
  openGraph: {
    title: "About — Leela Ranga Prasad | AI Systems & Software Engineer",
    description: "Artificial Intelligence & Data Science undergraduate at VRSEC specializing in Backend AI Systems, NLP pipelines, and Applied Machine Learning.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
