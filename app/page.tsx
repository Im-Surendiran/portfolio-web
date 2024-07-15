import Image from "next/image";
import Head from "next/head";
import data from "@/data/data.json"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/pages/About"
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Footer from "@/components/Footer"
import Projects from "@/pages/Projects";
export default function Home() {
  return (
    <div
      id="mainBody"
      className=" bg-white text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin select-none"
    >
      <Head>
        <title>Surendiran</title>
        <meta
          name="description"
          content="Hi This is surendiran, Welcome to my software developer portfolio! I am passionate about creating efficient, scalable, and user-friendly solutions using cutting-edge technologies. With 1.5 years of experience in software development, I specialize in full stack web development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header />
       <section id="hero" >
        <Hero />
      </section>
      <section id="about" >
        <About />
      </section>
      <section id="experience" >
        <Experience />
      </section>
      <section id="skills" >
        <Skills />
      </section>
      <section id="projects" >
        <Projects data={data.data} />
      </section>
      <section >
      <Footer />
      </section>
    </div>
  );
}
