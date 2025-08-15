import React from "react";

const experiences = [
  {
    role: "Research Assistant — Latent Aspect Detection (LADy)",
    org: "School of Computer Science, University of Windsor",
    location: "Windsor, ON",
    dates: "Apr 2025 – Present",
    bullets: [
      "Built ABSA pipeline: data ingestion (SemEval/Google Reviews), preprocessing, and evaluation (precision/recall/F1).",
      "Prototyped LLM prompting with JSON-safe outputs; added guardrails + error recovery.",
      "Served models via FastAPI with health/metrics endpoints for batch evaluations."
    ],
    tech: ["Python", "PyTorch", "LLMs", "FastAPI", "Pandas"]
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Glendor Inc.",
    location: "Draper, UT (Remote)",
    dates: "Jan 2025 – Apr 2025",
    bullets: [
      "Shipped NLP utilities for entity/intent extraction used in internal workflows.",
      "Optimized inference jobs and added caching to cut latency on common queries.",
      "Delivered reproducible notebooks and dashboards for model analysis."
    ],
    tech: ["Python", "scikit-learn", "spaCy", "Pandas"]
  },
  {
    role: "Teaching Assistant",
    org: "School of Computer Science, University of Windsor",
    location: "Windsor, ON",
    dates: "Sep 2024 – Apr 2025",
    bullets: [
      "Led weekly labs; clarified DS/Algo concepts and graded assignments with detailed feedback.",
      "Created starter code and unit tests to standardize grading and reduce errors."
    ],
    tech: ["Python", "Java", "Git"]
  }
];

const Chip = ({ children }) => (
  <span className="rounded-md border border-gray-700 px-2 py-0.5 text-xs text-gray-300">
    {children}
  </span>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-910 text-gray-100 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-white text-center">My Experience</h2>
        <p className="mt-3 text-center text-gray-400">
          Highlights from research, internships, and teaching.
        </p>

        {/* Timeline */}
        <ol className="mt-10 relative border-l border-gray-700">
          {experiences.map((exp, i) => (
            <li key={i} className="mb-10 ml-4">
              {/* Dot */}
              <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-4 ring-gray-900" />

              {/* Card */}
              <div className="rounded-xl border border-gray-800 bg-gray-850/50 p-5 shadow">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="text-sm text-gray-400">{exp.dates}</span>
                </div>
                <p className="mt-1 text-gray-300">
                  {exp.org} • {exp.location}
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
