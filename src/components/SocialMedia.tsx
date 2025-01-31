import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="  flex items-center justify-center p-4 my-10">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Let's Connect!
        </h2>

        <div className="flex flex-col flex-row gap-8">
          <a
            href="https://github.com/fadjarlfaa16"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 hover:bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-40 group-hover:opacity-60 transition-opacity duration-300 blur-sm group-hover:-inset-2"></div>
            <FaGithub className="w-12 h-12 text-white z-10" />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammadfadjarrr/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 hover:bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 opacity-40 group-hover:opacity-60 transition-opacity duration-300 blur-sm group-hover:-inset-2"></div>
            <FaLinkedin className="w-12 h-12 text-white z-10" />
          </a>

          <a
            href="https://www.instagram.com/fadjaralfaa_/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 hover:bg-gradient-to-r from-pink-600 to-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-600 to-orange-400 opacity-40 group-hover:opacity-60 transition-opacity duration-300 blur-sm group-hover:-inset-2"></div>
            <FaInstagram className="w-12 h-12 text-white z-10" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
