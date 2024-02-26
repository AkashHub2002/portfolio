import AnimatedText from '@/components/AnimatedText' 
import Layout from '@/components/Layout' 
import Head from 'next/head' 
import Image from 'next/image' 
import React, { useEffect, useRef } from 'react' 
import profilePic from '../../public/images/profile/developer2.png' 
import { useInView, useMotionValue, useSpring } from 'framer-motion' 
import Skills from '@/components/Skills' 
import Experience from '@/components/Experience' 
import Education from '@/components/Education' 
import TransitionEffect from '@/components/TransitionEffect' 
 
 
 
const AnimatedNumbers = ({value}) => { 
const ref = useRef(null) 
 
const motionValue = useMotionValue(0) 
const springValue = useSpring(motionValue, {duration: 3000}) 
const isInView = useInView(ref, {once: true}) 
useEffect(() => { 
    if(isInView){ 
        motionValue.set(value) 
    } 
}, [isInView, value, motionValue]) 
 
 
useEffect(() => { 
    springValue.on("change", (latest) => { 
        if(ref.current && latest.toFixed(0) <= value){ 
            ref.current.textContent = latest.toFixed(0) 
        } 
    }) 
} , [springValue, value]) 
 
 
 
    return <span ref={ref}></span>  
} 
 
 
 
const about = () => { 
  return ( 
    <> 
    <Head> 
      <title>About Akash</title> 
      <meta name='description' content='Somnath Biswas'/> 
    </Head> 
    <TransitionEffect/> 
    <main className='w-full flex flex-col items-center justify-center dark:text-light'> 
        <Layout className='pt-16'> 
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' /> 
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'> 
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'> 
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2> 
                <p className='font-medium'> 
                Hello myself Akash Shil, currently iam pursuing MCA from JIS College of Engineering specializing in Computer applications. Passionate about coding, ui/ux and quick-Learner, I have found my true calling in Web Design like ui/ux Design, I've honed my skills in HTML, CSS, JavaScript, python and desgin tools like Figma.
                </p> 
                <p className='my-4 font-medium'> 
                pretend to be a part of an organization Where I can constantly learn and develop my technical and management skills and make best use of it for the growth of the organization. I look forward to establishing my skills by adapting new technologies as well.
                </p> 
                <p className='font-medium'> 
                🤝 Let's connect! I'm enthusiastic about networking with fellow professionals, mentors, and potential collaborators. Feel free to reach out to me via LinkedIn messaging or at somnathbiswas576@gmail.com. Together, let's shape the future of web technology! 
                </p> 
            </div> 
 
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8  
            xl:col-span-4 md:order-1 md:col-span-8'> 
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/> 
                <Image src={profilePic} alt="Somnath" className='w-full h-auto rounded-2xl' 
                priority 
                sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw" 
                /> 
            </div> 
 
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'> 
                <div className='flex flex-col items-end justify-center xl:items-center'> 
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'> 
                        <AnimatedNumbers value={5}/>+ 
                    </span> 
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base 
                    xs:text-sm 
                    '>Projects Completed</h2> 
                </div> 
 
                <div className='flex flex-col items-end justify-center xl:items-center'> 
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'> 
                    <AnimatedNumbers value={10}/>+ 
                    </span> 
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base 
                    xs:text-sm'>Seminars Attended</h2> 
                </div> 
 
                <div className='flex flex-col items-end justify-center xl:items-center'> 
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'> 
                    <AnimatedNumbers value={5}/>+ 
                    </span> 
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base 
                    xs:text-sm'>Done Internships</h2> 
                </div> 
            </div> 
 
        </div> 
 
        <Skills/>  
        <Experience/>   
        <Education/> 
        </Layout> 
    </main> 
    </> 
  ) 
} 
 
export default about