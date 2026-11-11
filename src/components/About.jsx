import profile from "../assets/profile.jpg";

function About() {
  return (
    <section
      id="about"
      className="
        w-full min-h-screen
        flex items-center justify-center
        bg-[rgb(27,37,61)]
        text-white
      "
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Profile Photo */}
        <div
          className="
            w-40 h-40 mb-6
            rounded-full overflow-hidden
            border-4 border-slate-700
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-xl
            hover:shadow-cyan-500/30
          "
        >
          <img
            src={profile}
            alt="Kale Praveen Raj"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 space-y-4">
          <p>
            I&apos;m a passionate Full Stack Developer creating responsive,
            accessible, and high-performance applications. I specialize in
            Java, SQL, and desktop and web application development, with a strong
            focus on optimizing user experiences and integrating modern
            technologies like blockchain.
          </p>

          <p>
            My goal is to build efficient, scalable software while continuously
            exploring innovative technologies to push the boundaries of modern
            applications.
          </p>
        </div>

        {/* Resume Button */}
        <a
          href="resume.pdf"
          download="Kale_Praveen_Raj_Resume.pdf"
          className="
            px-6 py-3
            bg-cyan-500
            text-black font-semibold
            rounded-lg
            transition-all duration-300
            hover:bg-cyan-400
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-cyan-500/40
            active:translate-y-0
          "
        >
          Download Resume
        </a>

      </div>
    </section>
  );
}

export default About;
