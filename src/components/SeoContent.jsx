/**
 * SeoContent — Hidden semantic HTML for search engines & AI crawlers.
 * 
 * This component renders keyword-rich, structured text that search engines
 * and AI bots can crawl, even when the visual content is animated/JS-driven.
 * It's visually hidden but fully accessible to screen readers and crawlers.
 */
export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">Leela Ranga Prasad — AI Systems & Software Engineer</h1>
      
      <p itemProp="description">
        Artificial Intelligence & Data Science undergraduate at VR Siddhartha Engineering College (2024–2028).
        Specializing in high-performance Backend AI Systems, Natural Language Processing (NLP) pipelines, 
        API orchestration, and Applied Machine Learning. Google Student Ambassador and former IIT Delhi eDC Campus Ambassador.
      </p>

      <p itemProp="jobTitle">AI Systems & Software Engineer</p>

      <section aria-label="Core Engineering Areas">
        <h2>Engineering Disciplines — Leela Ranga Prasad</h2>
        
        <article>
          <h3>AI Systems & Intelligent Agents</h3>
          <p>
            Designing and deploying production-ready AI agents and automated workflows.
            Creator of the WhatsApp-Based AI Assistant integrating WhatsApp Business Cloud API,
            automated reminders, real-time multi-language translation, grammar correction, and file processing.
          </p>
        </article>

        <article>
          <h3>Backend AI & NLP Pipelines</h3>
          <p>
            Building high-throughput microservices and RESTful APIs using Python and Flask.
            Designing NLP pipelines for text parsing, classification, context retrieval, and structured data extraction.
          </p>
        </article>

        <article>
          <h3>Applied Machine Learning & Data Engineering</h3>
          <p>
            Developing end-to-end ML workflows, data preprocessing pipelines, feature engineering,
            and predictive models grounded in rigorous Data Structures and Algorithms.
          </p>
        </article>
      </section>

      <section aria-label="Education & Experience">
        <h2>Education and Experience</h2>
        <ul>
          <li>B.Tech in Artificial Intelligence & Data Science — VR Siddhartha Engineering College (2024–2028)</li>
          <li>Google Android Developer Intern — EduSkills Foundation (Jan 2026 – Mar 2026)</li>
          <li>Campus Ambassador — IIT Delhi eDC (Dec 2025 – Feb 2026)</li>
          <li>Student Representative — Google Student Ambassadors India (Dec 2025 – Jan 2026)</li>
        </ul>
      </section>

      <section aria-label="Technical Skills">
        <h2>Technical Stack</h2>
        <p itemProp="knowsAbout">
          Python, Flask, Machine Learning, Natural Language Processing (NLP), REST APIs, 
          Data Structures & Algorithms, Git, GitHub, VS Code, Postman, Linux, Bash
        </p>
      </section>

      <section aria-label="Certifications">
        <h2>Verified Certifications</h2>
        <ul>
          <li>Snowflake Data Engineering</li>
          <li>Microsoft PM Certification</li>
          <li>Introduction to BIM</li>
          <li>Quantum Fundamentals Phase 1</li>
          <li>Python Essentials 1</li>
        </ul>
      </section>

      <section aria-label="Contact">
        <h2>Contact Information</h2>
        <p>
          <span>Email: n.leelaranga@gmail.com</span> |
          <span>LinkedIn: https://linkedin.com/in/leela-rangaprasad-ba4936214</span> |
          <span>Location: Vijayawada, Andhra Pradesh, India</span>
        </p>
      </section>
    </div>
  );
}
