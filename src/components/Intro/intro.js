import React from "react";
import bg from "../../assests/bkg.jpg";       // coding background image
import avatar from "../../assests/profile.jpg";     // your headshot
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Yusriyah Rahman"
          className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full ring-4 ring-black shadow-2xl mb-6 object-cover"
        />

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black tracking-tight">
          Yusriyah Rahman
        </h1>

        {/* CTA buttons */}
        <div className="mt-8 flex items-center gap-4">
          <Link
            to="skills"
            smooth={true}
            duration={600}
            offset={-60}
            className="cursor-pointer rounded-xl bg-white px-6 py-4 text-lg font-semibold text-black shadow hover:bg-gray-200 transition"
          >
            Enter Portfolio
          </Link>

          <Link
            to="contactPage"
            smooth={true}
            duration={600}
            offset={-60}
            className="cursor-pointer rounded-xl bg-white px-6 py-4 text-lg font-semibold text-black shadow hover:bg-gray-200 transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
