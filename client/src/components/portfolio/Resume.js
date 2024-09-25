import React, { useLayoutEffect } from 'react'
import Heading from './Heading'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const studiesArray = [
    {
        role: 'Secondary Education',
        schooling: 'Central Academy Scool',
        year: '2014-2016',
        address: 'Rewa, Madhya Pradesh',

    },
    {
        role: 'College',
        schooling: 'University insititute of Technology RGPV',
        year: '2017-2021',
        address: 'Bhopal, Madhya Pradesh',

    },

]

const experienceArray = [
    {
        role: 'ReactJs Developer and Web Designer',
        company: 'Codes for tomorrow',
        year: '2022-2024',
        address: 'Beena Nagar, Indore',
        points: [
            {
                title: 'Front-End Development',
                decription: 'Designed and developed responsive web interfaces using React.js, ensuring smooth performance across various devices and browsers.'
            },
            {
                title: 'Collaboration & Optimization',
                decription: 'Worked closely with cross-functional teams to integrate designs with back-end functionality, optimizing code for performance and scalability.'
            },
            {
                title: 'Lead Web Designer',
                decription: 'Led the design team in creating visually appealing and user-centric websites, ensuring brand consistency and adherence to design principles.'
            }
        ]
    },
    {
        role: 'ReactJs Developer',
        company: 'Gammastack',
        year: '2022-Present',
        address: 'Crystal IT Park, Indore',
        points: [
            {
                title: 'Component Development',
                decription: 'Build and maintain reusable, efficient React components to support scalable and dynamic web applications.'
            },
            {
                title: 'State Management',
                decription: 'Implement effective state management solutions (using tools like Redux or Context API) to handle complex application workflows and data flows.'
            },
            {
                title: 'Performance Optimization',
                decription: 'Ensure application performance by optimizing components, improving load times, and reducing bundle sizes for a seamless user experience.'
            }
        ]
    },
]
const projectArray = [
    {
        name: 'Dinocasino',
        duration: 'Jan,2024 - Present',
        points: [
            {
                title: 'UI/UX Overhaul',
                decription: 'Designed and implemented a sleek, responsive user interface for both sports and casino betting, enhancing the overall user experience and increasing engagement.'
            },
            {
                title: 'Real-Time Data Integration',
                decription: 'Integrated real-time sports betting odds and casino updates using WebSockets and APIs, ensuring seamless live updates for users.'
            },
            {
                title: 'Component Reusability',
                decription: 'Developed a modular component structure, enabling efficient code reusability and faster feature deployment across different betting functionalities.'
            }
        ]
    },
    {
        name: 'Salon',
        duration: 'Jan,2023 - Dec 2023',
        points: [
            {
                title: 'User Interface Design',
                decription: 'Developed and optimized a responsive and intuitive user interface for users, vendors, and admins to manage salon appointments efficiently across devices.'
            },
            {
                title: 'Feature Implementation',
                decription: 'Led the front-end development for key features, including appointment booking, real-time notifications, vendor management, and admin dashboards.'
            },
            {
                title: 'Collaboration & Scalability',
                decription: 'Coordinated with back-end teams to ensure seamless integration of APIs while optimizing the front-end for performance, scalability, and user experience.'
            }
        ]
    },
    {
        name: 'Navkar Lottery',
        duration: 'Jan,2022 - Dec 2023',
        points: [
            {
                title: 'Lead UI Designer',
                decription: 'Designed and implemented a user-friendly, interactive interface for the lottery platform, ensuring a seamless and engaging gaming experience.'
            },
            {
                title: 'Real-Time Game Integration',
                decription: 'Developed real-time features for live lottery draws and game participation, enhancing user engagement and platform responsiveness.'
            },

        ]
    },

]
const Resume = () => {
  
    const returnDot = () => {
        return <div className='w-5 h-5 absolute bg-white dark:bg-black z-[2] ax-center top-[4px] lg:top-[7px] rounded-full border-2 border-cyan-500 dark:border-yellow-500'></div>
    }
    const renderLine = () => {
        return <div className='ax-center line  h-full w-[2px] z-[1] bg-cyan-500 dark:bg-yellow-500 top-[7px]'></div>
    }
    useLayoutEffect(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.line',
                // pin: true, 
                start: 'top 20%',
                end: 'bottom bottom', 
                anticipatePin: 1,
                pinSpacing: false,
                invalidateOnRefresh: true,
                scrub: 1, 

              
            }
        });
        tl.fromTo('.line', { height:0 },{height:'100%'})
    },[])

    return (
        <div className='section-wrapper resume'>
            <header>
                <Heading title={'Resume'} />
            </header>
            <div className=" py-8">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-8'>
                    <div>
                        <h3 className="lg:text-2xl text-lg font-semibold  mb-4 ">Studies & Professional Experience</h3>
                        <div className='relative'>
                            {renderLine()}
                            {studiesArray?.map((item) => {
                                return <li key={item.company} className='flex items-stretch gap-4 lg:gap-8 '>
                                    <div className='relative  flex-shrink-0'>
                                        {returnDot()}

                                    </div>
                                    <div className=''>
                                        <h4 className='lg:heading-4 heading-6'>{item?.role}</h4>
                                        <h6 className='opacity-80 text-lg mb-1'>{item?.schooling}</h6>
                                        <div className= 'dark:bg-zinc-700 bg-gray-300 px-4 py-1 inline-block font-semibold mb-1'  >{item?.year}</div>
                                        <p className={`italic text-muted pb-12  `}>{item?.address}</p>

                                    </div>

                                </li>
                            })}
                            {experienceArray?.map((item, mainIndex) => {
                                return <li key={item.company} className='flex items-stretch gap-4 lg:gap-8 '>
                                    <div className='relative  flex-shrink-0'>
                                        {returnDot()}

                                    </div>
                                    <div className=''>
                                        <h4 className='lg:heading-4 heading-6'>{item?.role}</h4>
                                        <h6 className='opacity-80 text-lg mb-1'>{item?.company}</h6>
                                        <div className= 'dark:bg-zinc-700 bg-gray-300 px-4 py-1 inline-block font-semibold mb-1'  >{item?.year}</div>
                                        <p className='italic text-muted'>{item?.address}</p>
                                        <ul className={`space-y-2 py-4  ${mainIndex === experienceArray.length - 1 ? 'pb-0' : 'pb-12'}`}>
                                            {item.points?.map((point, innerIndex) => (
                                                <li className='' key={innerIndex}>
                                                    <span className='font-medium flex-shrink-0 text-lg'>
                                                        {point.title} :
                                                    </span>
                                                    <span className='ml-2 text-muted'>
                                                        {point.decription}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </li>
                            })}
                        </div>
                    </div>
                    <div>
                        <h3 className="lg:text-2xl text-lg font-semibold  mb-4 ">Projects</h3>
                        <div className='relative'>
                            {renderLine()}

                            {projectArray?.map((item, mainIndex) => {
                                return <li key={item.company} className='flex items-stretch gap-4 lg:gap-8 '>
                                    <div className='relative  flex-shrink-0'>
                                        {returnDot()}

                                    </div>
                                    <div className=''>
                                        <h4 className='heading-4 mb-1'>{item?.name}</h4>
                                        <div className= 'dark:bg-zinc-700 bg-gray-300 px-4 py-1 inline-block font-semibold mb-1'  >{item?.duration}</div>
                                        <ul className={`space-y-2 py-4  ${mainIndex === projectArray.length - 1 ? 'pb-0' : 'pb-12'}`}>
                                            {item.points?.map((point, innerIndex) => (
                                                <li className='' key={innerIndex}>
                                                    <span className='font-medium flex-shrink-0 text-lg'>
                                                        {point.title} :
                                                    </span>
                                                    <span className='ml-2 text-muted'>
                                                        {point.decription}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </li>
                            })}
                        </div>
                    </div>


                </ul>
            </div>
        </div>
    )
}

export default Resume