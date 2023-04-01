import AnimatedText from "@/Components/AnimatedText";
import Education from "@/Components/Education";
import Layout from "@/Components/Layout";
import Skills from "@/Components/Skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/images/profile/IMG_8967.jpg";

const AnimatedNumbers=({value})=>{
  const ref = useRef(null)

  const motionvalue=useMotionValue(1);

  const springvalue =useSpring(motionvalue,{duration:4200})

  const isInView =useInView(ref,{once:true})

  useEffect(() => {
    if(isInView){
      motionvalue.set(value)
    }
  }, [isInView,value,motionvalue])

  useEffect(() => {
    springvalue.on("change",(latest)=>{
      if(ref.current && latest.toFixed(0)<=value){
        ref.current.textContent=latest.toFixed(0)
      }
    })

  }, [springvalue,value])
  
  

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Soumya | About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={"Passion Fuels Purpose! "} className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase tex-dark/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hey there! My name is Soumya Swaroop Sootar and I am a Full
                Stack Web Developer with expertise in MERN Development. I
                specialize in React, Express.js, Next.js,NPM, MongoDB, Chakra
                UI,Tailwind CSS, Node JS, HTML, CSS, and JavaScript. My strong
                collaboration and problem-solving skills were developed through
                team projects, and I am highly motivated to apply my technical
                skills to new and exciting projects.
              </p>

              <p className="font-medium my-4">
                Some of my notable clone projects include ZOSTEL, a hostel
                booking website with 60+ destinations across India and Nepal,
                and FABALLEY, an Indian fashion e-commerce website with
                thousands of trendy and affordable fashion options. I also
                worked on cloning SHOP.COM, an online shopping website that
                offers thousands of products from various retailers.
              </p>

              <p className="font-medium">
                Overall,I am a friendly and dedicated developer who is always
                eager to take on new challenges and exceed expectations. I look
                forward to working with you!
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-3" 
            >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
              <Image
                src={ProfilePic}
                alt="Profile Pic"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={1200}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Hours of Coding </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={1000}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Hours of DSA</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={3}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Projects</h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default About;
