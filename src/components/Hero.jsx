function Hero() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const glowButton = `
    relative overflow-hidden
    px-6 py-3
    font-semibold rounded-lg
    transition-all duration-300
    hover:-translate-y-1
    before:absolute before:inset-0
    before:bg-gradient-to-r
    before:from-cyan-400/40
    before:via-purple-500/40
    before:to-pink-500/40
    before:opacity-0
    before:blur-xl
    before:transition
    hover:before:opacity-100
  `;

  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        bg-gradient-to-br
        from-slate-900 via-slate-800 to-slate-900
        text-white overflow-hidden
      "
    >
      <div className="max-w-3xl px-4 sm:px-6 text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          Hi, I&apos;m Kale Praveen Raj
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
          Full Stack Developer
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          I develop accessible, responsive, interactive, and animated applications
          with a strong focus on performance.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          {/* Primary Button */}
          <button
            onClick={() => handleScroll("projects")}
            className={`
              ${glowButton}
              bg-cyan-500 text-black
              hover:bg-cyan-400
              hover:shadow-[0_15px_35px_rgba(34,211,238,0.5)]
            `}
          >
            View My Work
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => handleScroll("contact")}
            className={`
              ${glowButton}
              border border-gray-400 text-white
              hover:bg-white hover:text-black
              hover:shadow-[0_15px_35px_rgba(236,72,153,0.45)]
            `}
          >
            Get In Touch
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
