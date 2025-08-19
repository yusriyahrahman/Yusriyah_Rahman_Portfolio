import React from "react";
// Optional local thumbs; you can keep/remove these
import Ecommerce from "../../assests/Chatbot.jpg";
import LADY from "../../assests/clothes.avif";
import commandLineCalculator from "../../assests/Calculator.png";
import calendar from "../../assests/spam.jpg";
import LLM_Server from "../../assests/MAg.gif";
import Tama from "../../assests/Tama.webp";
import StRc from "../../assests/StRc.jpg";
import C4 from "../../assests/C4.webp";
import CP from "../../assests/CP.jpg";
import pong from "../../assests/pong.gif";
import PM from "../../assests/PM.gif";

// Small pill for tech stack
const Badge = ({ children }) => (
  <span className="inline-block rounded-md border border-cyan-500 bg-navy px-2.5 py-1 text-xs text-cyan-300">
    {children}
  </span>
);

const projects = [
  {
    title: "Car Parking Sensor",
    summary:
      "Collaborated with my partner to construct a car parking sensor system wired with Arduino hardware in order to warn cars about how close their surroundings are while backing up to park.",
    tech: ["C++", "Arduino"],
    links: { demo: "" },
    image: CP,
  },
  {
    title: "Clothing Identifier Neural Network Architecture",
    summary:
      "Trained a neural network architecture to identify articles of clothing from images which can be blurry as well.",
    tech: ["Python", "Matplotlib", "NumPy", "TensorFlow", "Keras", "Panda"],
    links: { demo: "" },
    image: LADY,
  },
  {
    title: "Spam Detector",
    summary:
      "Users input emails for processing through the model to predict spam status through the embedded Flask web app. The app integrated the machine learning model using Logistic Regression & CountVectorizer and preprocessing steps into the app for real-time predictions.",
    tech: ["Python", "Flask"],
    links: { demo: "" },
    image: calendar,
  },
  {
    title: "Multi AI Agent Automation Workflow",
    summary:
      "Designed & deployed an orchestrated workflow consisted of automated agents which collaborate across tasks (summarization, web search, file analysis, etc) to output the defined goal.",
    tech: ["Google AI Studio", "Docker", "Gemini", "n8n,", "HTML", "ngrok"],
    links: { demo: "" },
    image: LLM_Server,
  },
  {
    title: "AI Travel Assistant ChatBot",
    summary:
      "Designed & deployed a Conversational AI Agent connected to data sources and APIs to automate the defined goal.",
    tech: ["Google Cloud Vertex AI"],
    links: { demo: "" },
    image: Ecommerce,
  },
  
  {
    title: "Backend Student Records Database Management System",
    summary:
      "Created a database system to add, remove, and search for student records.",
    tech: ["C"],
    links: { demo: "" },
    image: StRc,
  },
  {
    title: "C Command-Line Calculator",
    summary:
      "Performs mathematical calculations like addition, subtraction, square root, and exponents. Also stores values with memory variables.",
    tech: ["C"],
    links: { demo: "" },
    image: commandLineCalculator,
  },
  {
    title: "Pacman",
    summary:
      "User controls the Pac-Man avatar using the arrow keys. Their goal is to earn points by eating the pellets scattered accross the maze. They have to do this while avoiding ghosts which are chasing it.",
    tech: ["Python"],
    links: { demo: "" },
    image: PM,
  },
  {
    title: "Multiplayer Connect 4 Game ",
    summary:
      "Created a text-based Connect 4 game by implemented nested functions, if statements, and switch cases to manage players’ decisions.",
    tech: ["C"],
    links: { demo: "" },
    image: C4,
  },

  {
    title: "Multiplayer Ping Pong Game",
    summary:
      "Each player controls a paddle that moves up and down to hit a ball back and forth. Points are earned when the opposing player fails to return the ball back.",
    tech: ["Java"],
    links: { demo: "" },
    image: pong,
  },

  {
    title: "Tamagotchi Simulator",
    summary: 'Virtual pet simulation game where user interacts with pet by communicating with it and feeding it.',
    tech: ["Java"],
    links: { demo: "" },
    image: Tama,
  }
];

const MyPortfolio = () => {
  return (
    <section id="myPortfolio" className="bg-[#001f3f] text-cyan-300 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-cyan-200">My Projects</h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group rounded-xl border border-cyan-700 bg-[#001a35] p-4 shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full rounded-lg object-cover"
                />
              ) : (
                <div className="flex h-40 w-full items-center justify-center rounded-lg border border-cyan-700 text-sm text-cyan-400">
                  No thumbnail
                </div>
              )}

              <h3 className="mt-4 text-xl font-semibold text-cyan-200">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-cyan-300 leading-relaxed">
                {p.summary}
              </p>

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
                    className="rounded-md border border-cyan-600 px-3 py-1.5 text-sm text-cyan-200 hover:border-cyan-400 hover:text-cyan-100 transition"
                  >
                    Code
                  </a>
                )}
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-cyan-600 px-3 py-1.5 text-sm text-navy hover:bg-cyan-500 transition"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default MyPortfolio;
