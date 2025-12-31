function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
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
          <a href="#projects" className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition">
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
