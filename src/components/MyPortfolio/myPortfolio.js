import React from "react";
// Optional local thumbs; you can keep/remove these
import Ecommerce from "../../assests/E-commerce.png";
import LADY from "../../assests/LADY.png";
import commandLineCalculator from "../../assests/Command_Line_Calculator.webp";
import calendar from "../../assests/Calendar.jpg";
import LLM_Server from "../../assests/LLM_Server.png";


// Small pill for tech stack
const Badge = ({ children }) => (
  <span className="inline-block rounded-md border border-gray-700 px-2.5 py-1 text-xs text-gray-300">
    {children}
  </span>
);

const projects = [
  {
    title: "LADy — Latent Aspect Detection",
    summary:
      "Research framework for ABSA: dataset integration (SemEval, Google Reviews), preprocessing, evaluation (P/R/F1), and prompt/JSON guardrails.",
    tech: ["Python", "PyTorch", "LLMs", "FastAPI"],
    links: {
      code: "https://github.com/sidhu66/LADy", // put repo link if public
      demo: "",
    },
    image: LADY,
  },
  {
    title: "LLM Model Server (Gemma/DeepSeek)",
    summary:
      "Self-hosted API with FastAPI + Uvicorn. GPU scheduling, JSON-safe outputs, and health/metrics endpoints for evaluation jobs.",
    tech: ["FastAPI", "CUDA", "GitHub Actions"],
    links: { code: "https://github.com/sidhu66/LLM_Model_Server", demo: "" },
    image: LLM_Server,
  },

  {
    title: "E-commerce App",
    summary:
      "Full-stack shop: auth, cart, Stripe test checkout, admin dashboard. React frontend with Django REST backend and PostgreSQL.",
    tech: ["React", "Django", "PostgreSQL"],
    links: { code: "https://github.com/sidhu66/E-Commerce-Website", demo: "" },
    image: Ecommerce,
  },

  {
    title: "C Command-Line Calculator",
    summary: "A menu-driven CLI calculator with support for binaries (add, exp, mod), unary ops (sqrt, log, ceil/floor), variables, and arrays.",
    tech: ["C", "CLI", "Variables", "Math Functions"],
    links: { code: "https://github.com/sidhu66/C-Calculator-Advanced", demo: "" },
    image: commandLineCalculator,
  },

  {
    title: "Python Calendar CLI",
    summary: "Command-line tool to manage dated events through add, list, and delete functions.",
    tech: ["Python", "CLI", "Event Management"],
    links: {
      code: "https://github.com/sidhu66/python-calendar-app",
      demo: ""
    },
    image: calendar
  }



];

const MyPortfolio = () => {
  return (
    <section id="myPortfolio" className="bg-gray-900 text-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="mt-3 text-gray-400">
            A mix of research, ML systems, and full-stack work. Clean code, clear
            evaluations, and deployable artifacts.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group rounded-xl border border-gray-800 bg-gray-850/50 p-4 shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full rounded-lg object-cover"
                />
              ) : (
                <div className="flex h-40 w-full items-center justify-center rounded-lg border border-gray-800 text-sm text-gray-500">
                  No thumbnail
                </div>
              )}

              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">{p.summary}</p>

              {/* Tech badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex items-center gap-3">
                {p.links.code && (
                  <a
                    href={p.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-gray-700 px-3 py-1.5 text-sm text-gray-200 hover:border-white hover:text-white transition"
                  >
                    Code
                  </a>
                )}
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700 transition"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* See more */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/sidhu66?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-200 hover:border-white hover:text-white transition"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
