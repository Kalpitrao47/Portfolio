import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../Icons/linkedin-square-icon.svg";
import GithubIcon from "../Icons/github-icon.svg";
import LightModeIcon from "../Icons/moon-line-icon.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../utils/ThemeSlice";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const handleTheme = () => {
    console.log("clicked");
    dispatch(themeSelector(!themeSelect));
  };

  const themeSelect = useSelector((store) => store.theme.themes);
  const dispatch = useDispatch();
  
  const bgColorClass =
  themeSelect == true ? "bg-black" : "bg-white";

  return (
    // <div>
      <nav  className={`shadow-lg fixed top-0 right-0 z-50 left-0 ${bgColorClass}`}>
        <div className="flex justify-end">
          <div>
            <ul className="flex p-5">
              <li>
              {/*
            <Link className="text-cyan-500 mr-5 font-medium text-lg  " to="/">*/}
                <AnchorLink className="text-cyan-500 mr-5 font-medium text-lg  " href="#home"> Home</AnchorLink>

                 {/*
                </Link>*/}
              </li>

              <li>
              {/*
            <Link className="text-cyan-500 mr-5 font-medium text-lg  " to="/">*/}
                <AnchorLink className="text-cyan-500 mr-5 font-medium text-lg  " href="#about"> About</AnchorLink>

                 {/*
                </Link>*/}
              </li>
             
              <li>
                
                <AnchorLink className="text-cyan-500 mr-5 font-medium text-lg  " href="#contact"> Contact</AnchorLink>
             
              </li>
              <li>
                
                <AnchorLink className="text-cyan-500 mr-5 font-medium text-lg  " href="#projects"> Projects</AnchorLink>
                
              </li>
            </ul>
          </div>
          <div className="flex p-3">
            <Link
              className=" mr-5 font-medium text-lg text-cyan-500"
              to="https://www.linkedin.com/in/kalpit-raorane-256949188/"
            >
              <img className="h-10 w-10 " src={LinkedInIcon} alt="html logo" />
            </Link>

            <Link
              className=" mr-5 font-medium text-lg text-cyan-500"
              to="https://github.com/Kalpitrao47"
            >
              <GitHubIcon style={{ fontSize: "2.5rem" }}/>{" "}
            </Link>

            <span onClick={handleTheme}>
              <DarkModeIcon
                style={{ fontSize: "2.5rem" }}
                className={themeSelect && "text-white"}
              />
            </span>
          </div>
        </div>
      </nav>
    // </div>
  );
};

export default Header;
