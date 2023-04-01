import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import zostelimg from "../../public/images/projects/ZOSTEL.png";
import fabimg from "../../public/images/projects/Faballey.png";
import shopimg from "../../public/images/projects/Shop.png";

const FeatureProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="w-full flex relative items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <>
      <article className="w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light relative p-6 ">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />

        <Link
          href={link}
          target="_blank"
          className=" w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark">{summary}</p>
          <div className="w-full justify-between mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              {" "}
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            >
              {" "}
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Soumya | Project Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="w-full mb-16 flex flex-col justify-center items-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"ZOSTEL,A Hostel Booking Website"}
                link="https://zostel-ten.vercel.app/"
                github={"https://github.com/soumyasootar/zostel"}
                img={zostelimg}
                summary="Zostel is a hostel booking website with over 60+ destinations across India and Nepal. The website features authenticated login with email verification, the ability to book multiple rooms, voice search, and dark mode. The tech stack used includes React, React-Redux, JS, Chakra UI, Framer Motion, and Email JS. The project responsibilities included implementing Email JS on the login page, coding the destination page, debugging the payment page, ensuring responsiveness, debugging the room booking page, and maintaining the GitHub codebase."
              />
            </div>
            <div className="col-span-6">
              <Project
                type={"PROJECT"}
                title={"FABALLEY"}
                link="https://fab-alley-clone-10.vercel.app/"
                github={"https://github.com/soumyasootar/FabAlley"}
                img={fabimg}
                // summary="FABALLEY - Fashion at your fingertips! Discover thousands of trendy and affordable styles on this Indian e-commerce website. Enjoy a seamless shopping experience with authenticated login/signup, voice search, sort and filter options. With a talented team, we've coded the landing page, login/signup with Email JS, cart, address, payment, and profile pages, ensuring responsiveness across all devices. Join the fashion revolution with FABALLEY!"
                summary="Authenticated login/signup, sort/filter, and voice search, built with HTML, JS, CSS, Email JS and Bootstrap."
              />
            </div>
            <div className="col-span-6">
              <Project
                type={"PROJECT"}
                title={"Shop.com"}
                link="https://shopclone10.netlify.app/project.html"
                github={"https://github.com/soumyasootar/www.shop.com"}
                img={shopimg}
                summary="HTML, JS, and CSS used to create an e-commerce website with authentication, sorting, filtering, and voice search functionality."
                // summary="Shop smarter and save big with SHOP.COM! Our e-commerce website offers thousands of products from different retailers, featuring authenticated login, sort and filter options, and even voice search.Tech Stacks used in this project are pure HTML, CSS and JS. Our team of five developers coded essential pages like cart, address, payment, and profile to ensure a seamless shopping experience. Enjoy a user-friendly and responsive platform that helps you find the best deals!"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
