import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo1.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "YouTube", id: "youtube" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgb(27,37,61)] backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo & Name */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3"
          aria-label="Scroll to top"
        >
          <div
            className="
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full overflow-hidden
              transition
              group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "
          >
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>

          <span
            className="
              text-base sm:text-lg font-semibold
              text-white
              transition-all duration-300
              group-hover:bg-gradient-to-r
              group-hover:from-cyan-400
              group-hover:via-purple-500
              group-hover:to-pink-500
              group-hover:bg-clip-text
              group-hover:text-transparent
            "
          >
            Kale Praveen Raj
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.id)}
              className="
                relative
                text-gray-300
                transition-all duration-300
                hover:bg-gradient-to-r
                hover:from-cyan-400
                hover:via-purple-500
                hover:to-pink-500
                hover:bg-clip-text
                hover:text-transparent
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-gradient-to-r
                after:from-cyan-400
                after:via-purple-500
                after:to-pink-500
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden text-white text-2xl
            transition
            hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]
          "
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-[rgb(27,37,61)] border-t border-gray-800">
          <nav className="flex flex-col items-center gap-6 py-6 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.id)}
                className="
                  text-gray-300
                  transition-all duration-300
                  hover:bg-gradient-to-r
                  hover:from-cyan-400
                  hover:via-purple-500
                  hover:to-pink-500
                  hover:bg-clip-text
                  hover:text-transparent
                "
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
