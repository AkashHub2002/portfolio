import React, { useRef } from 'react'; 
import { motion, useScroll } from "framer-motion" 
import LiIcon from './LiIcon'; 
import AnimatedText from '@/components/AnimatedText' 
 
 
const Details = ({ type, time, place, info }) => { 
    const ref = useRef(null); 
    return ( 
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
        md:w-[80%]'> 
 
 
            <LiIcon reference={ref} /> 
            <motion.div 
                initial={{ y: 50 }} 
                whileInView={{ y: 0 }} 
                transition={{ duration: 0.5, type: "spring" }} 
            > 
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'> 
                    {type} 
                </h3> 
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'> 
                    {time} | {place} 
                </span> 
                <p className='font-medium w-full md:text-sm'> 
                    {info} 
                </p> 
            </motion.div> 
        </li> 
    ); 
}; 
 
 
 
const Education = () => { 
    const ref = useRef(null); 
    const { scrollYProgress } = useScroll( 
        { 
            target: ref, 
            offset: ["start end", "center start"] 
        } 
    ) 
    return ( 
        <div className='my-64'> 
            {/* <AnimatedText text="Education" className='my-20' /> */} 
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2> 
 
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'> 
 
 
 
                <motion.div 
                    style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                    md:w-[2px] md:left-[30px] xs:left-[20px]" 
                    /> 
 
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'> 
 
 
                <Details 
                        type="Master of Computer Application" 
                        time="2023-Present"
                        place="JIS College of Engineering"
                        info="Advance in computer application and Relevant courses included Full Stack Development and learning MySQL."
                    />


        <Details 
                        type="Bachelor of Computer Application" 
                        time="2020-2023"
                        place="JIS College of Engineering"
                        info="Completed a Final year project on OMR Sheet Grading and Performance analysis using Machine Learning and published the research paper."
                    />


<Details 
                        type="Online Coursework" 
                        time="2020-Present"
                        place="Coursera And EdX"
                        info="Completed coursework in advanced topics such as Cyber Security, Python and Red Hat Linux."
                    />
 
 
 
 
 
 
                </ul> 
            </div> 
        </div> 
    ) 
} 
export default Education