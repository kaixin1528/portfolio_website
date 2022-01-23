import Head from "next/head";
import Image from "next/image";
import html from "../public/images/html-logo.svg";
import css from "../public/images/css-logo.png";
import javascript from "../public/images/javascript-logo.png";
import react from "../public/images/react-logo.svg";
import next from "../public/images/next-logo.svg";
import tailwind from "../public/images/tailwind-logo.svg";
import typescript from "../public/images/typescript-logo.svg";
import framerMotion from "../public/images/framer-motion.jpeg";
import mongodb from "../public/images/mongodb-logo.png";
import github from "../public/images/github-logo.png";
import linkedin from "../public/images/linkedin-logo.png";
import { motion } from "framer-motion";

import audiophileHomepage from "../public/images/audiophile-homepage.png";
import feedbackHomepage from "../public/images/feedback-homepage.png";
import trello from "../public/images/trello-clone.png";
import designoHomepage from "../public/images/designo-homepage.png";

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
    { logo: mongodb, name: "MongoDB" },
  ];

  const projects = [
    {
      name: "Audiophile",
      description:
        "Audiophile is a responsive, multipage e-commerce website selling imaginary audio products. Using React's state management, a user can add/remove items to the cart and checkout accordingly.",
      demo: "https://kaixin-audiophile.netlify.app",
      code: "https://github.com/kaixin1528/audiophile-e-commerce",
      tools: [react, tailwind, framerMotion],
      screenshots: [audiophileHomepage],
    },
    {
      name: "Product Feedback",
      description:
        "Product Feedback is a responsive, multipage CRUD website. Using Next's built-in API routes, a user can add, delete, update, and read feedback for the product and interact with the comment section.",
      demo: "https://kaixin-product-feedback.netlify.app",
      code: "https://github.com/kaixin1528/product-feedback",
      tools: [next, tailwind, typescript, framerMotion],
      screenshots: [feedbackHomepage],
    },
    {
      name: "Trello Clone",
      description:
        "Trello clone is a responsive CRUD website. Using Next's built-in API routes and connecting to the MongoDB database, a user can add a new board and within each board add/remove/edit new lists and cards, card descriptions, and comments.",
      code: "https://github.com/kaixin1528/trello-clone",
      tools: [next, tailwind, mongodb, typescript],
      screenshots: [trello],
    },
    {
      name: "Designo",
      description:
        "Designo is a responsive, multipage website for a design agency focused on creating imaginary responsive, web, and app designs. The layout is CSS-Grid-based for individual preview designs and company information pages.",
      demo: "https://kaixin-designo.netlify.app",
      code: "https://github.com/kaixin1528/designo",
      tools: [react, tailwind, framerMotion],
      screenshots: [designoHomepage],
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
      <Head>
        <title>Kaixin's Portfolio</title>
      </Head>
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
            A frontend developer looking for an entry job
          </motion.p>
        </motion.header>
        <div className='bg-no-repeat bg-fixed bg-cover bg-intro h-[28rem] d:h-[49rem] dl:bg-center w-full'></div>
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
          I am an aspiring frontend developer looking for an entry job. I have
          built several responsive websites using React, Next, Tailwind,
          Javascript and hope to contribute to a highly collaborative work
          environment and provide customer satisfaction.
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
          {tools.map((tool: any, index: number) => {
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
        {projects.map((project: any, index: number) => {
          return (
            <motion.li
              initial={{ opacity: 0, color: "white" }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              key={index}
              className='grid d:grid-cols-2 d:col-start-1 d:col-span-2 d:items-start gap-5 d:gap-0 pb-24 t:text-lg'
            >
              <div className='grid d:justify-items-end d:mr-40 gap-2'>
                <div className='grid grid-cols-2 d:gap-6 d:text-right text-xl font-bold tracking-widest'>
                  <h2 className='d:order-last t:text-2xl d:3xl'>
                    {" "}
                    {project.name}
                  </h2>
                  <ul className='grid grid-flow-col mr-0 mx-auto gap-2 items-center'>
                    {project.tools.map((tool: any, idx: number) => {
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
                <p className='font-light d:text-right dl:w-5/6 tracking-wide'>
                  {project.description}
                </p>
                <div className='grid grid-cols-2 justify-self-start d:justify-self-end text-center text-xs t:text-sm tracking-widest gap-3'>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${
                      project.name === "Trello Clone" && "hidden"
                    } px-5 py-2 font-semibold hover:font-extrabold bg-red-300 hover:bg-red-100 hover:ring-2 hover:ring-red-300 hover:text-red-300 shadow-lg shadow-red-300 rounded-md`}
                  >
                    LIVE
                  </a>
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${
                      project.name === "Trello Clone" && "col-start-2"
                    } px-5 py-2 font-semibold hover:font-extrabold bg-red-300 hover:bg-red-100 hover:ring-2 hover:ring-red-300 hover:text-red-300 shadow-lg shadow-red-300 rounded-md`}
                  >
                    CODE
                  </a>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <div className='col-span-2 -mb-2'>
                  <Image
                    src={project.screenshots[0]}
                    alt='intro'
                    className='rounded-lg'
                  ></Image>
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
        className='grid d:grid-cols-2 items-start px-10 gap-10 d:gap-0 pb-10 d:pb-20 t:px-20'
      >
        <h1 className='grid gap-28 items-start d:text-right d:mr-36 text-3xl t:text-4xl font-semibold tracking-wide'>
          Get In Touch
        </h1>
        <section className='grid gap-8'>
          <div className='grid gap-3'>
            <h4 className='tracking-widest font-medium'>EMAIL</h4>
            <p className='underline font-extralight tracking-wider'>
              kaixin1528@gmail.com
            </p>
          </div>
          <div className='grid gap-3'>
            <h4 className='tracking-widest font-medium'>PHONE</h4>
            <p className='underline font-extralight tracking-wider'>
              (626) 382-8126
            </p>
          </div>
          <div className='grid gap-3'>
            <h4 className='tracking-widest font-medium'>ELSEWHERE</h4>
            <div className='flex gap-5 items-start'>
              <a
                href='https://github.com/kaixin1528'
                target='_blank'
                rel='noopener noreferrer'
                className='underline font-extralight'
              >
                <Image src={github} alt='Github'></Image>
              </a>
              <a
                href='https://www.linkedin.com/in/kaixin1528'
                target='_blank'
                rel='noopener noreferrer'
                className='underline font-extralight h-8 w-8'
              >
                <Image src={linkedin} alt='LinkedIn'></Image>
              </a>
            </div>
          </div>
        </section>
      </motion.section>
    </main>
  );
}
