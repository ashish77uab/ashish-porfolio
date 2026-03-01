import React, { useLayoutEffect } from "react";
import Heading from "./Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experienceArray = [
    {
        role: "Full Stack Developer",
        company: "Gammastack",
        year: "Jan 2023 - Present",
        address: "Crystal IT Park, Indore, Madhya Pradesh",
        points: [
            {
                title: "Application Development",
                decription:
                    "Led development of 2+ production React applications with scalable frontend architecture and improved UX."
            },
            {
                title: "Performance Optimization",
                decription:
                    "Improved performance by ~40% using code splitting, lazy loading, memory management and optimized re-rendering."
            },
            {
                title: "Real-Time Features",
                decription:
                    "Implemented real-time updates using Socket.IO, reducing API calls by ~60% and improving responsiveness."
            },
            {
                title: "Platform Development",
                decription:
                    "Contributed to casino gaming platform with 50+ features including real-time betting workflows."
            },
            {
                title: "Payment Integration",
                decription:
                    "Integrated Stripe, PayPal and Skrill for secure and reliable transactions."
            },
            {
                title: "Team Collaboration",
                decription:
                    "Mentored juniors, participated in code reviews and worked in Agile environment using Git workflows."
            }
        ]
    },
    {
        role: "Front End Developer",
        company: "Codes for Tomorrow",
        year: "Jan 2022 - Dec 2023",
        address: "Indore, Madhya Pradesh",
        points: [
            {
                title: "Frontend Development",
                decription:
                    "Built scalable React applications with reusable components and modular UI architecture."
            },
            {
                title: "Responsive Design",
                decription:
                    "Implemented responsive UI using Flexbox and Grid for consistent cross-device experience."
            },
            {
                title: "Real-Time UI",
                decription:
                    "Developed live notifications and status updates using WebSockets / Socket.IO."
            },
            {
                title: "Code Quality",
                decription:
                    "Followed best practices using ESLint, Prettier and reusable UI patterns."
            }
        ]
    }
];

const projectArray = [
    {
        name: "Dino Gaming Platform",
        duration: "2024 - Present",
        points: [
            {
                title: "High Scale Platform",
                decription:
                    "Architected betting & fantasy platform serving 4,000+ daily users with 99.9% uptime."
            },
            {
                title: "Real-Time Systems",
                decription:
                    "Built real-time odds & betting events using WebSockets handling 5,000+ concurrent connections."
            },
            {
                title: "Performance",
                decription:
                    "Reduced API latency by 60% and platform latency by 40% using caching and optimization."
            },
            {
                title: "User Engagement",
                decription:
                    "Improved engagement by 35% through UI responsiveness and UX improvements."
            }
        ]
    },
    {
        name: "Stream DFS – Fantasy Sports",
        duration: "2023 - 2024",
        points: [
            {
                title: "Real-Time Platform",
                decription:
                    "Built fantasy sports platform with live scoring and leaderboards."
            },
            {
                title: "Scalability",
                decription:
                    "Handled 4,000+ concurrent users using Redis caching and optimized state."
            },
            {
                title: "Complex Logic",
                decription:
                    "Implemented fantasy scoring rules and live rankings with high accuracy."
            },
            {
                title: "Architecture",
                decription:
                    "Designed reusable components improving feature delivery speed by 45%."
            }
        ]
    },
    {
        name: "Salon Marketplace",
        duration: "2023",
        points: [
            {
                title: "Full Stack System",
                decription:
                    "Built appointment platform serving 10+ salons and 1,000+ users."
            },
            {
                title: "RBAC",
                decription:
                    "Implemented role-based dashboards and permission system."
            },
            {
                title: "Automation",
                decription:
                    "Reduced missed appointments by 70% using notifications and reminders."
            },
            {
                title: "APIs",
                decription:
                    "Designed REST APIs handling 200+ requests/min with 99.5% reliability."
            }
        ]
    },
    {
        name: "Online Lottery Platform",
        duration: "2022 - 2023",
        points: [
            {
                title: "Secure Platform",
                decription:
                    "Developed secure lottery system with ticketing and automated draws."
            },
            {
                title: "Real-Time Updates",
                decription:
                    "Implemented live results and winner notifications using WebSockets."
            },
            {
                title: "Wallet System",
                decription:
                    "Built wallet and transaction workflows with audit-safe tracking."
            },
            {
                title: "Background Jobs",
                decription:
                    "Created scheduled jobs for draws, payouts and settlements."
            }
        ]
    }
];

const Resume = () => {
    useLayoutEffect(() => {
        gsap.from(".resume-card", {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".resume-section",
                start: "top 80%",
            }
        });
    }, []);

    return (
        <section className="section-wrapper resume-section">
            <header>
                <Heading title="Resume" />
            </header>

            <div className="grid lg:grid-cols-2 gap-10 py-8">

                {/* EXPERIENCE */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-sky-600 dark:text-yellow-400">
                        Work History
                    </h3>

                    <div className="space-y-6">
                        {experienceArray.map((item) => (
                            <div key={item.company} className="resume-card p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-md border-l-4 border-sky-500 dark:border-yellow-500">
                                <h4 className="text-lg font-bold">{item.role}</h4>
                                <p className="opacity-80">{item.company}</p>
                                <div className="text-sm font-semibold my-1 inline-block bg-zinc-300 dark:bg-zinc-700 px-3 py-1 rounded">
                                    {item.year}
                                </div>
                                <p className="italic text-sm mb-3">{item.address}</p>

                                <ul className="list-disc list-inside space-y-2">
                                    {item.points.map((point, i) => (
                                        <li key={i}>
                                            <span className="font-medium">{point.title}:</span>{" "}
                                            <span className="opacity-80">{point.decription}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PROJECTS */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-sky-600 dark:text-yellow-400">
                        Key Projects
                    </h3>

                    <div className="space-y-6">
                        {projectArray.map((item) => (
                            <div key={item.name} className="resume-card p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-md border-l-4 border-purple-500 dark:border-pink-500">
                                <h4 className="text-lg font-bold">{item.name}</h4>
                                <div className="text-sm font-semibold my-1 inline-block bg-zinc-300 dark:bg-zinc-700 px-3 py-1 rounded">
                                    {item.duration}
                                </div>

                                <ul className="list-disc list-inside space-y-2 mt-3">
                                    {item.points.map((point, i) => (
                                        <li key={i}>
                                            <span className="font-medium">{point.title}:</span>{" "}
                                            <span className="opacity-80">{point.decription}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;