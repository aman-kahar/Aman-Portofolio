"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUp, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "ApnaRoom",
    description:
      "ApnaRoom is a web application that provides a platform where one can book or place rooms for rent for a prolonged period. Also, users can lend the room or also search for the room at the same time without any difficulty.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JAVASCRIPT" },
      { name: "JSP" },
      { name: "MYSQL" },
    ],
    image: "/assets/work/ApnaRoom.png",
    live: "",
    github: "https://github.com/aman-kahar/ApnaRoom-College-Minor-Project-",
  },
  {
    num: "02",
    category: "Web Development",
    title: "Code Sync Editor",
    description:
      "Code Sync Editor is a platform where multiple numbers of members can sync their codes in real time.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JAVASCRIPT" },
      { name: "React.js" },
    ],
    image: "/assets/work/CodeSyncEditor.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Desktop Application",
    title: "Fees Management System",
    description:
      "Fees Management System is a desktop application with specialized majorities in the field of Fees management. Allow to admin to include the information of Courses and Fees details. Allow Students to check, modify the information, and print data, and verify the information.",
    stack: [{ name: "JAVA" }, { name: "SWINGS" }, { name: "MYSQL" }],
    image: "/assets/work/FeesManagementSystem.png",
    live: "",
    github: "https://github.com/aman-kahar/Fees_Management_System-College-Major-Project",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex felx-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/** outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/** project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-500 transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/** project description and category */}
              <p className="text-white/60">{project.category}</p>
              <p className="text-white/60">{project.description}</p>
              {/** stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-yellow-500">
                      {item.name}
                      {/** removing last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/** border */}
              <div className="border border-white/20"></div>
              {/** buttons */}
              <div className="flex items-center gap-4">
                {/** live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-yellow-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/** github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-yellow-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/** overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/** Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/** slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-amber-500 hover:bg-yellow-500 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
