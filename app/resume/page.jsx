"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaCuttlefish,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";

// about data
const about = {
  title: "ABOUT ME",
  description:
    "About Me - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aman Kahar",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8109430065",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/aman-kahar-31072001",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "amankahar594@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Experience - Fresher Searching for Job...",
  items: [
    {
      company: "Demo1",
      position: "Null1",
      duration: "20XX - 20XX",
    },
    {
      company: "Demo2",
      position: "Null2",
      duration: "20XX - 20XX",
    },
    {
      company: "Demo3",
      position: "Null3",
      duration: "20XX - 20XX",
    },
    {
      company: "Demo4",
      position: "Null4",
      duration: "20XX - 20XX",
    },
    {
      company: "Demo5",
      position: "Null5",
      duration: "20XX - 20XX",
    },
    {
      company: "Demo6",
      position: "Null6",
      duration: "20XX - 20XX",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Education - B.Tech - (Computer Science and Engineering)",
  items: [
    {
      institution: "Shri Ram Institution of Technology Jabalpur",
      degree: "Bachelor of Technology | (Computer Science and Engineering)",
      grade: "8.40 CGPA",
      duration: "2019 - 2023",
    },
    {
      institution: "Om Sai Central Public School Sausar",
      degree: "Senior School Certificate Examination | (12th - CBSE Board)",
      grade: "55%",
      duration: "2018 - 2019",
    },
    {
      institution: "Om Sai Central Public School Sausar",
      degree: "Secondary School Examination | (10th - CBSE Board)",
      grade: "9.6 CGPA",
      duration: "2016 - 2017",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
    "Skills - Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla repellat optio, atque tempore eaque incidunt culpa deleniti",
  skillList: [
    {
      icon: <FaJava />,
      name: "JAVA",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JAVASCRIPT",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaCuttlefish />,
      name: "C/C++ Programming",
    },
    {
      icon: <SiMysql />,
      name: "MYSQL",
    },
    {
      icon: <FaDatabase />,
      name: "DATA STRUCTURE & ALGORITHMS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transaction: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/**content */}
          <div className="min-h-[70vh] w-full">
            {/**experience */}
             <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <h1 className="text-3xl font-bold text-amber-300"> "Fresher Searching For Job" </h1>
                {/**
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-amber-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            //dot
                            <span className="w-[6px] h-[6px] square-full bg-amber-300"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                **/}
              </div>
            </TabsContent>
            {/**education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-amber-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[100px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center  gap-3">
                            {/*dot */}
                            <span className="w-[6px] h-[6px] square-full bg-amber-300"></span>
                            <p className=" text-white/60">{item.institution}</p>
                          </div>
                          <div className="flex items-center  gap-3">
                            {/*dot */}
                            <span className="w-[6px] h-[6px] square-full bg-amber-300"></span>
                            <p className="text-white/60">{item.grade}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-yellow-500 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/**about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-amber-500">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
