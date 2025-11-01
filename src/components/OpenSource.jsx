import React, { useState, useEffect, useContext } from "react";
import { openSourceContributions } from "../constants";
import { DiGitMerge, DiGitPullRequest } from "react-icons/di";
import { VscIssues } from "react-icons/vsc";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const Contribution = (props) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      className={`flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent ${
        isDark
          ? "border-gray-700 hover:border-teal-500 bg-gray-800"
          : "border-gray-300 hover:shadow-lg bg-white"
      }`}
      whileInView={{ x: [-80, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-start">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[30px] h-[30px] rounded-full mt-2"
        />
        <div className="flex flex-col ml-4">
          <a
            className={`font-poppins font-normal text-[16px] my-1 leading-[24px] transition-colors duration-300 ${
              isDark
                ? "text-white hover:text-teal-200"
                : "text-gray-900 hover:text-teal-600"
            }`}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
          <p
            className={`font-poppins italic font-normal text-[14px] my-1 ${
              isDark ? "text-dimWhite" : "text-gray-600"
            }`}
          >
            {props.organisation}/{props.repo}
          </p>
        </div>
      </div>

      <div
        className={`flex flex-row ${
          props.linesAdded ? "justify-around ml-2" : "ml-10"
        } mt-4`}
      >
        <a
          className={`font-poppins font-normal text-[12px] inline transition-colors duration-300 ${
            isDark ? "text-dimWhite" : "text-gray-600"
          }`}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.type === "pull-request" ? (
            props.status === "merged" ? (
              <DiGitMerge size="1.5rem" className="text-violet-700 inline" />
            ) : (
              <DiGitPullRequest
                size="1.5rem"
                className="text-green-600 inline"
              />
            )
          ) : props.status === "open" ? (
            <VscIssues size="1.5rem" className="text-green-600 inline" />
          ) : (
            <VscIssues size="1.5rem" className="text-violet-700 inline" />
          )}{" "}
          {props.number}
        </a>

        {props.linesAdded ? (
          <p className="font-poppins font-normal text-[14px]">
            <span className="text-green-600">+{props.linesAdded} </span>
            <span className="text-red-700">-{props.linesDeleted}</span>
          </p>
        ) : null}
      </div>
    </motion.div>
  );
};

const OpenSource = () => {
  const { isDark } = useContext(ThemeContext);
  const [contributions, setContributions] = useState([]);
  const [filterContribution, setFilterContribution] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setContributions(openSourceContributions);
    setFilterContribution(openSourceContributions);
  }, []);

  const handleContributionFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      if (item === "All") {
        setFilterContribution(contributions);
      } else {
        setFilterContribution(
          contributions.filter(
            (contribution) => contribution.organisation === item
          )
        );
      }
    }, 500);
  };

  return (
    <section id="openSource">
      <h1
        className={`flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] ss:leading-[80px] leading-[80px] mb-6 transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Certificats
      </h1>

      <div className="container px-2 py-5 mx-auto mb-8">
        <div className="flex items-center justify-center">
          <div
            className={`flex items-center p-1 border rounded-xl ${
              isDark
                ? "border-teal-400"
                : "border-teal-600"
            }`}
          >
            {["All"].map((item, index) => (
              <button
                key={index}
                onClick={() => handleContributionFilter(item)}
                className={`px-2 py-2 text-sm font-medium md:py-3 rounded-xl md:px-6 capitalize transition-colors duration-300 focus:outline-none font-poppins ${
                  activeFilter === item
                    ? "bg-teal-400 text-white"
                    : isDark
                    ? "text-white hover:bg-teal-400"
                    : "text-gray-900 hover:bg-teal-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 justify-center gap-8 mt-8 md:mt-16 md:grid-cols-3 sm:grid-cols-2">
          {filterContribution.map((contribution, index) => (
            <Contribution
              key={contribution.id}
              index={index}
              {...contribution}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
