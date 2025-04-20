import React, { useLayoutEffect, useRef } from 'react';
import Heading from './Heading';
import gsap from 'gsap';

const FullStackProject = () => {
    const projectsArr = [
        { name: 'Ecommerce App', image: '/images/projects/ecommerce.png', link: 'https://ashish-ecom-47.netlify.app' },
        { name: 'Algotrons', image: '/images/projects/algotrons.png', link: 'https://algotrons-clone.netlify.app' },
        { name: 'Dream 11', image: '/images/projects/dream-11.png', link: 'https://dream-11-clone.netlify.app' },
        { name: 'Sarkari Test', image: '/images/projects/sarkari-test.png', link: 'https://sarkari-test.netlify.app' },
    ];

    const containerRefs = useRef([]);
    const tweenRefs = useRef([]);

    const animateImages = () => {
        // Kill previous animations
        tweenRefs.current.forEach((tween) => tween?.kill());

        tweenRefs.current = containerRefs.current.map((container) => {
            if (!container) return null;

            const img = container.querySelector('img');
            if (!img) return null;

            const startAnimation = () => {
                const distance = img.scrollHeight - container.clientHeight;

                if (distance > 0) {
                    return gsap.to(img, {
                        y: -distance,
                        ease: 'none',
                        repeat: -1,
                        duration: 10,
                    });
                } else {
                    gsap.set(img, { y: 0 });
                    return null;
                }
            };

            // If image is loaded, animate immediately
            if (img.complete) {
                return startAnimation();
            } else {
                // Otherwise, wait for it to load
                img.onload = () => startAnimation();
                return null;
            }
        });
    };

    useLayoutEffect(() => {
        animateImages();

        window.addEventListener('resize', animateImages);

        return () => {
            window.removeEventListener('resize', animateImages);
            tweenRefs.current.forEach((tween) => tween?.kill());
        };
    }, []);

    return (
        <div className='section-wrapper'>
            <header>
                <Heading title={'Full Stack Projects (Self)'} />
            </header>

            <div className="py-8">
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projectsArr.map((item, index) => (
                        <li key={item.name}>
                            <div className='rounded-md overflow-hidden border-2 border-gray-200 dark:border-gray-800'>
                                <div
                                    ref={(el) => (containerRefs.current[index] = el)}
                                    className='h-[240px] overflow-hidden relative'
                                    title='Click to view full image'
                                >
                                    <a href={item?.image} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={item?.image}
                                            alt={item?.name}
                                            className='w-full block'
                                        />
                                    </a>
                                </div>
                                <div className='px-4 py-6'>
                                    <h4 className='heading-6'>{item?.name}</h4>
                                    <a
                                        className='text-blue-500 underline underline-offset-1'
                                        href={item?.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item?.link}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FullStackProject;
