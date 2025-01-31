import { motion } from "framer-motion";

interface Experience {
  company: string;
  year: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Google Developer Student Club Telkom University",
    year: "2023 - Present",
    description:
      "Gathering all Telkom University students who have a strong interest in information technology and carrying out training bootcamps related to Web and software development",
  },
  {
    company: "Microsoft Representative Telkom University 2023",
    year: "November, 2023",
    description:
      "Be a representative of Microsoft in Telkom University, and also be a part of Microsoft Student Accelerator Program",
  },
  {
    company: "Chevalier Laboratory Telkom University",
    year: "2023",
    description:
      "Learn many things with Android Studio with kotlin to develop an android app",
  },
];

const Experience = () => (
  <div className=" min-h-screen flex items-center justify-center p-6">
    <div className="w-full max-w-5xl">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg border border-gray-700 transition-all"
          >
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-sm text-gray-400">{exp.year}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
