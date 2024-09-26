import React, { useEffect, useRef } from 'react'
import Heading from './Heading'
import moment from 'moment'
import { reactIcons } from '../../utils/icons'
import gsap from 'gsap'

const aboutArray = [
    {
        title: 'Birthday',
        description: '14 June, 1998'

    },
    {
        title: 'Age',
        description: `${moment().diff(moment('14-06-1998', 'DD-MM-YYYY'), 'years', true).toFixed(0) } Years`

    },
    {
        title: 'Phone Number',
        description: '7509650490'

    },
    {
        title: 'Email',
        description: 'ashish77uab@gmail.com'

    },
    {
        title: 'Degree',
        description: 'BTech in CS'

    },
    {
        title: 'University',
        description: 'UIT, RGPV Bhopal'

    },
    {
        title: 'City',
        description: 'Indore'

    }
]

const About = () => {
    const startDate = moment('10-01-2022', 'DD-MM-YYYY');
    const currentDate = moment();
    const yearsOfExperience = currentDate.diff(startDate, 'years', true); 

    const boxesRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const boxes = boxesRef.current;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        

        // Function to get random positions within the container
        const getRandomPosition = () => {
            return {
                x: Math.random() * (containerWidth - 96), // Random x within the container width (subtracting box width)
                y: Math.random() * (containerHeight - 96), // Random y within the container height (subtracting box height)
            };
        };

        // Function to animate a box to a new random position
        const moveBox = (box) => {
            gsap.to(box, {
                ...getRandomPosition(),
                duration: 2 + Math.random() * 3, // Random duration between 2 and 5 seconds
                ease: 'power1.inOut', // Smooth animation
                onComplete: () => {
                    moveBox(box); // Call moveBox again for continuous movement
                },
            });
        };

        // Start the animation for each box
        boxes.forEach((box) => {
            moveBox(box);
        });
    }, []);
    return (
        <div className='section-wrapper relative overflow-hidden'>
            <header>
                <Heading title={'About'}/>
                <p className='mt-4 text-muted lg:text-lg'>
                    Hi, I’m Ashish Patel, a passionate React.js developer with <b>{yearsOfExperience.toFixed(1)}  years</b> of experience building dynamic and responsive web applications. I specialize in creating seamless user interfaces using React’s component-based architecture. My expertise includes integrating APIs, managing state with Redux, and optimizing performance for scalable applications. I love solving complex problems and continuously improving my skills in modern JavaScript frameworks. Looking forward to collaborating on innovative projects!
                </p>

            </header>
            <div className="flex lg:flex-row flex-col items-start gap-8 py-8">
                <div className='lg:w-[400px] md:w-[600px] w-full flex-shrink-0'>
                    <img className='w-full max-h-[700px] lg:max-h-[600px] object-contain' src="/images/profile.jpg" alt="" />
                </div>
                <div className='flex-grow'>
                    <div>
                        <h4 className='md:heading-4 heading-6'>Web Designer & Full Stack Developer</h4>
                    </div>
                    <div className='py-8'>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                            {aboutArray?.map((item)=>{
                                return <li key={item.title} className='flex items-center gap-2 py-1'>
                                    <div className='text-base tracking-wider min-w-[150px] font-medium flex items-center'><span className='mr-2 dark:text-yellow-500 text-cyan-500 text-[18px]'>{reactIcons.arrowright}</span> {item.title}  :</div>
                                    <div className='flex-grow text-muted'>{item.description}</div>

                                </li>
                            })}

                        </ul>
                    </div>
                    <div>
                        <p className='text-muted'>
                            I’m a React.js developer, currently working at GamaStack in Indore IT Park. I specialize in building intuitive, high-performance web applications with a focus on seamless user experiences. Passionate about leveraging modern front-end technologies to create scalable and efficient solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div
                ref={containerRef}
                className=' grid grid-cols-3 gap-2  absolute inset-0 z-[-1]'
            >
                {Array(9).fill('1').map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (boxesRef.current[index] = el)} // Assign ref to each box
                        className='absolute w-16 h-16 box-view bg-white dark:bg-neutral-800 shadow-lg  rounded-sm'
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default About