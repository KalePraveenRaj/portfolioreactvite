import java from "../assets/skills/java.svg";
import python from "../assets/skills/python.svg";
import springboot from "../assets/skills/springboot.svg";
import electron from "../assets/skills/electron.svg";
import node from "../assets/skills/nodedotjs.svg";
import express from "../assets/skills/express.svg";
import firebase from "../assets/skills/firebase.svg";
import flutter from "../assets/skills/flutter.svg";
import dart from "../assets/skills/dart.svg";
import javascript from "../assets/skills/javascript.svg";
import react from "../assets/skills/react.svg";
import nextjs from "../assets/skills/nextdotjs.svg";
import css from "../assets/skills/css.svg";
import tailwind from "../assets/skills/tailwindcss.svg";
import mysql from "../assets/skills/mysql.svg";
import supabase from "../assets/skills/supabase.svg";
import mongodb from "../assets/skills/mongodb.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import graphql from "../assets/skills/graphql.svg";
import docker from "../assets/skills/docker.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import aws from "../assets/skills/aws.svg";

const skills = [
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "Spring Boot", icon: springboot },
  { name: "Electron", icon: electron },
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
  { name: "Firebase", icon: firebase },
  { name: "Flutter", icon: flutter },
  { name: "Dart", icon: dart },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "CSS", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MySQL", icon: mysql },
  { name: "Supabase", icon: supabase },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "GraphQL", icon: graphql },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "AWS", icon: aws },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-3
                bg-[rgba(0,0,0,0.35)]
                rounded-2xl
                p-6
                shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]
                hover:-translate-y-1
                transition
              "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <p className="text-sm text-gray-300 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
