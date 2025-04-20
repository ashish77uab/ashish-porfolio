import React, { useEffect, useRef } from 'react';
import Heading from './Heading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsArray = [
        { technology: 'React Js', percentage: '100' },
        { technology: 'Next Js', percentage: '90' },
        { technology: 'Tailwind CSS', percentage: '100' },
        { technology: 'Javascript', percentage: '90' },
        { technology: 'CSS', percentage: '90' },
        { technology: 'HTML', percentage: '90' },
        { technology: 'Node Js', percentage: '70' },
        { technology: 'MongoDB', percentage: '90' },
    ];

    const sectionRef = useRef(null);
    const barsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            barsRef.current.forEach((bar, index) => {
                ScrollTrigger.create({
                    trigger: bar,
                    start: 'top 85%',
                    onEnter: () => {
                        gsap.fromTo(
                            bar,
                            { width: '0%' },
                            {
                                width: `${skillsArray[index].percentage}%`,
                                duration: 1.2,
                                ease: 'power3.out',
                            }
                        );
                    },
                    onLeaveBack: () => {
                        gsap.set(bar, { width: '0%' });
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='section-wrapper'>
            <header>
                <Heading title={'Skills'} />
            </header>

            <div className="py-8">
                <ul className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-4 lg:gap-8'>
                    {skillsArray.map((item, index) => (
                        <li key={item.technology} className='py-1'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='text-base font-semibold tracking-wide'>{item.technology}</div>
                                <div>{item.percentage}%</div>
                            </div>
                            <div className='my-2 h-[10px] rounded-full bg-zinc-300 dark:bg-zinc-700 overflow-hidden'>
                                <div
                                    ref={(el) => (barsRef.current[index] = el)}
                                    className='bg-sky-600 dark:bg-yellow-500 h-full'
                                    style={{ width: 0 }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
