import React from "react";

const experiences = [
  {
    role: "IT Client Services Student Consultant",
    org: "University of Windsor - Information Systems & Technology",
    location: "Windsor, ON",
    dates: "Apr 2025 – Present",
    bullets: [
      "Service request and incident tracking / triaging using the IT Service Management application (ticketing system), TeamDynamix",
      "Provided solutions to IT and AV hardware/software issues in-person and via remote assistance (phone, live chat, screen connect)",
      "Diagnosed and resolved networking incidents",
      "Maintained identity and access management for University of Windsor accounts of faculty and students"
    ],
    tech: ["Microsoft Entra/Intune Admin Center", "Microsoft Defender Antivirus", "GlobalProtect VPN", "PaperCut"]
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Glendor Inc.",
    location: "Draper, UT (Remote)",
    dates: "Jan 2025 – Apr 2025",
    bullets: [
      "Collaborated with a team with brain MRI/CT scans to investigate the influence of open source defacing algorithms",
      "Analyzed multiple open source brain matter biomarker extraction algorithms",
      "Wrote a framework for to compare and analyze the results of a biomarker extractor after it was defaced",
      "Created a 3D visualization model/prototype with a user interface of the brain MRI/CT scans using multiple back-end, front-end, and gaming environment technologies while embedding C# scripting to automate animations"
    ],
    tech: ["Python", "C#", "Unity", "3D Slicer", "Blender", "Linux", "FSL"]
  }
];

const Chip = ({ children }) => (
  <span className="rounded-md border border-green-500 bg-black px-2 py-0.5 text-xs text-green-400">
    {children}
  </span>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-green-400 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-green-500 text-center">
          My Experience
        </h2>

        {/* Timeline */}
        <ol className="mt-10 relative border-l border-green-600">
          {experiences.map((exp, i) => (
            <li key={i} className="mb-10 ml-4">
              {/* Dot */}
              <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 ring-4 ring-black" />

              {/* Card */}
              <div className="rounded-xl border border-green-500 bg-black p-5 shadow-lg hover:shadow-green-600/50 transition">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-green-400">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-green-300">{exp.dates}</span>
                </div>
                <p className="mt-1 text-green-300">
                  {exp.org} • {exp.location}
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-green-400">
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
