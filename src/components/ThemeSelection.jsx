// src/components/ThemeSelection.jsx
import React from "react";
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { said } from "../assets";

const ThemeSelection = ({ onThemeSelect }) => {  // ✅ Ajout de la prop
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl"
          >
            <img src={said} alt="SAID TALLOUK" className="w-full h-full object-cover" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome! 👋
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Choose your preferred theme to continue
          </p>
        </motion.div>

        {/* Theme Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Dark Mode */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onThemeSelect("dark")}  // ✅ Utilisation de onThemeSelect
            className="cursor-pointer group"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-teal-400 transition-all duration-300 shadow-2xl h-full">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-shadow duration-300"
                >
                  <BsMoon className="text-5xl text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-4">Dark Mode</h2>
                <p className="text-gray-300 mb-6">
                  Elegant and modern, perfect for late-night coding sessions
                </p>

                <div className="flex gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-600"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                  <div className="w-8 h-8 rounded-full bg-teal-400"></div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Choose Dark
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Light Mode */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onThemeSelect("light")}  // ✅ Utilisation de onThemeSelect
            className="cursor-pointer group"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-teal-600 transition-all duration-300 shadow-2xl h-full">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-yellow-500/50 transition-shadow duration-300"
                >
                  <BsSun className="text-5xl text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">Light Mode</h2>
                <p className="text-gray-600 mb-6">
                  Clean and bright, ideal for daytime productivity
                </p>

                <div className="flex gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                  <div className="w-8 h-8 rounded-full bg-teal-600"></div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                >
                  Choose Light
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-gray-400 mt-12 text-sm"
        >
          Don't worry, you can change this anytime from the settings
        </motion.p>
      </div>
    </div>
  );
};

export default ThemeSelection;