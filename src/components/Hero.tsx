import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profiles from "../assets/me.jpg";
import TypeEffect from "./TypedEffect";

const Profile = () => (
  <div className="">
    <img
      src={Profiles}
      alt=""
      className="w-65 h-65 object-cover rounded-full mx-auto border-4 border-emerald-50"
    />
  </div>
);

const NameCard = () => (
  <div className="mx-auto text-[#fffed1] mt-5">
    <div className="mx-auto">
      <h1 className="text-xl text-center mt-5">Hello there! I am</h1>
      <h1 className="text-4xl text-center font-bold mt-3">
        Muhammad Fadjar Al Farisyi{" "}
      </h1>
      <h1 className="text-3xl mt-3 text-center font-mono">
        <TypeEffect></TypeEffect>
      </h1>
    </div>
    <hr className="w-[90vw] mt-10 mx-auto"></hr>
  </div>
);

const About = () => {
  const [currentDescription, setCurrentDescription] = useState(0);

  const descriptions = [
    <>
      Nowadays I'm pursuing my education in Bachelor's program on Computer
      Science majoring in Information Technology and currently in my 6th
      semester. I'm passionate about Software Engineering, design, and user
      experience approaches. As a college student, I've been involved in various
      practices, courses, competitions, and projects related to programming and
      software engineering.
    </>,
    <>
      With a leadership mindset and critical thinking, I enjoy leading teams to
      create new digital innovations that can have a beneficial impact on people
      in need. Over my 1 year of experience in Software Development, I've worked
      with various tech stacks including
      <span className="text-red-500"> Laravel</span>,{" "}
      <span className="text-blue-500">React</span>,{" "}
      <span className="text-green-600">Node.js</span>, and{" "}
      <span className="text-yellow-200">Express.js</span>.
    </>,
    <>
      My technical expertise spans across multiple frameworks and technologies
      including
      <span className="text-violet-600"> Kotlin</span>,{" "}
      <span className="text-blue-200">Flutter</span>, and modern web development
      tools. I'm continuously learning and expanding my skill set to stay
      updated with the latest industry trends and best practices in software
      development.
    </>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription((prev) => (prev + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto text-white relative min-h-[300px]">
      <div className="mx-[6%] mt-5 text-lg font-bold">
        <h2>Personal Description: </h2>
      </div>

      <div className="mx-[6%] mt-4 relative h-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-justify absolute w-full"
          >
            <p className="leading-relaxed">
              {descriptions[currentDescription]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {descriptions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentDescription(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentDescription ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => (
  <div className="mt-20">
    <Profile></Profile>
    <NameCard></NameCard>
    <About></About>
  </div>
);
export default Hero;
