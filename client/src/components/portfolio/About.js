import React, { useEffect, useRef } from "react";
import Heading from "./Heading";
import moment from "moment";
import { reactIcons } from "../../utils/icons";
import gsap from "gsap";

const dob = moment().diff(moment("14-06-1998", "DD-MM-YYYY"), "month", true) / 12;

const aboutArray = [
    { title: "Birthday", description: "14 June, 1998" },
    { title: "Age", description: `${String(dob).split(".")[0]} Years` },
    { title: "Phone", description: "7509650490" },
    { title: "Email", description: "ashish77uab@gmail.com" },
    { title: "Degree", description: "B.Tech in CS" },
    { title: "University", description: "UIT, RGPV Bhopal" },
    { title: "City", description: "Indore" },
];

const About = () => {
    const startDate = moment("10-01-2022", "DD-MM-YYYY");
    const currentDate = moment();
    const yearsOfExperience = currentDate.diff(startDate, "years", true);

    const sectionRef = useRef(null);
    const cardsRef = useRef([]);



    return (
        <section ref={sectionRef} className="section-wrapper relative overflow-hidden">
            <header>
                <Heading title="About" />
                <p className="mt-4 text-muted lg:text-lg max-w-4xl leading-relaxed">
                    Accomplished Full Stack Developer with{" "}
                    <b>{yearsOfExperience.toFixed(1)} years</b> of experience specializing
                    in React and Node.js–based applications. Proven track record of building
                    scalable, high-performance web products with clean architecture and
                    intuitive user experiences. Strong collaborator with hands-on
                    experience in Agile teams and production deployments.
                </p>
            </header>

            <div className="flex lg:flex-row flex-col gap-10 py-10 relative z-10">
                {/* IMAGE */}
                <div className="lg:w-[380px] md:w-[500px] w-full flex-shrink-0 about-img">
                    <img
                        src="/images/ashish-white.png"
                        alt="Ashish Patel"
                        className="w-full object-contain "
                    />
                </div>

                {/* INFO */}
                <div className="flex-grow">
                    <h4 className="md:text-3xl text-2xl font-bold mb-6 text-sky-600 dark:text-yellow-400">
                        Full Stack Developer
                    </h4>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {aboutArray.map((item, index) => (
                            <li
                                key={item.title}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="flex items-start gap-3 p-4 rounded-lg bg-white/70 dark:bg-neutral-800/60 backdrop-blur shadow-sm hover:shadow-md transition"
                            >
                                <span className="text-cyan-500 dark:text-yellow-500 text-lg">
                                    {reactIcons.arrowright}
                                </span>
                                <div>
                                    <div className="font-semibold">{item.title}</div>
                                    <div className="text-muted">{item.description}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </section>
    );
};

export default About;