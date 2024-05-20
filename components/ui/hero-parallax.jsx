"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ projects }) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const fourthRow = projects.slice(15, 20);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-full py-72 md:py-[410px] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse md:space-x-reverse md:space-x-20 md:mb-20">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.name}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row md:mb-20 md:space-x-20 ">
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.name}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse md:space-x-reverse md:space-x-20 md:mb-20">
          {thirdRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.name}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0">
      <h1 className="text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        {t("hero_title_1")}
        <br /> {t("hero_title_2")} <br />
        <span className="text-primary">{t("hero_title_3")}</span>
      </h1>
      <p className="max-w-2xl text-base md:text-lg mt-8 text-neutral-600 dark:text-neutral-300">
        {t("hero_description")}
      </p>
    </div>
  );
};

export const ProjectCard = ({ project, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.name}
      className="group h-[450px] w-[20rem] md:w-[30rem] relative flex-shrink-0"
    >
      <Link
        className="block md:group-hover:shadow-2xl"
        href={`/projects/${project.slug}`}
        aria-label={`Pamatykite projektą ${project.name}`}
      >
        <Image
          height="600"
          width="600"
          className="object-cover absolute h-52 w-56 md:h-full md:w-full inset-0 rounded"
          alt={project.name}
          src={project.banner}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 md:group-hover:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 md:group-hover:opacity-100 text-white">
        {project.name}
      </h2>
    </motion.div>
  );
};
