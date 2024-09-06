import React, { useState } from 'react'
import Link from 'next/link';
import Logo from './Logo';
import { Router, useRouter } from 'next/router';
import {TwitterIcon, GithubIcon, LinkedInIcon, InstaIcon, SunIcon, MoonIcon } from './Icons';
import { motion } from "framer-motion";
import Home from '@/pages';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";


  const CustomLink1 = ({href, title, className=""}) => {
    const router = useRouter();
    return(
      <Link href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group `}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1}}
            >
        Home
        </motion.li>
        <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-light`}>&nbsp;</span>
      </Link>
    )
  }
  const CustomLink2 = ({href, title, className=""}) => {
    const router = useRouter();
    return(
      <Link href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group `}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1, delay: 0.1}}
            >
        About
        </motion.li>
        <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-light`}>&nbsp;</span>
      </Link>
    )
  }
  const CustomLink3 = ({href, title, className=""}) => {
    const router = useRouter();
    return(
      <Link href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group `}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1, delay: 0.2}}
            >
        Projects
        </motion.li>
        <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-light`}>&nbsp;</span>
      </Link>
    )
  }
  const CustomLink4 = ({href, title, className=""}) => {
    const router = useRouter();
    return(
      <Link href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group `}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1, delay: 0.3}}
            >
        Contact
        </motion.li>
        <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-light`}
        >&nbsp;</span>
      </Link>
    )
  }
  
  const CustomMobileLink1 = ({href, title, className="", toggle }) => {
    const router = useRouter();

    const handleClick =() => {
      toggle();
      router.push(href)
    }

    return(
      <button href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group my-2`} onClick={handleClick}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1}}
            >
        {title}
        </motion.li>
        <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-dark`}>&nbsp;</span>
      </button>
    )
  }
  const CustomMobileLink2 = ({href, title, className="", toggle }) => {
    const router = useRouter();

    const handleClick =() => {
      toggle();
      router.push(href)
    }

    return(
      <Link href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group my-2`} onClick={handleClick}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1, delay: 0.1}}
            >
        {title}
        </motion.li>
        <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-dark`}>&nbsp;</span>
      </Link>
    )
  }
  const CustomMobileLink3 = ({href, title, className="", toggle }) => {
    const router = useRouter();

    const handleClick =() => {
      toggle();
      router.push(href)
    }
    
    return(
      <Link href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group my-2`} onClick={handleClick}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1, delay: 0.2}}
            >
        {title}
        </motion.li>
        <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-dark`}>&nbsp;</span>
      </Link>
    )
  }
  const CustomMobileLink4 = ({href, title, className="", toggle }) => {
    const router = useRouter();

    const handleClick =() => {
      toggle();
      router.push(href)
    }
    
    return(
      <Link href={href} className={`${router.pathname === href ? 'text-Vermillion' : 'text-Fresh' }  flex items-center mr-4 text-Fresh 
      hover:text-dark cursor-pointer duration-300 nav-link relative group my-2`} onClick={handleClick}>
        <motion.li className='list-none'
        initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1, delay: 0.3}}
            >
        {title}
        </motion.li>
        <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 hover:bg-Vermillion
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-dark`}
        >&nbsp;</span>
      </Link>
    )
  }

const Navbar = () => {

  const [mode, setmode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  
  return (
    <header className='w-full px-32 py-8 font-semibold flex items-centre justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm m-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

        <div className='w-full flex justify-between lg:hidden items-center'>
        <nav className='flex items-center justify-center '>
            
            <CustomLink1 href="/" title="Home" className='mr-4'/>
            <CustomLink2 href="/about" title="About" className='mx-4'/>
            <CustomLink3 href="/projects" title="Projects" className='mx-4'/>
            <CustomLink4 href="/contact" title="Contact" className='ml-4'/>


        </nav>
        {/* <nav className='flex items-center justify-center flex-wrap bg-Fresh w-48 h-12 rounded-full shadow-md'> */}
        <nav className='flex items-center justify-center flex-wrap'>
          
          <motion.a href="https://github.com/afzal0076" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 mr-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <TbBrandGithub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/afzal-ahmed-013031202" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 mx-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <FaLinkedinIn />
          </motion.a>
          <motion.a href="https://instagram.com/afzallah_" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 mx-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <AiFillInstagram />
          </motion.a>
          <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 ml-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <FaTwitter />
          </motion.a>


        <button
        onClick={() => setmode(mode === "light" ? "dark" : "light") }
        className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}>
          {
            mode === "dark" ?
            <SunIcon className={"fill-dark"}/>
            : <MoonIcon className={"fill-light"} />
          }
        </button>

        </nav>
        </div>
        
        {
          isOpen ?

          <motion.div 
          initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
          animate={{scale:1, opacity:1}}
          className='min-w-[70vw] flex flex-col z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center'>
        <nav className='flex flex-col items-center justify-center '>
            
            <CustomMobileLink1 href="/" title="Home" className='mr-4' toggle={handleClick}/>
            <CustomMobileLink2 href="/about" title="About" className='mx-4' toggle={handleClick}/>
            <CustomMobileLink3 href="/projects" title="Projects" className='mx-4' toggle={handleClick}/>
            <CustomMobileLink4 href="/contact" title="Contact" className='ml-4' toggle={handleClick}/>


        </nav>
        {/* <nav className='flex items-center justify-center flex-wrap bg-Fresh w-48 h-12 rounded-full shadow-md'> */}
        <nav className='flex items-center justify-center flex-wrap mt-2 '>
          
        <motion.a href="https://github.com/afzal0076" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 mr-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <TbBrandGithub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/afzal-ahmed-013031202" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 mx-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <FaLinkedinIn />
          </motion.a>
          <motion.a href="https://instagram.com/afzallah_" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 mx-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <AiFillInstagram />
          </motion.a>
          <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-10 h-10 text-xl bg-light border-solid border-2 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer ease-in hover:bg-dark hover:fill-textGreen transition-colors duration-300 ml-2 border-dark sm:mx-1 sm:w-5 sm:h-5 dark:bg-dark hover:dark:bg-light dark:border-light'>
            <FaTwitter />
          </motion.a>

        <button
        onClick={() => setmode(mode === "light" ? "dark" : "light") }
        className={`ml-3  flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}>
          {
            mode === "dark" ?
            <SunIcon className={"fill-dark"}/>
            : <MoonIcon className={"fill-light"} />
          }
        </button>

        </nav>
        </motion.div>

          :null
        }

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
         <Logo />
        </div>
    </header>
  )
}

export default Navbar