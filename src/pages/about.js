import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import profilePic from '../../public/images/profile/My project.png';
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNo = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000});
const isInView = useInView(ref, {once: true});

useEffect(() => {
  if (isInView) {
    motionValue.set(value);
  }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if (ref.current && latest.toFixed(0) <= value ) {
      ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue, value])



  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Afzal | About Page</title>
        <meta name="description" content="any description" />
      </Head>

<TransitionEffect />

      <main className="flex w-full fex-col items-centre justify-centre dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Aspiring Minds Unleashed" className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"/>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
              Welcome to my portfolio! I'm a passionate Electronics Engineering student pursuing a B.Tech degree at MITS Gwalior. My journey has been shaped by an unwavering fascination with coding, honing skills in Java, C++, and React JS, enabling me to craft innovative software solutions. As a creative at heart, I also dabble in graphic and UI/UX design, utilizing tools like Photoshop and Figma to bring visions to life.
              </p>
              <p className="my-4 font-medium">
              Beyond academics, I'm an avid explorer, always seeking new places and experiences. The thrill of discovery fuels my inquisitive nature, inspiring me to think outside the box and pioneer cutting-edge technologies. Virtual gaming is my cherished hobby, as it not only entertains but fosters strategic thinking and teamwork. Join me on this transformative journey!
              </p>
              <p className="font-medium">
              Join me on this transformative journey! As an Electronics Engineering student at MITS Gwalior, I'm devoted to pushing boundaries and embracing constant growth. My passion for coding and love for graphic design fuel my quest for creating remarkable digital experiences. With a zest for adventure, I thrive in exploring new places and leveraging innovative technologies. Let's connect and collaborate!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <Image src={profilePic} alt="Codebucks" className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width:768px) 100vw,
                (max-width:1200px) 50vw
                33vw'
                />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center  md:order-3">
                <div className="flex flex-col items-end justify-centre xl:items-center">
                    <span className="inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNo value={50}/>+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                </div>
                <div className="flex flex-col items-end justify-centre xl:items-center">
                    <span className="inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNo value={40}/>+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                </div>
                <div className="flex flex-col items-end justify-centre xl:items-center">
                    <span className="inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNo value={4}/>+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
                </div>
            </div>
          </div>
          <Skills />
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
