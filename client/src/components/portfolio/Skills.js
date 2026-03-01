import React, { useEffect, useRef } from "react";
import Heading from "./Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        title: "Frontend",
        items: ["JavaScript", "React.js", "Next.js", "Redux Toolkit", "HTML5", "CSS3"],
    },
    {
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "MongoDB", "PostgreSQL", "Sequelize"],
    },
    {
        title: "Development Arsenal",
        items: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Vite", "Webpack", "CI/CD", "Ubuntu"],
    },
    {
        title: "Cloud & DevOps",
        items: ["AWS", "Docker"],
    },
    {
        title: "Practices",
        items: ["Agile/Scrum", "System Design", "Performance Optimization", "Microservices"],
    },
];

const Skills = () => {
    const sectionRef = useRef(null);




    return (
        <section ref={sectionRef} className="section-wrapper">
            <header>
                <Heading title="Skills" />
            </header>

            <div className="grid md:grid-cols-2 gap-6 py-8">
                {skills.map((group, index) => (
                    <div
                        key={group.title}
                        className="skill-card p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-lg font-bold mb-4 text-sky-600 dark:text-yellow-400">
                            {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm bg-sky-600/10 text-sky-600 dark:bg-yellow-500/10 dark:text-yellow-400"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;