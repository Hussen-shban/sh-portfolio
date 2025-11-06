
"use client"

import { Link } from "react-scroll";

const Button = ({ text, className, id }) => {
  return (
    <Link
      to="Project"
      spy={true}
      smooth={true}
      offset={0}
      duration={100}
      className={`${className ?? ""} cta-wrapper cursor-pointer`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </Link>
  );
};

export default Button;