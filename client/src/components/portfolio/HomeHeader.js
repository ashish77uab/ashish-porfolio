import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const skillsArray = [
    { img: '/images/html.png', name: 'HTML5' },
    { img: '/images/react.png', name: 'React' },
    { img: '/images/nodejs.png', name: 'Node.js' },
    { img: '/images/javascript.png', name: 'JavaScript' },
    { img: '/images/css.png', name: 'CSS3' },
];

const HomeHeader = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const floatingElementsRef = useRef([]);
    const skillRefs = useRef([]);
    const fillBoxesRef = useRef([]);
    const glitchTextRef = useRef(null);

    // Parallax effect on mouse move
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height } = containerRef.current.getBoundingClientRect();
            const x = (clientX / width - 0.5) * 20;
            const y = (clientY / height - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Main title animation with bounce effect
            gsap.fromTo('.name',
                {
                    opacity: 0,
                    y: -100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    duration: 1.2,
                    y: 0,
                    scale: 1,
                    ease: "elastic.out(1, 0.5)"
                }
            );

            // Subtitle animation
            gsap.fromTo('.positions',
                {
                    opacity: 0,
                    x: -50
                },
                {
                    opacity: 1,
                    duration: 1,
                    x: 0,
                    delay: 0.5,
                    ease: "power3.out"
                }
            );

            // Floating background elements
            gsap.to('.floating-element', {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "random(-15, 15)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.2
            });

            // Skill icons advanced animation
            skillRefs.current.forEach((skill, index) => {
                // Initial entrance animation
                gsap.fromTo(skill,
                    {
                        scale: 0,
                        opacity: 0,
                        rotation: -180
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 1.2,
                        delay: index * 0.1,
                        ease: "backOut(1.7)"
                    }
                );

                // Create a unique floating path for each skill
                gsap.to(skill, {
                    x: "random(-30, 30)",
                    y: "random(-30, 30)",
                    rotation: "random(-360, 360)",
                    duration: "random(4, 8)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.5
                });
            });

            // Advanced skill animation for Node.js (center element)
            const nodeJsElement = skillRefs.current[2];
            if (nodeJsElement) {
                gsap.to(nodeJsElement, {
                    scale: 1.2,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });

                // Create an orbit path
                gsap.to(nodeJsElement, {
                    duration: 8,
                    repeat: -1,
                    ease: "none",
                    motionPath: {
                        path: [
                            { x: 0, y: 0 },
                            { x: 50, y: -30 },
                            { x: 100, y: 0 },
                            { x: 50, y: 30 },
                            { x: 0, y: 0 }
                        ],
                        curviness: 1.5,
                        autoRotate: true
                    }
                });
            }

            // Glitch effect animation for name
            if (glitchTextRef.current) {
                gsap.to(glitchTextRef.current, {
                    duration: 0.1,
                    skewX: 0,
                    repeat: -1,
                    repeatDelay: 5,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // Progress bars animation
        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: 'power2.inOut' }
        });

        fillBoxesRef.current.forEach((box, index) => {
            if (box) {
                tl.fromTo(
                    box,
                    { scaleX: 0, opacity: 0.5 },
                    {
                        scaleX: 1,
                        opacity: 1,
                        duration: 2,
                        delay: index * 0.3,
                        transformOrigin: 'left',
                        onComplete: () => {
                            gsap.to(box, {
                                opacity: 0.5,
                                duration: 0.5,
                                delay: 0.5
                            });
                        }
                    }
                );
            }
        });

        // Particle effect background
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, i) => {
            gsap.to(particle, {
                x: 'random(-100, 100)',
                y: 'random(-100, 100)',
                opacity: 0,
                duration: 'random(2, 4)',
                repeat: -1,
                ease: 'power1.out',
                delay: i * 0.2
            });
        });

    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                backgroundImage: "url('/images/react-bg.png')",
            }}
            className='h-screen bg-no-repeat bg-cover bg-left-top md:bg-center relative overflow-hidden'
        >
            {/* Animated gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-blue-900/40 animate-gradient-xy'></div>

            {/* Particle effects */}
            <div className='absolute inset-0 overflow-hidden'>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className='particle absolute w-1 h-1 bg-white/30 rounded-full'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Floating background elements */}
            <div className='absolute inset-0'>
                <div className='floating-element absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl'></div>
                <div className='floating-element absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
                <div className='floating-element absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl'></div>
            </div>

            {/* Main content */}
            <div className='relative z-10 h-screen w-full flex flex-col justify-center'>
                <div className='section-wrapper container mx-auto px-4'>
                    <div className='max-w-4xl'>
                        {/* Animated badge */}
                        <div className='overflow-hidden mb-6'>
                            <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse-slow'>
                                <span className='w-2 h-2 bg-green-400 rounded-full animate-ping'></span>
                                <span className='text-white/90 text-sm font-medium'>Available for work</span>
                            </div>
                        </div>

                        {/* Main title with glitch effect */}
                        <div className='overflow-hidden'>
                            <h1
                                ref={glitchTextRef}
                                className='md:text-8xl text-5xl font-bold text-white name relative inline-block group'
                            >
                                Ashish Patel
                                {/* <span className='absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200'>
                                    Ashish Patel
                                </span>
                                <span className='absolute inset-0 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-200'>
                                    Ashish Patel
                                </span> */}
                            </h1>
                        </div>

                        {/* Dynamic role with typing animation */}
                        <div className='py-4 flex items-center gap-2 positions flex-wrap'>
                            <span className=' text-3xl md:text-5xl font-light text-white'>I'm</span>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'React Specialist',
                                    2000,
                                    'UI/UX Enthusiast',
                                    2000,
                                    'Problem Solver',
                                    2000
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                className=' text-3xl md:text-5xl font-bold text-sky-600 dark:text-yellow-400'
                            />
                        </div>

                        {/* Animated progress bars */}
                        <div className='flex items-end gap-1 my-8 max-w-2xl'>
                            {[90, 85, 80, 75].map((percentage, index) => (
                                <div key={index} className='flex-1 group'>
                                    <div className='lg:h-1.5 h-1 bg-white/10 rounded-full overflow-hidden mb-2'>
                                        <div
                                            ref={(el) => (fillBoxesRef.current[index] = el)}
                                            className='w-full h-full bg-sky-800 dark:bg-yellow-400'
                                            style={{ transformOrigin: 'left', scaleX: 0 }}
                                        ></div>
                                    </div>
                                    <span className='text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity'>
                                        {percentage}% Projects
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex gap-4 mt-8 flex-wrap'>

                            <a
                                href="/images/Ashish_Patel.pdf"
                                download
                                className="md:px-8 px-4 py-2 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Social proof */}
                        <div className='mt-8 flex items-center gap-6'>

                            <div className='text-white/60 text-sm'>
                                <span className='font-bold text-white'>20+</span> Projects Completed
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating skills with tooltips */}
            <div className="absolute bottom-0 left-0 right-0 py-8 px-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
                        {skillsArray?.map((skill, index) => (
                            <div
                                key={skill.img}
                                ref={(el) => (skillRefs.current[index] = el)}
                                className='group relative'
                            >
                                <div className='lg:w-20 lg:h-20 w-14 h-14 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110 skill-logo'>
                                    <img
                                        src={skill.img}
                                        alt={skill.name}
                                        className='w-full h-full object-contain filter drop-shadow-lg'
                                    />
                                </div>

                                {/* Tooltip */}
                                <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <div className='bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 whitespace-nowrap'>
                                        <span className='text-white text-sm font-medium'>{skill.name}</span>
                                    </div>
                                    <div className='w-2 h-2 bg-white/10 backdrop-blur-md rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-r border-b border-white/20'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
                    <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll'></div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;