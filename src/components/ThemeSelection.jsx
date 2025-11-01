import React from "react";
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { said } from "../assets";

const ThemeSelection = ({ onThemeSelect }) => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* En-tête simple et centré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Photo de profil simple */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm"
          >
            <img
              src={said}
              alt="SAID TALLOUK"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Titre simple */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Welcome to my portfolio
          </h1>
          <p className="text-gray-600 text-lg">
            Choose your preferred appearance
          </p>
        </motion.div>

        {/* Cartes de thème minimalistes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {/* Dark Mode - Simple */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onThemeSelect("dark")}
            className="group relative bg-gray-900 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-gray-800"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <BsMoon className="text-2xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Dark
                </h2>
                <p className="text-sm text-gray-400">
                  Easy on the eyes in low light
                </p>
              </div>
            </div>

            {/* Aperçu de la palette */}
            <div className="flex gap-2">
              <div className="flex-1 h-3 bg-gray-800 rounded-full"></div>
              <div className="flex-1 h-3 bg-purple-600 rounded-full"></div>
              <div className="flex-1 h-3 bg-teal-400 rounded-full"></div>
            </div>

            {/* Flèche au hover */}
            <div className="absolute top-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>

          {/* Light Mode - Simple */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onThemeSelect("light")}
            className="group relative bg-white rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-xl border-2 border-gray-200 hover:border-gray-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <BsSun className="text-2xl text-yellow-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  Light
                </h2>
                <p className="text-sm text-gray-600">
                  Bright and clear for daytime
                </p>
              </div>
            </div>

            {/* Aperçu de la palette */}
            <div className="flex gap-2">
              <div className="flex-1 h-3 bg-gray-100 rounded-full"></div>
              <div className="flex-1 h-3 bg-yellow-400 rounded-full"></div>
              <div className="flex-1 h-3 bg-teal-600 rounded-full"></div>
            </div>

            {/* Flèche au hover */}
            <div className="absolute top-8 right-8 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </motion.div>

        {/* Footer simple */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500">
            You can change this later in settings
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeSelection;