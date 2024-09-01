import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white font-bold text-[18px] cursor-pointer">
            Muhammad Abdullah{" "}
            <span className="sm:block hidden">| Hello World!</span>
          </p>
        </Link>
        <ul className="list-none hidden  sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1">

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
