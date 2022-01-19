import Head from "next/head";
import Image from "next/image";
import mountain from "../public/images/bg-mountain.jpeg";
import random from "../public/images/random.jpeg";
import fire from "../public/images/fire.jpeg";
import html from "../public/images/html-logo.svg";
import css from "../public/images/css-logo.png";
import javascript from "../public/images/javascript-logo.png";
import react from "../public/images/react-logo.svg";
import next from "../public/images/next-logo.svg";
import tailwind from "../public/images/tailwind-logo.svg";
import typescript from "../public/images/typescript-logo.svg";
import framerMotion from "../public/images/framer-motion.jpeg";
import { motion } from "framer-motion";

import audiophilecart from "../public/images/audiophile-cart.png";
import audiophileHomepage from "../public/images/audiophile-homepage.png";
import audiophileSpeaker from "../public/images/audiophile-speaker.png";

import designoHomepage from "../public/images/designo-homepage.png";
import designoDesigns from "../public/images/designo-designs.png";
import designoOtherDesigns from "../public/images/designo-other-designs.png";

import feedbackHomepage from "../public/images/feedback-homepage.png";
import feedbackDetail from "../public/images/feedback-detail.png";
import feedbackCreate from "../public/images/feedback-create.png";

export default function Home() {
  const tools = [
    { logo: html, name: "HTML" },
    { logo: css, name: "CSS" },
    { logo: javascript, name: "Javascript" },
    { logo: react, name: "ReactJS" },
    { logo: next, name: "NextJS" },
    { logo: tailwind, name: "Tailwind" },
    { logo: typescript, name: "Typescript" },
    { logo: framerMotion, name: "Framer Motion" },
  ];

  const projects = [
    {
      name: "Trello Clone",
      description: "Trello clone that...",
      demo: "https://www.google.com/",
      code: "https://www.google.com/",
      tools: [next, tailwind, typescript, framerMotion],
      screenshots: [random, fire, mountain],
    },
    {
      name: "Audiophile",
      description:
        "Audiophile is a multipage e-commerce website selling imaginative audio products. Using React's state management, a user can add items to the cart and checkout accordingly.",
      demo: "https://www.google.com/",
      code: "https://www.google.com/",
      tools: [react, tailwind, framerMotion],
      screenshots: [audiophileHomepage, audiophileSpeaker, audiophilecart],
    },
    {
      name: "Designo",
      description:
        "Designo is a multipage website for an imaginative design agency.",
      demo: "https://www.google.com/",
      code: "https://www.google.com/",
      tools: [react, tailwind, framerMotion],
      screenshots: [designoHomepage, designoOtherDesigns, designoDesigns],
    },
    {
      name: "Product Feedback",
      description:
        "Product Feedback is a multipage CRUD website. By creating a REST API within NextJS, a user can add, delete, update, and read feedback for the product accordingly.",
      demo: "https://www.google.com/",
      code: "https://www.google.com/",
      tools: [next, tailwind, typescript, framerMotion],
      screenshots: [feedbackHomepage, feedbackDetail, feedbackCreate],
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, staggerChildren: 1.5 },
    },
  };

  return (
    <main className='grid font-overpass text-white min-h-screen items-start bg-no-repeat bg-center bg-cover bg-fixed bg-main'>
      <motion.section
        variants={headerVariants}
        initial='hidden'
        animate='visible'
        className='grid d:grid-cols-2 d:items-center'
      >
        <motion.header
          variants={headerVariants}
          className='grid d:text-right d:mr-12 px-10 py-24 t:px-20 t:py-32 d:px-28 gap-5'
        >
          <motion.h1
            variants={headerVariants}
            initial={{ y: -300 }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 5, stiffness: 150 },
            }}
            className='text-6xl t:text-7xl font-bold w-3/5 d:w-full tracking-widest'
          >
            KAIXIN HUANG
          </motion.h1>
          <motion.p
            variants={headerVariants}
            className='t:text-lg tracking-wide font-light'
          >
            A frontend developer looking for a job
          </motion.p>
        </motion.header>
        <div className='bg-no-repeat bg-fixed bg-cover bg-intro h-[24.5rem] d:h-[47rem] dl:bg-center w-full'></div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, color: "white" }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        className='grid d:grid-cols-2 text-center d:text-right t:px-20 t:py-20'
      >
        <h1 className='text-3xl t:text-4xl d:mr-32 font-semibold tracking-wide px-10 pt-20 '>
          About Me
        </h1>
        <p className='t:text-lg t:leading-9 d:text-left font-light p-10 d:pr-0 leading-8'>
          I am a frontend developer hoping to land a job. Despite the years in
          college heavily focused on data science and statistics, it was that
          one semester class focusing on HTML, CSS, and Javascript that made me
          more motivated to continue forward in the realm of programming. Using
          React/Next and Tailwind, I have projects ranging from multipage
          websites to CRUD apps.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, color: "white" }}
        whileInView={{
          opacity: 1,
          transition: { duration: 3 },
        }}
        className='grid d:grid-cols-2 text-center d:text-right pb-10 t:pb-32'
      >
        <h1 className='text-3xl t:text-4xl d:mr-32 font-semibold tracking-wide px-10 pt-10'>
          Skills and Tools
        </h1>
        <ul className='grid grid-cols-3 font-light p-10 t:w-4/5 t:mx-auto d:pl-0 d:pr-10 gap-5'>
          {tools.map((tool, index) => {
            return (
              <li key={index} className='grid text-center'>
                <div className='mx-auto'>
                  <Image
                    src={tool.logo}
                    alt='html'
                    height={70}
                    width={70}
                  ></Image>
                </div>
                <p className='font-medium tracking-wide'>{tool.name}</p>
              </li>
            );
          })}
        </ul>
      </motion.section>
      <section className='grid d:grid-cols-2 px-10 gap-12 t:gap-20 t:px-20'>
        <h1 className='text-3xl t:text-4xl text-center d:text-right d:mr-32 font-semibold tracking-wide'>
          Projects
        </h1>
        {projects.map((project, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, color: "white" }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              key={index}
              className='grid d:grid-cols-2 d:col-start-1 d:col-span-2 d:items-start gap-5 d:gap-0 t:text-lg'
            >
              <div className='grid d:justify-items-end d:mr-40 gap-2'>
                <div className='grid grid-cols-2 d:gap-6 d:text-right text-xl font-bold tracking-widest'>
                  <h2 className='d:order-last t:text-2xl d:3xl'>
                    {" "}
                    {project.name}
                  </h2>
                  <ul className='grid grid-flow-col mr-0 mx-auto gap-2 items-center'>
                    {project.tools.map((tool, idx) => {
                      return (
                        <li key={idx} className=''>
                          <Image
                            src={tool}
                            alt='tool'
                            height={30}
                            width={30}
                          ></Image>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <p className='font-light d:text-right dl:w-4/5 tracking-wide'>
                  {project.description}
                </p>
                <div className='grid grid-cols-2 justify-self-start d:justify-self-end text-center text-xs t:text-sm tracking-widest gap-3'>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-5 py-2 font-semibold hover:font-extrabold bg-red-300 hover:bg-red-100 hover:ring-2 hover:ring-red-300 hover:text-red-300 shadow-lg shadow-red-300 rounded-md'
                  >
                    LIVE
                  </a>
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-5 py-2 font-semibold hover:font-extrabold bg-red-300 hover:bg-red-100 hover:ring-2 hover:ring-red-300 hover:text-red-300 shadow-lg shadow-red-300 rounded-md'
                  >
                    CODE
                  </a>
                </div>
              </div>
              <div className='grid grid-cols-2 grid-rows-2 gap-2'>
                <div className='col-span-2 -mb-2'>
                  <Image src={project.screenshots[0]} alt='intro'></Image>
                </div>
                <div className=''>
                  <Image src={project.screenshots[1]} alt='intro'></Image>
                </div>
                <div className=''>
                  <Image src={project.screenshots[2]} alt='intro'></Image>
                </div>
              </div>
            </motion.li>
          );
        })}
      </section>
      <motion.section
        initial={{ opacity: 0, color: "white" }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        className='grid d:grid-cols-2 items-start px-10 gap-10 pb-10 d:pb-20 t:px-20'
      >
        <h1 className='grid gap-28 items-start d:text-right d:mr-36 text-3xl t:text-4xl font-semibold tracking-wide'>
          Get In Touch
        </h1>
        {/* <form className='grid grid-cols-2 d:self-end gap-5 text-sm t:text-base text-black dl:pr-10'>
          <input
            type='text'
            placeholder='Name'
            className='px-5 py-2 rounded-md placeholder:tracking-wide tracking-wide focus:outline-none focus:ring-2 focus:ring-red-300'
          />
          <input
            type='text'
            placeholder='Email'
            className='px-5 py-2 rounded-md placeholder:tracking-wide tracking-wide focus:outline-none focus:ring-2 focus:ring-red-300'
          />
          <textarea
            name='Message'
            id='Message'
            placeholder='Message'
            className='col-span-2 p-5 h-40 rounded-md placeholder:tracking-wide tracking-wide focus:outline-none resize-none focus:ring-2 focus:ring-red-300'
          ></textarea>
          <button className='text-xs justify-self-start text-white font-semibold px-5 py-3 bg-red-300 hover:bg-red-100 hover:ring-2 hover:ring-red-300 hover:text-red-300 shadow-lg shadow-red-300 rounded-md'>
            SEND MESSAGE
          </button>
        </form> */}
        <section className='grid gap-8'>
          <div className='grid gap-3'>
            <h4 className='tracking-widest font-medium'>EMAIL</h4>
            <h4 className='underline font-extralight tracking-wider'>
              kaixin1528@gmail.com
            </h4>
          </div>
          <div className='grid gap-3'>
            <h4 className='tracking-widest font-medium'>PHONE</h4>
            <h4 className='underline font-extralight tracking-wider'>
              (626) 382-8126
            </h4>
          </div>
          <div className='grid gap-3'>
            <h4 className='tracking-widest font-medium'>GITHUB</h4>
            <h4 className='underline font-extralight'>(626) 382-8126</h4>
          </div>
        </section>
      </motion.section>
    </main>
  );
}
