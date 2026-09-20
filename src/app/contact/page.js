import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact — Connect with Leela Ranga Prasad | AI Systems & Software Engineer",
  description: "Get in touch with Leela Ranga Prasad for software engineering, backend AI systems, NLP pipelines, and machine learning collaborations.",
  keywords:    ["contact Leela Ranga Prasad", "hire AI engineer", "machine learning engineer", "Python backend", "VRSEC"],
  openGraph: {
    title: "Contact — Leela Ranga Prasad | AI Systems & Software Engineer",
    description: "Get in touch with Leela Ranga Prasad for software engineering, backend AI systems, and machine learning collaborations.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
