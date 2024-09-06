import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companylink, time, address, work }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference = {ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companylink}
                    target='_blank'
                    className='text-primary capitalize dark:text-textGreen'>@{company}</a>   </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

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
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-dark dark:text-light'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                    
                        position="SIP in Python Programming & its Applications" company="MITS, Gwalior"
                        companylink="https://mitsgwalior.in"
                        time="20th June to 30th June, 2022" address="Gwalior, Madhya Pradesh"
                        work="Embark on a dynamic summer internship at our college, exploring Python programming and its diverse applications. Gain hands-on experience, master coding skills, and unlock limitless possibilities in the world of technology." />
                    <Details
                        position="SIP in Web Development" company="Teaching Hub"
                        companylink="TeachingHub.tech"
                        time="15th Dec, 2022 to 15th Mar, 2023" address="Gwalior, Madhya Pradesh"
                        work="Immerse yourself in cutting-edge web development projects during our summer internship at a thriving startup. Collaborate with a talented team, build real-world websites, and advance your skills in a fast-paced, hands-on environment." />
                </ul>
            </div>
        </div>
    )
}

export default Experience