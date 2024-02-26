import AnimatedText from '@/components/AnimatedText' 
import { GithubIcon } from '@/components/Icons' 
import Layout from '@/components/Layout' 
import Head from 'next/head' 
import Link from 'next/link' 
import React from 'react' 
import project1 from '../../public/images/projects/AlgoHub.jpg' 
import project2 from '../../public/images/projects/GoCrypto.png' 
import project3 from '../../public/images/projects/Landigo.png' 
import project4 from '../../public/images/projects/DevPad.png' 
import project5 from '../../public/images/projects/ASAP.png' 
import project6 from '../../public/images/projects/Textopia.png' 
import Image from 'next/image' 
import { motion } from 'framer-motion' 
import TransitionEffect from '@/components/TransitionEffect' 
 
const FramerImage = motion(Image); 
const FeaturedProject = ({ type, title, summary, img, link, github }) => { 
    return ( 
        <article  
        className='relative w-full flex items-center justify-between rounded-br-2xl 
        rounded-3xl border border-solid border-dark  bg-light shadow-2xl p-12 dark:bg-dark  dark:border-light 
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 
        '> 
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] 
            '/> 
             
            <Link href={link} target="_blank" 
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'> 
                     
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}} 
                transition={{duration: 0.2}}  
                priority 
                sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                50vw" 
                /> 
            </Link> 
 
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'> 
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span> 
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'> 
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2> 
                </Link> 
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p> 
                <div className='mt-2 flex items-center'> 
                    <Link href={github} target="_blank" className='w-10'>{" "}<GithubIcon />{" "}</Link> 
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
                    sm:px-4 sm:text-base 
                    '>Visit Projects</Link> 
                </div> 
            </div> 
 
        </article> 
    ) 
} 
 
const Project = ({ title, type, img, link, github }) => { 
    return ( 
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'> 
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' 
            /> 
 
            <Link href={link} target="_blank" 
                className='w-full cursor-pointer overflow-hidden rounded-lg'> 
                <FramerImage src={img} alt={title} className='w-full h-auto'  
                whileHover={{scale:1.05}} 
                transition={{duration: 0.2}} 
                /> 
            </Link> 
 
            <div className='w-full flex flex-col items-start justify-between mt-4'> 
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span> 
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'> 
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2> 
                </Link> 
 
                <div className='mt-2 w-full flex items-center justify-between'> 
                    <Link 
                        href={link} 
                        target="_blank" 
                        className='text-lg font-semibold underline md:text-base' 
                    >Visit</Link> 
                    <Link 
                        href={github} 
                        target="_blank" 
                        className='w-8 md:w-6'> <GithubIcon />{" "} 
                    </Link> 
                </div> 
            </div> 
        </article> 
    ) 
} 
 
const projects = () => { 
    return ( 
        <> 
            <Head> 
                <title>Akash Projects Hub</title> 
                <meta name='description' content='Somnath Biswas' /> 
            </Head> 
            <TransitionEffect /> 
            <main className='w-full mb-16flex flex-col items-center justify-center dark:text-light'> 
                <Layout className='pt-16'> 
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' /> 
 
                    <div className='grid w-full grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'> 
                        <div className='col-span-12'> 
                            <FeaturedProject 
                                title="AlgoHub" 
                                img={project1} 
                                summary=" Visualize different types of algorithms and their shortest path using ReactJS. User-friendly for all students who are beginners at DSA and want to visualize the paths of algorithm easily." 
                                link="https://stalwart-sprinkles-833524.netlify.app/" 
                                github="https://github.com/SomnathBiswas/Algo-Hub" 
                                type="Featured Project" 
                            /> 
                        </div> 
                        <div className='col-span-6 sm:col-span-12'> 
                            <Project 
                                title="GoCrypto" 
                                img={project2} 
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your  
                                local currency." 
                                link="https://wondrous-faun-9fc9cc.netlify.app/" 
                                github="https://github.com/SomnathBiswas/go-crypto" 
                                type="Other Project" 
                            /> 
                        </div> 
                        <div className='col-span-6 sm:col-span-12'> 
                            <Project 
                                title="Landigo" 
                                img={project3} 
                                summary="Welcome to LandDIgo, where innovation meets excellence! Our landing page is designed to give you a glimpse into the world of LandDIgo and what we have to offer.As you land on our page, you'll be greeted by stunning visuals that showcase the essence of our brand. From vibrant imagery to sleek animations, every element is crafted to capture your attention and leave a lasting impression." 
                                link="https://somnathbiswas.github.io/OIBSIP_LVL1_Task1/#hero" 
                                github="https://github.com/SomnathBiswas/OIBSIP_LVL1_Task1" 
                                type="Other Project" 
                            /> 
                        </div> 
 
                        <div className='col-span-12'> 
                            <FeaturedProject 
                                title="DevPad" 
                                img={project4}summary="Welcome to DevPad, basically it is an online web development platform that allows users to write, share, and showcase HTML, CSS, and JavaScript code snippets. It serves as a playground for front-end developers, designers, and anyone interested in web development to experiment with code in a live environment." 
                                link="https://glowing-clafoutis-00ebe2.netlify.app/" 
                                github="https://github.com/SomnathBiswas/DevPad" 
                                type="Featured Project" 
                            /> 
                        </div> 
                        <div className='col-span-6 sm:col-span-12'> 
                            <Project 
                                title="ASAP Translator" 
                                img={project5} 
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your  
                                local currency." 
                                link="https://incomparable-melba-4fa5b3.netlify.app/" 
                                github="https://github.com/SomnathBiswas/CodeClauseInternship_ASAP-Translator" 
                                type="Other Project" 
                            /> 
                        </div> 
                        <div className='col-span-6 sm:col-span-12'> 
                            <Project 
                                title="Textopia" 
                                img={project6} 
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your  
                                local currency." 
                                link="https://somnathbiswas.github.io/CodeClauseInternship_Textopia/" 
                                github="https://github.com/SomnathBiswas/CodeClauseInternship_Textopia" 
                                type="Other Project" 
                            /> 
                        </div> 
                    </div> 
                </Layout> 
            </main> 
        </> 
 
    ) 
} 
 
export default projects