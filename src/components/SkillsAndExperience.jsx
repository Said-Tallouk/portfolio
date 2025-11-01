import React, { useContext } from "react";
import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";
import { ThemeContext } from "./ThemeContext";

// Composant SkillIcon
export const SkillIcon = ({ icon, name }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="flex flex-col">
      <span className={`text-[30px] transition-colors duration-300 ${
        isDark ? "text-white hover:text-teal-200" : "text-gray-900 hover:text-teal-600"
      }`}>
        {React.createElement(icon)}
      </span>
      <p className={`font-poppins text-[12px] mt-2 transition-colors duration-300 ${
        isDark ? "text-dimWhite" : "text-gray-600"
      }`}>
        {name}
      </p>
    </div>
  );
};

// Composant SkillCard
const SkillCard = ({ title, items }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={`mt-4 mb-6 border-l mx-4 ${
        isDark ? "border-gray-200 dark:border-gray-700" : "border-gray-300"
      }`}
    >
      <div className={`relative w-3 h-3 rounded-full top-5 right-[6.2px] border ${
        isDark 
          ? "bg-gray-200 dark:border-gray-900 dark:bg-gray-700" 
          : "bg-teal-400 border-gray-300"
      }`}></div>
      <div className="flex flex-row items-center mb-6 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 ml-8">
        {items.map((item, index) => (
          <SkillIcon key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

// Composant Content
const Content = ({ text, link }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <p className={`font-poppins font-normal text-[14px] mt-4 transition-colors duration-300 ${
      isDark ? "text-dimWhite" : "text-gray-700"
    }`}>
      - {text}{" "}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <BsLink45Deg 
            size="1rem" 
            className={`inline transition-colors duration-300 ${
              isDark ? "hover:text-teal-200" : "hover:text-teal-600"
            }`} 
          />
        </a>
      ) : null}
    </p>
  );
};

// Composant ExperienceCard
const ExperienceCard = ({ logo, organisation, positions }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div whileInView={{ y: [-20, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
      <div className="flex flex-row items-center mb-6">
        <img src={logo} alt={organisation} className="w-[52px] h-[52px] rounded-full z-[2]" />
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
          {organisation}
        </h4>
      </div>
      <ol className={`relative border-l ml-6 ${
        isDark ? "border-gray-200 dark:border-gray-700" : "border-gray-300"
      }`}>
        {positions.map((position, index) => (
          <li
            key={`position-${index}`}
            className={`${index === positions.length - 1 ? "mb-0" : "mb-4"} ml-4`}
          >
            <div className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border ${
              isDark
                ? "bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700"
                : "bg-teal-400 border-gray-300"
            }`}></div>
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              isDark ? "text-gray-900 dark:text-white" : "text-gray-900"
            }`}>
              {position.title || ""}
            </h3>
            <time className={`mb-1 text-sm font-normal leading-none transition-colors duration-300 ${
              isDark ? "text-gray-400 dark:text-gray-500" : "text-gray-500"
            }`}>
              {position.duration}
            </time>
            {position.content.map((info, idx) => (
              <Content key={`content-${idx}`} {...info} />
            ))}
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

// Composant principal SkillsAndExperience
const SkillsAndExperience = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="skills" className="mb-12">
      <h1 className={`flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] ss:leading-[80px] leading-[80px] transition-colors duration-300 ${
        isDark ? "text-white" : "text-gray-900"
      }`}>
        Skills & Experience
      </h1>
      <div className={layout.section}>
        {/* Skills */}
        <motion.div className={`ml-2 mb-6 ${layout.sectionInfo}`}>
          {skills.map((skill, index) => (
            <SkillCard key={`skill-${index}`} {...skill} />
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div className="flex flex-1 items-center justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`exp-${index}`} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;