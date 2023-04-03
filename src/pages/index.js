import AnimatedText from "@/Components/AnimatedText";
import { LinkArrow } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profilepic from "../../public/images/profile/Bg-removed SideImage-Main (1).png";
import { RiContactsBookFill } from "react-icons/ri";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transitions from "@/Components/Transitions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soumya | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-2 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={Profilepic}
                alt={"DEVELOPER IMAGE"}
                className="w-full h-auto lg:w-full md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Soumya_Sootar.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  RESUME <LinkArrow />
                </Link>
                <Link
                  href={"mailto:soumyaswaroopsootar@gmail.com"}
                  target="_blank"
                  className="ml-4 flex items-center bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  CONTACT<RiContactsBookFill className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute w-24 right-8 bottom-8 inline-block">
          <Image src={LightBulb} alt="Bulb" className="w-full h-auto md:hidden" />
        </div>
      </main>
    </>
  );
}
