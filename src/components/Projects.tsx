import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Github } from "lucide-react";
import Legalhelp1 from "../assets//legalhelp1.png";
import Legalhelp2 from "../assets//legalhelp2.png";
import Legalhelp3 from "../assets//legalhelp3.png";
import Asl1 from "../assets//asl.png";
import Asl2 from "../assets//asl1.png";
import Asl3 from "../assets//asl2.png";
import Eco1 from "../assets//EcoTour1.png";
import Eco2 from "../assets//EcoTour1.png";
import Eco3 from "../assets//EcoTour1.png";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  date: string;
  images: string[];
  githubUrl?: string;
  vercelUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Legalhelp",
    description:
      "an application that provides legal consultants using three roles, namely Admin, Consultant and Ordinary User. This application can post, read articles and make consultant reservations. This application is available in two versions, namely Laravel backend and Java backend but uses the same frontend",
    techStack: ["Laravel", "MySQL", "Tailwind", "Bootstrap", "Java Native"],
    date: "December 20, 2024",
    images: [Legalhelp1, Legalhelp2, Legalhelp3],
    githubUrl: "https://github.com/fadjarlfaa16/LegalHelpwithLaravel.git",
  },
  {
    id: 2,
    title: "ASL Detections",
    description:
      "Integrating a roboflow API's that can detect American sign Language with Live Cam",
    techStack: ["Typescript", "React", "Node.js"],
    date: "December 28, 2024",
    images: [Asl1, Asl2, Asl3],
    githubUrl: "https://github.com/fadjarlfaa16/ASL-Detections.git",
  },
  {
    id: 3,
    title: "Eco Tour Indonesia",
    description:
      "An app which can reduce emmisions by providing eco-friendly tour guide",
    techStack: ["Flutter"],
    date: "March 28, 2024",
    images: [Eco1, Eco2, Eco3],
    githubUrl: "https://github.com/fadjarlfaa16/EcoTour-Indonesia-main",
  },
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="py-5 px-10 text-white">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        My Projects
      </h2>
      {/* Project list */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group cursor-pointer flex-[1_1_300px] max-w-[400px] min-w-[300px] "
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={project.images[0]}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out"
                alt={project.title}
              />
            </div>
            <div className="mt-4 p-4 bg-gray-900 text-white rounded-lg min-h-[230px]">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-2 max-h-20 overflow-y-auto">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-700 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">{project.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed z-100 inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full relative flex flex-col items-center max-h-[90vh]">
              <button
                className="absolute top-[-3%] right-[-2%] z-5 text-white bg-red-500 p-2 rounded-full flex items-center justify-center"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
                <button
                  className="absolute left-4 bg-gray-700 p-3 rounded-full z-10 flex items-center justify-center"
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev > 0 ? prev - 1 : selectedProject.images.length - 1
                    )
                  }
                >
                  <ArrowLeft size={24} />
                </button>
                <motion.img
                  src={selectedProject.images[currentImageIndex]}
                  className="w-full h-full object-cover rounded-xl"
                  alt={selectedProject.title}
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
                <button
                  className="absolute right-4 bg-gray-700 p-3 rounded-full z-10 flex items-center justify-center"
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % selectedProject.images.length
                    )
                  }
                >
                  <ArrowRight size={24} />
                </button>
              </div>
              <div className="w-full mt-4">
                <h2 className="text-2xl font-bold mt-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 mt-2 text-center">
                  {selectedProject.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-700 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {selectedProject.date}
              </p>
              <div className="flex ">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-5 mt-4 lg:px-4 md:px-2 sm:px-2 py-2  bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
