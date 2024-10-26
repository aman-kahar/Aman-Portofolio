"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Demo Technologies",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    href: "",
  },
  {
    num: "02",
    title: "Demo Technologies",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    href: "",
  },
  {
    num: "03",
    title: "Demo Technologies",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    href: "",
  },
  {
    num: "04",
    title: "Demo Technologies",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    href: "",
  },
];

import { motion } from "framer-motion";
import { Contact } from "lucide-react";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[50px] h-[50px] rounded-full bg-white/50 group-hover:bg-amber-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-500 transition-all duration-500">
                  {services.title}
                </h2>
                <p className="text-white/60 ">
                  {services.description}
                  <div className="border-b border-white/20 w-full"></div>
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
