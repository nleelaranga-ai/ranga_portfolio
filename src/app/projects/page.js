import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Systems & Projects — Engineering Work by Leela Ranga Prasad",
  description: "Explore engineering case studies by Leela Ranga Prasad — WhatsApp-Based AI Assistant, backend NLP pipelines, and applied machine learning systems.",
  keywords:    ["AI projects", "machine learning case studies", "WhatsApp AI Assistant", "NLP pipelines", "Python Flask", "Leela Ranga Prasad"],
  openGraph: {
    title: "Systems & Projects — Leela Ranga Prasad | AI Systems & Case Studies",
    description: "Detailed case studies of AI systems, backend NLP pipelines, and machine learning projects by Leela Ranga Prasad.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
