import { FaGithub, FaGlobe } from "react-icons/fa";

import deepSnapImg from "../assets/projects/deepSnap.jpg";
import floatingIconImg from "../assets/projects/floatingIcon.png";
import portfolioImg from "../assets/projects/portfolio.JPG";
import swaggerImg from "../assets/projects/swaggerOpenAPI.JPG";
import portfolio from "../assets/projects/portfolioreact.JPG";
import todoApp from "../assets/projects/todo_app.JPG";
import snakesandladder from "../assets/projects/snakes_and_ladders.jpg";
import passwordmanager from "../assets/projects/password_manager.png";
import expensetracker from "../assets/projects/expense_tracker.png";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Projects
        </h2>

        {/* List */}
        <div className="flex flex-col gap-24">

          <ProjectCard
            image={deepSnapImg}
            title="DeepSnap"
            description="Electron desktop app to extract text from images."
            github="https://github.com/KalePraveenRaj/deepsnap"
            live="https://github.com/KalePraveenRaj/deepsnap/releases"
          />

          <ProjectCard
            image={floatingIconImg}
            title="FloatingIcon"
            description="Developed using React and Spring to showcase CRUD operations."
            github="https://github.com/KalePraveenRaj/FloatingIcon"
            live="https://kalepraveenraj.github.io/portfolio/"
          />

          <ProjectCard
            image={portfolioImg}
            title="Portfolio Website"
            description="A responsive personal portfolio website to showcase skills and projects."
            github="https://github.com/KalePraveenRaj/portfolio"
            live="https://kalepraveenraj.github.io/portfolio/"
          />

          <ProjectCard
            image={swaggerImg}
            title="CRUD Using Spring Boot"
            description="Developed using Swagger and Spring Boot."
            github="https://github.com/KalePraveenRaj/CrudOperationsSpringBoot"
            live="https://kalepraveenraj.github.io/portfolio/"
          />

          <ProjectCard
            image={portfolio}
            title="Portfolio (React + Vite + Tailwind)"
            description="Built using React, Vite, and Tailwind CSS."
            github="https://github.com/KalePraveenRaj/portfolioreactvite"
            live="https://kalepraveenraj.github.io/portfolioreactvite/"
          />

          <ProjectCard
            image={todoApp}
            title="Todo App (Flutter)"
            description="Flutter-based todo app inspired by Google Tasks."
            github="https://github.com/KalePraveenRaj/flutter_todoApp"
            live="https://kalepraveenraj.github.io/flutter_todoApp/"
          />

          <ProjectCard
            image={snakesandladder}
            title="Snakes & Ladders"
            description="Flutter-based game with APK included."
            github="https://github.com/KalePraveenRaj/snakes_and_ladders"
            live="https://kalepraveenraj.github.io/snakes_and_ladders/"
          />

          <ProjectCard
            image={passwordmanager}
            title="Password Manager"
            description="Flutter password manager app with APK."
            github="https://github.com/KalePraveenRaj/Password_Manager"
            live="https://kalepraveenraj.github.io/Password_Manager/"
          />

          <ProjectCard
            image={expensetracker}
            title="Expense Tracker"
            description="Flutter + MySQL based expense tracker."
            github="https://github.com/KalePraveenRaj/expense_tracker"
            live="https://kalepraveenraj.github.io/portfolioreactvite/"
          />

        </div>
      </div>
    </section>
  );
}

function ProjectCard({ image, title, description, github, live }) {
  return (
    <div
      className="
        group relative
        rounded-2xl
        transition-all duration-300
        hover:-translate-y-2
      "
    >
      {/* GRADIENT SHADOW */}
      <div
        className="
          absolute inset-0
          rounded-2xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          shadow-[0_30px_60px_rgba(34,211,238,0.25)]
        "
        style={{
          boxShadow:
            "0 30px 60px rgba(34,211,238,0.25), 0 30px 60px rgba(168,85,247,0.2), 0 30px 60px rgba(236,72,153,0.18)",
        }}
      />

      {/* CARD CONTENT */}
      <div
        className="
          relative
          bg-[rgba(0,0,0,0.35)]
          rounded-2xl
          p-6
          shadow-lg
          transition-shadow duration-300
          group-hover:shadow-none
        "
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-6"
        />

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-center mb-6">
          {description}
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-96 text-2xl text-gray-400">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                transition
                hover:text-white
                hover:scale-110
                hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
              "
            >
              <FaGithub />
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              className="
                transition
                hover:text-white
                hover:scale-110
                hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]
              "
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}



export default Projects;
