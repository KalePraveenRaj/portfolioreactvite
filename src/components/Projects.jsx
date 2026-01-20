import { FaGithub, FaGlobe } from "react-icons/fa";

import deepSnapImg from "../assets/projects/deepSnap.jpg";
import floatingIconImg from "../assets/projects/floatingIcon.png";
import portfolioImg from "../assets/projects/portfolio.JPG";
import swaggerImg from "../assets/projects/swaggerOpenAPI.JPG";
import portfolio from "../assets/projects/portfolioreact.JPG";
import todoApp from "../assets/projects/todo_app.JPG";
import snakesandladder from "../assets/projects/snakes_and_ladders.jpg";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Projects
        </h2>

        {/* Projects List */}
        <div className="flex flex-col gap-24">

          <ProjectCard
            image={deepSnapImg}
            title="DeepSnap"
            description="Electron desktop app to extract text from images."
            github="https://github.com/KalePraveenRaj/deepsnap"
            live="https://github.com/KalePraveenRaj/deepsnap/releases"
            liveLabel="Download"
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
            description="A responsive personal portfolio website to showcase skills, experience, and projects."
            github="https://github.com/KalePraveenRaj/portfolio"
            live="https://kalepraveenraj.github.io/portfolio/"
          />

          <ProjectCard
            image={swaggerImg}
            title="CRUD Using SpringBoot"
            description="Developed using Swagger and Spring to showcase CRUD operations."
            github="https://github.com/KalePraveenRaj/CrudOperationsSpringBoot"
            live="https://kalepraveenraj.github.io/portfolio/"
          />
          <ProjectCard
            image={portfolio}
            title="PortFolio with react+vite+tailwindcss"
            description="Developed using react, vite and tailwindcss."
            github="https://github.com/KalePraveenRaj/portfolioreactvite"
            live="https://kalepraveenraj.github.io/portfolioreactvite/"
          />
          <ProjectCard
            image={todoApp}
            title="Todo App developed using Flutter"
            description="Developed todo application inspired by google tasks"
            github="https://github.com/KalePraveenRaj/flutter_todoApp"
            live="https://kalepraveenraj.github.io/flutter_todoApp/"
          />

          <ProjectCard
            image={snakesandladder}
            title="Snakes and Ladders game"
            description="Built snakes and ladder game application using flutter and provided the apk file as well in the git hub repository"
            github="https://github.com/KalePraveenRaj/snakes_and_ladders"
            live="https://kalepraveenraj.github.io/snakes_and_ladders/"
          />

        </div>
      </div>
    </section>
  );
}

function ProjectCard({ image, title, description, github, live }) {
  return (
    <div className="bg-[rgba(0,0,0,0.35)] rounded-2xl p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

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
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="Live Demo"
          >
            <FaGlobe />
          </a>
        )}
      </div>

    </div>
  );
}

export default Projects;
