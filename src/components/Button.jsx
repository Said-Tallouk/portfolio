import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = ({ styles, text, icon }) => {
  const { isDark } = useContext(ThemeContext);

  const classNames = `py-3 px-4 bg-blue-gradient font-poppins font-medium text-[12px] outline-none ${styles ?? ''} rounded transition-colors duration-300 ${
    isDark ? "text-primary" : "text-white"
  }`;

  return icon ? (
    <button type="button" className={classNames}>
      {React.createElement(icon)}&nbsp;{text}
    </button>
  ) : (
    <button type="button" className={classNames}>
      {text}
    </button>
  );
};

export default Button;