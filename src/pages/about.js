import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        <title>Soumya | About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
          <AnimatedText text={"Passion Fuels Purpose! "}/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase tex-dark/75'>BIOGRAPHY</h2>
             <p>Hey there! My name is Soumya Swaroop Sootar and I am a Full Stack Web Developer with expertise in MERN Development. I specialize in React, Express.js, Next.js, MongoDB, Chakra UI,Tailwind CSS, Node JS, HTML, CSS, and JavaScript. My strong collaboration and problem-solving skills were developed through team projects, and I am highly motivated to apply my technical skills to new and exciting projects.</p>
            </div>
          </div>
      </Layout>
      </main>
    </>
  )
}

export default About