import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md"; // Icône professionnelle de contact

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6 py-10">
    <div className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4`}>
      
      {/* Partie gauche : texte et boutons */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5">
          {aboutMe.tagLine}
        </p>

        {/* Réseaux sociaux */}
        <div className="flex flex-row mt-4">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        {/* Boutons CV et GitHub */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <a href={resumeLink} target="_blank" rel="noreferrer">
            <Button styles="mt-2" text="Download CV" icon={AiFillGithub} />
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer">
            <Button styles="mt-2" text="GitHub Repo" icon={AiFillGithub} />
          </a>
        </div>
      </div>

      {/* Partie droite : illustration + call-to-action */}
      <div className="md:ml-auto mt-10 md:mt-0 flex flex-col justify-center items-center text-center">
        {/* Icône professionnelle de contact avec sticker */}
        <div className="bg-teal-500 p-6 rounded-full mb-2 shadow-lg relative">
          <MdOutlineContactMail className="text-white w-12 h-12" />
          {/* Sticker emoji */}
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full shadow-md animate-bounce">
            🎉
          </span>
        </div>

        <h3 className="text-white font-semibold text-lg mb-2">Let's connect!</h3>
        <p className="text-dimWhite max-w-[250px] mb-4">
          Reach out for projects, collaborations, or just a friendly hello.
        </p>
        <a
          href="#contactMe"
          className="bg-teal-400 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-teal-500 transition"
        >
          Contact Me
        </a>
      </div>

    </div>

    {/* Footer bas */}
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm mt-10 pb-4">
      <p>Made with ❤️ by TALLOUK SAID</p>
    </div>
  </footer>
);

export default Footer;
