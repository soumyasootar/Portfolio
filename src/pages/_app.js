import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
          <div className="text-xs absolute top-0">THIS PAGE IS BEING BUILDING NOW 🌚🌚🌚🌚...GOOD THINGS TAKE TIME</div>
        <Navbar/>
        <Component {...pageProps} />
      </main>
    </>
  );
}
