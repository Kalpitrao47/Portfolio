import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../../Icons/linkedin-square-icon.svg"
import GithubIcon from "../../Icons/github-icon.svg";
import LightModeIcon from "../../Icons/moon-line-icon.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../../utils/ThemeSlice";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnchorLink from "react-anchor-link-smooth-scroll";

const R_Header = () => {
  const handleTheme = () => {
    console.log("clicked");
    dispatch(themeSelector(!themeSelect));
  };

  const themeSelect = useSelector((store) => store.theme.themes);
  const dispatch = useDispatch();

  const bgColorClass = themeSelect == true ? "bg-black" : "bg-white";

  return (
    // <div>
    <nav className={`fixed top-0 right-0 z-50 left-0 ${bgColorClass}`}>
  <div className="flex justify-end">
    <div>
      <ul className="flex p-5">
        <li>
          <AnchorLink
            className={`font-medium text-lg ${bgColorClass === 'bg-black' ? 'text-amber-700' : 'text-black'} mr-5`}
            href="#home"
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`font-medium text-lg ${bgColorClass === 'bg-black' ? 'text-amber-700' : 'text-black'} mr-5`}
            href="#about"
          >
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`font-medium text-lg ${bgColorClass === 'bg-black' ? 'text-amber-700' : 'text-black'} mr-5`}
            href="#projects"
          >
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`font-medium text-lg ${bgColorClass === 'bg-black' ? 'text-amber-700' : 'text-black'} mr-5`}
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>

    <div className="flex p-3">
      <a
        className={`mr-5 font-medium text-lg ${bgColorClass === 'bg-black' ? 'text-amber-700' : 'text-black'}`}
        href="https://www.linkedin.com/in/kalpit-raorane-256949188/"
      >
        <img className="h-10 w-10 " src={LinkedInIcon} alt="LinkedIn Logo" />
      </a>

      <a
        className={`mr-5 font-medium text-lg ${bgColorClass === 'bg-black' ? 'text-white' : 'text-black'}`}
        href="https://github.com/Kalpitrao47"
      >
        <GitHubIcon style={{ fontSize: "2.5rem" }} />
      </a>

      <span onClick={handleTheme}>
        <DarkModeIcon
          style={{ fontSize: "2.5rem" }}
          className={themeSelect ? 'text-white' : ''}
        />
      </span>
    </div>
  </div>
</nav>

    // </div>
  );
};

export default R_Header;
