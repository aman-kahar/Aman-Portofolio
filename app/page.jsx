"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fresher</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-yellow-500">AMAN KAHAR</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I have done my bachelor's degree in Computer Science and
              Engineering. I'm a motivated individual with a comprehensive
              understanding of C Programming, C++, Java Core SE, MYSQL also
              skilled in Data Structure and Algorithms with experience in Web
              Development and a dedicated Problem Solver.
            </p>
            {/** btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1OvA6twLyekPtCD2Wf3c9WiZBmFFpBH-r/view?usp=drivesdk"
                download="aman_resume.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center"
                >
                  <span>Download Resume</span>
                  <FiDownload className="ml-2" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-yellow-500 rounded-full flex justify-center items-center text-yellow-500 text-base hover:bg-yellow-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/** photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
