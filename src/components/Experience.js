import React, { useRef } from 'react'; 
import{motion, useScroll} from "framer-motion" 
import LiIcon from './LiIcon'; 
import AnimatedText from '@/components/AnimatedText' 
 
 
const Details = ({position, company, companyLink, time, address, work}) => { 
    const ref = useRef(null); 
    return ( 
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
    md:w-[80%] 
    '> 
 
 
        <LiIcon reference={ref}/> 
        <motion.div 
        initial={{y: 50}} 
        whileInView={{y:0}} 
        transition={{duration: 0.5, type:"spring"}} 
        > 
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} 
            target="_blank" 
            className='text-primary dark:text-primaryDark capitalize' 
             
            >@{company}</a></h3> 
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'> 
                {time} | {address} 
            </span> 
            <p className='font-medium w-full md:text-sm'>  
                {work} 
            </p> 
        </motion.div> 
    </li> 
    ); 
}; 
 
 
 
const Experience = () => { 
    const ref = useRef(null); 
    const {scrollYProgress} = useScroll( 
        { 
            target: ref, 
            offset: ["start end", "center start"] 
        } 
    ) 
    return ( 
        <div className='my-64'> 
            {/* <AnimatedText text="Experience" className='my-20' /> */} 
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2> 
             
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'> 
 
 
  
<motion.div  
style={{scaleY: scrollYProgress}}className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  
md:w-[2px] md:left-[30px] xs:left-[20px]" /> 
                
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'> 
                <Details

position="Full Stack Intern" company="Euphoria GenX"
companyLink="https://euphoriagenx.com/"
time="2023-2024" address="Sector V, Bidhannagar, Kolkata, West Bengal 700091"
work="Take the lead in developing server-side logic using Node.js.
Design and implement RESTful APIs for seamless communication between frontend and backend components."

/>

<Details

position="UI/UX Designer Intern" company="SOINIT TECHNOLOGY"
companyLink="https://www.soinit-ts.com/"
time="2024" address="Kolkata, 
West Bengal 700091"
work="Create graphics and design layouts for print ads, flyers, email newsletters, the homepage, blog, and social media accounts,
Collaborate with the marketing department and support campaigns with design solutions."

/>

<Details

position="MySQL Instern" company="SOINIT TECHNOLOGY"
companyLink="https://www.soinit-ts.com/"
time="2023" address="Kolkata, West Bengal"
work="Controlling code with logical expressions, loops and Writing custom functions and Creating and editing database records.                        "

/>
                </ul> 
            </div> 
        </div> 
    ) 
} 
export default Experience