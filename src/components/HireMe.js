import React from 'react' 
import { CircularText } from './Icons' 
import Link from 'next/link' 
 
const HireMe = () => { 
  return ( 
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-1 md:left-auto  md:top-0 md:bottom-auto md:absolute 
    '> 
      <div className='w-48 h-auto flex items-center justify-center relative'> 
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light md:w-24"} /> 
      </div> 
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc-RuJEWivw6P0dxOCEirNMOf-613QwxB10Me3eVqmJK8jYjg/viewform" target={"_blank"} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark w-20 h-20 rounded-full 
    font-semibold hover:bg-light hover:text-dark hover:border-dark border-transparent 
    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px] 
    '>Hire Me</Link> 
    </div> 
 
  ) 
} 
 
export default HireMe