import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen z-30 bg-teal-800' 
        initial={{x: "100%", w: "100%"}}
        animate={{x: "0%", w: "0%"}}
        exit={{x:["0%", "100%"], width:["0%", "100%"]}}
        transition={{duration:0.8, ease: "easeInOut"}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen z-20 bg-dark' 
        initial={{x: "100%", w: "100%"}}
        animate={{x: "0%", w: "0%"}}
        transition={{delay:0.2, duration:0.8, ease: "easeInOut"}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen z-10 bg-purple-600' 
        initial={{x: "100%", w: "100%"}}
        animate={{x: "0%", w: "0%"}}
        transition={{delay:0.2, duration:0.8, ease: "easeInOut"}}
        />
    </>
  )
}

export default TransitionEffect