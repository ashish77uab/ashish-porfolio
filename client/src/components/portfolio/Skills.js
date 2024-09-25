import React from 'react'
import Heading from './Heading'


const Skills = () => {
    const skillsArray = [
        {
            technology: 'React Js',
            percentage: '100',
        },
        {
            technology: 'Next Js',
            percentage: '90'
        },
        {
            technology: 'Tailwind CSS',
            percentage: '100'
        },
        {
            technology: 'Javascript',
            percentage: '90'
        },
        {
            technology: 'CSS',
            percentage: '90'
        },
        {
            technology: 'HTML',
            percentage: '90'
        },
        {
            technology: 'Node Js',
            percentage: '70'
        },
        {
            technology: 'MongoDB',
            percentage: '90'
        },

    ]


    return (
        <div className='section-wrapper '>
            <header>
                <Heading title={'Skills'} />


            </header>
            <div className=" py-8">
                <ul className='grid  grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-4 lg:gap-8'>
                    {skillsArray?.map((item) => {
                        return <li key={item.title} className=' py-1'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='text-base font-semibold tracking-wide'>{item.technology} </div>
                                <div className=''>{item.percentage}%</div>
                            </div>
                            <div className='my-2 h-[10px]  rounded-full bg-zinc-300 dark:bg-zinc-700 overflow-hidden'>
                                <div style={{ width: `${item?.percentage}%`}} className='bg-sky-600 dark:bg-yellow-500 h-full '></div>

                            </div>

                        </li>
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Skills