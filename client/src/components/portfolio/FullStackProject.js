import React, { useLayoutEffect, useRef, useEffect } from "react";
import Heading from "./Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FullStackProject = () => {
    const projectsArr = [
        {
            name: "Ecommerce App",
            image: "/images/projects/ecommerce.png",
            link: "https://ashish-ecom-47.netlify.app",
            tech: ["React", "Node", "MongoDB", "Express", 'Tailwind CSS']
        },
        {
            name: "Algotrons",
            image: "/images/projects/algotrons.png",
            link: "https://algotrons-clone.netlify.app",
            tech: ["React", "Node", "MongoDB", "Express"]
        },
        {
            name: "Dream 11",
            image: "/images/projects/dream-11.png",
            link: "https://dream-11-clone.netlify.app",
            tech: ["React", "Node", "MongoDB", "Express"]
        },
        {
            name: "Sarkari Test",
            image: "/images/projects/sarkari-test.png",
            link: "https://sarkari-test.netlify.app",
            tech: ["React", "Node", "MongoDB", "Express"]
        },
    ];

    const containerRefs = useRef([]);
    const tweenRefs = useRef([]);
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);

    const animateImages = () => {
        tweenRefs.current.forEach((tween) => tween?.kill());

        tweenRefs.current = containerRefs.current.map((container) => {
            if (!container) return null;
            const img = container.querySelector("img");
            if (!img) return null;

            const startAnimation = () => {
                const distance = img.scrollHeight - container.clientHeight;
                if (distance > 0) {
                    return gsap.to(img, {
                        y: -distance,
                        ease: "none",
                        repeat: -1,
                        duration: 10,
                    });
                } else {
                    gsap.set(img, { y: 0 });
                    return null;
                }
            };

            if (img.complete) return startAnimation();
            img.onload = () => startAnimation();
            return null;
        });
    };

    useLayoutEffect(() => {
        animateImages();
        window.addEventListener("resize", animateImages);
        return () => {
            window.removeEventListener("resize", animateImages);
            tweenRefs.current.forEach((tween) => tween?.kill());
        };
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-wrapper">
            <header>
                <Heading title={"My Own Projects"} />
            </header>

            <div className="py-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsArr.map((item, index) => (
                        <li key={item.name} ref={(el) => (cardsRef.current[index] = el)}>

                            <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-cyan-500/40 to-purple-500/40 hover:from-cyan-500 hover:to-purple-500 transition">

                                <div className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-300">

                                    {/* IMAGE */}
                                    <div
                                        ref={(el) => (containerRefs.current[index] = el)}
                                        className="h-[240px] overflow-hidden relative"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full block transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* OVERLAY */}
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
                                            >
                                                Live Preview →
                                            </a>
                                        </div>
                                    </div>

                                    {/* INFO */}
                                    <div className="px-4 py-5 space-y-2">
                                        <h4 className="heading-6">{item.name}</h4>

                                        {/* TECH BADGES */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-[2px] rounded-full bg-cyan-500/10 text-cyan-600 dark:text-yellow-400 dark:bg-yellow-400/10"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            className="block text-sky-500 underline underline-offset-2 text-sm"
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.link}
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FullStackProject;