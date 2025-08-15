import React from "react";
// import bg from "../../assests/image.webp";           // background photo
import avatar from "../../assests/profile.jpeg";      // <-- replace with your headshot
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen bg-gradient-to-r from-gray-800 via-gray-800 to-black flex items-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Karanveer Sidhu"
          className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full ring-4 ring-white shadow-2xl mb-6 object-cover"

        />

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
          Karanveer Sidhu
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl italic text-gray-200">
          Software Engineer · AI/ML Researcher
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex items-center gap-4">
          <Link
            to="skills"      // your “About” section id
            smooth={true}
            duration={600}
            offset={-60}
            className="cursor-pointer rounded-xl bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-900 shadow hover:bg-white transition"
          >
            Enter Portfolio
          </Link>

          <Link
            to="contactPage"
            smooth={true}
            duration={600}
            offset={-60}
            className="cursor-pointer rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
