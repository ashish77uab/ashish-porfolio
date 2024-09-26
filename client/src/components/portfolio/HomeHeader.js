import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const skillsArray = [
    { img: '/images/html.png' },
    { img: '/images/react.png' },
    { img: '/images/nodejs.png' },
    { img: '/images/javascript.png' },
    { img: '/images/css.png' },
]
const HomeHeader = () => {
    useLayoutEffect(() => {
        let tl = gsap.timeline({
        });
        tl
            .fromTo('.name', { opacity: 0, translateY: -100, }, { opacity: 1, duration: 0.5, translateY: 0, })
            .fromTo('.positions', { opacity: 0, translateY: 100 }, { opacity: 1, duration: 0.5, translateY: 0 })


        let targets = gsap.utils.toArray(".skill-logo");
        let skillTimeline = gsap.timeline({
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
        let nodeJsTimeline = gsap.timeline({
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
        skillTimeline.to(targets[0], {
            x: "-30vw",
            duration: 2,
        })
            .to(targets[4], {
                x: "30vw",
                duration: 2,
            }, 0);

        skillTimeline.to(targets[1], {
            y: "-50vh",
            duration: 2,
        }, 0)
            .to(targets[3], {
                y: "-50vh",
                duration: 2,
            }, 0);
        nodeJsTimeline
            .to(targets[2], {
                x: "48vw",  // Move to the bottom-right corner
                duration: 2,
            })
            .to(targets[2], {
                y: "-92vh",  // Move to the top-right corner
                duration: 2,
            })
            .to(targets[2], {
                x: "-48vw",  // Move to the top-left corner
                duration: 2,
            })
            .to(targets[2], {
                y: '0vh',  // Move to the bottom-left corner
                duration: 2,
            })
            .to(targets[2], {
                x: "0",  // Move to the bottom-right corner
                duration: 2,
            })
    }, [])
    const fillBoxesRef = useRef([]);

    useEffect(() => {
        // Create a GSAP timeline with infinite looping
        const tl = gsap.timeline({ repeat: -1 });

        // Loop through each fill-box and add an animation with delay to the timeline
        fillBoxesRef.current.forEach((box, index) => {
            tl.fromTo(
                box,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 3,
                    // 0.2 seconds delay before each box starts animating
                    ease: 'power2.out',
                    transformOrigin: 'left',
                    onComplete: () => {
                        // Reset scaleX to 0 after animation completes
                        gsap.set(box, { scaleX: 0 });
                    },
                }
            );
        });

    }, []);
   
    return (
        <div style={{ backgroundImage: "url('/images/ashishbg.jpg')" }} className='h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden '>
            <div className='bg-gradient-to-br  from-black/20 to-black/60 dark:from-black/50 dark:to-black/50 h-screen w-full absolute inset-0 flex flex-col justify-center  '>
                <div className='section-wrapper container'>
                    <div className='overflow-hidden'>
                        <h4 className='md:text-7xl text-5xl  font-bold text-white dark:text-white name'>Ashish Patel</h4>
                        <div className='py-1 flex items-center gap-1 positions'>
                            <span className='!text-white text-3xl tracking-wide'>I'm</span>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    1000,
                                    'React Js Developer',
                                    2000,
                                    'Designer',
                                    2000

                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                className='!text-white text-3xl tracking-wide'
                            />

                        </div>
                        <div className='flex items-end gap-[1px] my-2'>
                            {Array(4).fill('1').map((item, index) => (
                                <div
                                    key={index}
                                    className='lg:h-[2px] h-[1.5px] lg:w-44 flex-1 lg:flex-none bg-white/10 rounded-full mb-2'
                                >
                                    <div
                                        ref={(el) => (fillBoxesRef.current[index] = el)} // Assign ref to each fill-box
                                        className='w-full h-full bg-cyan-500 dark:bg-yellow-500'
                                        style={{ transformOrigin: 'left', scaleX: 0 }} // Initial scaleX 0
                                    ></div>
                                </div>
                            ))}
                        </div>
                       
                    </div>
                </div>

            </div>
            <div className="flex items-center gap-4 absolute bottom-0 py-4 justify-center  w-full z-[10]">
                {skillsArray?.map((skill) => {
                    return (
                        <div className='lg:w-16 lg:h-16 w-10 h-10  p-2 rounded-md skill-logo'>
                            <img key={skill.img} src={skill.img} alt="skill" className='w-full h-full object-contain' />
                        </div>
                    )
                })}
            </div>
           

        </div>
    )
}

export default HomeHeader