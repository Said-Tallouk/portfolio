import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import ThemeSelection from "./components/ThemeSelection";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  ExtraCurricular,
  Footer,
  OpenSource,
  Projects,
  BlogPosts,
} from "./components";

// 🌙 Contenu principal du portfolio
const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full overflow-hidden min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-primary text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        initial={{ x: -100, opacity: 0.25 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Hero Section */}
        <div
          className={`${
            theme === "dark" ? "bg-primary" : "bg-gray-50"
          } ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        {/* Contenu principal */}
        <div
          className={`${
            theme === "dark" ? "bg-primary" : "bg-gray-50"
          } ${styles.flexCenter} ${styles.paddingX}`}
        >
          <div className={`${styles.boxWidth}`}>
            <SkillsAndExperience />
            <Education />
            <Projects />
            <BlogPosts enabled={false} />
            <OpenSource />
            <ExtraCurricular />
          </div>
        </div>

        {/* Pied de page */}
        <Footer />
      </motion.section>
    </div>
  );
};

// 🌞 Composant principal
const App = () => {
  const [showThemeSelection, setShowThemeSelection] = useState(true);

  return (
    <ThemeProvider>
      {showThemeSelection ? (
        <ThemeSelectionWrapper setShowThemeSelection={setShowThemeSelection} />
      ) : (
        <MainContent />
      )}
    </ThemeProvider>
  );
};

// 🌗 Gère la sélection du thème
const ThemeSelectionWrapper = ({ setShowThemeSelection }) => {
  const { selectTheme } = useContext(ThemeContext);

  const handleThemeSelect = (theme) => {
    selectTheme(theme);
    setTimeout(() => setShowThemeSelection(false), 500);
  };

  return <ThemeSelection onThemeSelect={handleThemeSelect} />;
};

export default App;
