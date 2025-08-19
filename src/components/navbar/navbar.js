import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuBtn from "../../assests/MenuBtn.png";
import Resume from "../../Yusriyah.pdf";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="bg-[#a4ebc2] text-[#001f3f] sticky top-0 z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Name as Logo and Link to Home(intro) */}
                <Link
                    to="intro"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="hover:text-blue-800 transition cursor-pointer"
                >
                    <span className="text-lg font-bold">
                        <span className="text-[#001f3f]">Yusriyah Rahman</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800 transition cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        to="myPortfolio"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800 transition cursor-pointer"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800 transition cursor-pointer"
                    >
                        Experience
                    </Link>
                    <Link
                        to="contactPage"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800 transition cursor-pointer"
                    >
                        Contact
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href={Resume}
                        download="Yusriyah.pdf"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
                    >
                        Resume
                    </a>
                    <button
                        onClick={() =>
                            document
                                .getElementById("contactPage")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="md:hidden p-2 rounded-md hover:bg-green-300 transition"
                >
                    <img src={MenuBtn} alt="Menu" className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {showMenu && (
                <div className="md:hidden bg-[#a4ebc2] text-[#001f3f] flex flex-col space-y-2 px-4 py-3">
                    <Link
                        to="intro"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800"
                        onClick={() => setShowMenu(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800"
                        onClick={() => setShowMenu(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="myPortfolio"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800"
                        onClick={() => setShowMenu(false)}
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800"
                        onClick={() => setShowMenu(false)}
                    >
                        Experience
                    </Link>
                    <Link
                        to="contactPage"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="hover:text-blue-800"
                        onClick={() => setShowMenu(false)}
                    >
                        Contact
                    </Link>
                    <a
                        href={Resume}
                        download="Yusriyah.pdf"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition text-center"
                    >
                        Resume
                    </a>
                    <button
                        onClick={() =>
                            document
                                .getElementById("contactPage")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
                    >
                        Contact Me
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
