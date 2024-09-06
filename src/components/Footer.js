import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-solid border-t-2 border-dark font-medium text-lg dark:text-light sm:text-base dark:border-light'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>
                {new Date().getFullYear()}&copy; All Rights Reserved.
            </span>
            <div className='flex items-center lg:py-2'>
                Build with <span className='text-primary dark:text-Sunshine text-2xl px-1'>&#9825;</span> by&nbsp; <Link href="/" className='underline underline-offset-2 ' target={"_blank"}>Afzal</Link>
            </div>
            <Link href="/" target={"_blank"} className='underline underline-offset-2 '>Say hello</Link>

        </Layout>
    </footer>
  )
}

export default Footer