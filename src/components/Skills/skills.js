// src/components/Skills/Skills.jsx  (you can rename to About.jsx)
import React from "react";
import avatar from "../../assests/prog_avatar.jpg"; // your headshot
import { Link } from "react-scroll";

const IconButton = ({ href, label, children }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    aria-label={label}
    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-800 hover:text-white hover:border-white transition"
  >
    {children}
    <span className="sr-only">{label}</span>
  </a>
);


const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top grid: avatar + about text */}
        <div className="grid grid-cols-1 md:grid-cols-[340px,1fr] gap-10 items-start">
          {/* Avatar + socials */}
          <div className="flex flex-col items-center">
            <img
              src={avatar}
              alt="Karanveer Sidhu"
              className="h-64 w-64 rounded-full object-cover ring-8 ring-white shadow-xl"
            />
            <div className="mt-6 flex items-center gap-4">
              <IconButton href="mailto:sidhu66@uwindsor.ca" label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75" />
                </svg>
              </IconButton>

              {/* GitHub */}
              <IconButton href="https://github.com/sidhu66" label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.54 0-.27-.01-.98-.02-1.92-3.06.66-3.71-1.34-3.71-1.34-.5-1.28-1.23-1.62-1.23-1.62-.99-.68.07-.66.07-.66 1.09.08 1.66 1.12 1.66 1.12.98 1.68 2.56 1.19 3.19.91.1-.73.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.12-2.95-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.04 1.13.88-.24 1.82-.36 2.75-.36.94 0 1.87.12 2.75.36 2.11-1.43 3.04-1.13 3.04-1.13.6 1.53.22 2.66.11 2.94.69.77 1.12 1.75 1.12 2.95 0 4.22-2.57 5.15-5.02 5.43.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .3.2.65.76.54 4.36-1.45 7.5-5.57 7.5-10.43C23.01 5.24 18.27.5 12 .5z" />
                </svg>
              </IconButton>

              {/* LinkedIn */}
              <IconButton href="https://www.linkedin.com/in/karanveer-sidhu/" label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.06 19.5H4.56V9h2.5v10.5zM5.81 7.73c-.8 0-1.44-.65-1.44-1.44 0-.79.65-1.43 1.44-1.43s1.44.64 1.44 1.43c0 .79-.64 1.44-1.44 1.44zM20 19.5h-2.5v-5.44c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.08 1.41-2.08 2.87v5.54H11.1V9h2.4v1.43h.03c.33-.62 1.14-1.28 2.35-1.28 2.52 0 2.98 1.66 2.98 3.81V19.5z" />
                </svg>
              </IconButton>
            </div>
          </div>

          {/* Text column */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Karanveer Sidhu
            </h2>
            <p className="mt-2 text-lg font-semibold text-gray-700">
              CS (Honours Co-op) @ University of Windsor · AI/ML Researcher · Software Engineer
            </p>

            <div className="mt-5 space-y-4 leading-relaxed text-gray-700">
              <p>
                I build practical AI systems and full-stack tools. Recent work:
                <strong> LADy</strong> (latent aspect detection for reviews),
                LLM model serving on university GPUs (FastAPI), and predictive
                maintenance with CNN/LSTM. I like shipping clean UIs backed by
                reliable ML pipelines.
              </p>
              <p>
                Interests: NLP & LLMs (prompting, evals, JSON-safe flows), computer
                vision, and data engineering. Currently leveling up on transformers
                and writing neural nets from scratch.
              </p>
            </div>

            {/* Education bullets */}
            <div className="mt-6">
              <h3 className="font-bold text-gray-900">
                University of Windsor
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Bachelor of Computer Science (Honours Co-op)</strong>, Minor in Mathematics
                </li>
                <li>Dean’s Honour Roll</li>
                <li>Research Assistant — LADy (NLP/ABSA)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learn more about my: & buttons */}
        <div className="mt-14 text-center">
          <h4 className="text-2xl font-extrabold text-gray-900">
            Learn more about my:
          </h4>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">

            <Link
              to="myPortfolio"
              smooth={true}
              duration={500}
              offset={-50}
              className="transition cursor-pointer rounded-xl bg-white px-6 py-4 shadow hover:shadow-lg"
            >
              Projects
            </Link>

            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-50}
              className="transition cursor-pointer rounded-xl bg-white px-6 py-4 shadow hover:shadow-lg"
            >
              Experience
            </Link>

          </div>
        </div>

        {/* Skill buckets like your original */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h5 className="text-xl font-semibold mb-3">Programming Languages</h5>
            <p className="text-gray-700">C, Java, Python, JavaScript, HTML/CSS, SQL (Postgres)</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h5 className="text-xl font-semibold mb-3">Frameworks & Libraries</h5>
            <p className="text-gray-700">
              React, Django, Flask, PyTorch, TensorFlow, scikit-learn, pandas, NumPy, Matplotlib
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h5 className="text-xl font-semibold mb-3">Tools & Methodologies</h5>
            <p className="text-gray-700">
              Docker, GitHub, Jira, Figma, Playwright, Scrum, OpenCV
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
