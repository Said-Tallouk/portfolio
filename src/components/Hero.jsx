import { useContext } from "react";
import styles from "../style";
import LetsConnect from "./LetsConnect";
import { aboutMe } from "../constants";
import { said } from "../assets";
import { ThemeContext } from "./ThemeContext";

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} items-center justify-center`}
    >
      {/* Partie gauche (Texte) */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row justify-between items-center w-full transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[80px] leading-[80px]">
            Hi, there!
            <br className="sm:block hidden" />
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[80px] leading-[80px] w-full transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 transition-colors duration-300 ${
          isDark ? "text-dimWhite" : "text-gray-600"
        }`}>
          {aboutMe.intro}
        </p>

        {/* Bouton LetsConnect visible sur mobile */}
        <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
          <LetsConnect />
        </div>
      </div>

      {/* Partie droite (Image) */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={said}
          alt="TALLOUK SAID"
          className={`w-[400px] h-[400px] border-4 rounded-full object-cover shadow-xl transition-all duration-300 hover:scale-105 ${
            isDark ? "border-teal-500" : "border-teal-600"
          }`}
        />
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;