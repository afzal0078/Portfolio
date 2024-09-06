import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { useState, React, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "../canvas";
import { slideIn } from "../utils/motion";
import TransitionEffect from '@/components/TransitionEffect'


const contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
    <Head>
        <title>Afzal | Contact Page</title>
        <meta name="description" content="any description" />
    </Head>

<TransitionEffect />

    <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className='pt-5 mt-0 px-10 sm:px-0 sm:mt-2'>
          <AnimatedText text="Get In Touch" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
            <div className={`2xl:mt-12 sm:mt-2 flex 2xl:flex-row md:flex-col-reverse gap-10 overflow-hidden sm:items-center`}>
              <motion.div
                variants={slideIn('left', "tween", 0.2, 1)}
                className='flex-[0.75] bg-dark p-8 rounded-2xl dark:bg-light'
              >
                
                <h3 className="text-textGreen font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[60px]">
                  Contact.
                </h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className='mt-12 sm:mt-6 flex flex-col gap-6'
                >
                  <label className='flex flex-col'>
                    <span className='text-light dark:text-dark font-medium mb-2'>Your Name</span>
                    <input 
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-Fresh dark:bg-dark py-2 px-4 placeholder:text-dark dark:placeholder:text-light text-light rounded-lg border-none outline-none font-medium sm:font:base'
                     />
                  </label>
                  
                  <label className='flex flex-col'>
                    <span className='text-light dark:text-dark font-medium mb-2'>Your Email</span>
                    <input 
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className='bg-Fresh dark:bg-dark py-2 px-4 placeholder:text-dark dark:placeholder:text-light text-light rounded-lg border-none outline-none font-medium sm:font:base'
                     />
                  </label>
                  
                  <label className='flex flex-col'>
                    <span className='text-light dark:text-dark font-medium mb-2'>Your message</span>
                    <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want say?"
                    className='bg-Fresh dark:bg-dark py-2 px-4 placeholder:text-dark dark:placeholder:text-light text-light rounded-lg border-none outline-none font-medium sm:font:base'
                     />
                  </label>

                  <button
                  type='submit'
                  className='bg-Vermillion dark:bg-light py-2 px-8 outline-none w-fit text-light dark:text-dark font-semibold shadow-md shadow-Fresh dark:shadow-dark rounded-xl dark:hover:bg-dark dark:hover:text-light hover:bg-light hover:text-dark'
                  >
                    {loading ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </motion.div>

              <motion.div
                variants={slideIn('right', "tween", 0.2, 1)}
                className='flex-1 h-auto xl:h-[650px] lg:w-full lg:h-[500px] xs:w-[200px] xs:h-[200px] xs:flex-none '
              >
                <EarthCanvas
                priority
                sizes='(max-width:768px) 100vw,
                (max-width:1200px) 50vw
                50vw'/>
              </motion.div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default SectionWrapper(contact, "contact")
