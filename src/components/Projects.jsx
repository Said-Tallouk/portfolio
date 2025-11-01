import React, { useContext } from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const Project = (props) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      className={`px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group feature-card ${
        isDark
          ? "dark:border-gray-700 dark:hover:border-transparent"
          : "border-gray-300 hover:shadow-lg bg-white"
      }`}
      whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt=""
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className={`text-xl font-semibold font-poppins capitalize md:text-2xl text-gradient transition-colors duration-300 ${
            isDark ? "group-hover:text-white" : "text-gray-700 group-hover:text-teal-600"
          }`}>
            {props.title}
          </h1>
          <p className={`font-poppins font-normal mt-3 ${
            isDark ? "text-dimWhite" : "text-gray-600"
          }`}>
            Tech Stack
          </p>
          <p className={`mt-2 capitalize transition-colors duration-300 ${
            isDark ? "text-gray-500 dark:text-gray-300 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"
          }`}>
            <div className="flex sm:flex-row">
              {props.stack.map((tech, index) => (
                <div
                  key={tech.id || `tech-${index}`}
                  className={`mr-5 text-[20px] tooltip transition-colors duration-300 ${
                    isDark ? "text-dimWhite hover:text-teal-200" : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {React.createElement(tech.icon)}
                  <span className="tooltiptext">{tech.name}</span>
                </div>
              ))}
            </div>
          </p>
        </div>
      </div>

      <p className={`mt-8 font-poppins transition-colors duration-300 ${
        isDark ? "text-gray-500 dark:text-gray-300 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"
      }`}>
        {props.content}
      </p>

      <div className="flex mt-4 -mx-2">
        {props.github ? (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub
              size="2rem"
              className={`mr-1 transition-colors duration-300 ${
                isDark ? "text-white hover:text-teal-200" : "text-gray-900 hover:text-teal-600"
              }`}
            />
          </a>
        ) : null}
        {props.link ? (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg
              size="2rem"
              className={`transition-colors duration-300 ${
                isDark ? "text-white hover:text-teal-200" : "text-gray-900 hover:text-teal-600"
              }`}
            />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="projects">
      <h1 className={`flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] ss:leading-[80px] leading-[80px] transition-colors duration-300 ${
        isDark ? "text-white" : "text-gray-900"
      }`}>
        Projects
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;