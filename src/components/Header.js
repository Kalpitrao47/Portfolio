import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../Icons/linkedin-square-icon.svg";
import GithubIcon from "../Icons/github-icon.svg";
import LightModeIcon from "../Icons/moon-line-icon.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../utils/ThemeSlice";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const handleTheme = () => {
    console.log("clicked");
    dispatch(themeSelector(!themeSelect));
  };

  const themeSelect = useSelector((store) => store.theme.themes);
  const dispatch = useDispatch();

  return (
    // <div>
      <nav  className="shadow shadow-lg">
        <div className="flex justify-end">
          <div>
            <ul className="flex p-5">
              <li>
                <Link className="mr-5 font-medium text-lg text-gray-400" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" mr-5 font-medium text-lg text-gray-400"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className=" mr-5 font-medium text-lg text-gray-400"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex p-3">
            <Link
              className=" mr-5 font-medium text-lg text-gray-400"
              to="https://www.linkedin.com/in/kalpit-raorane-256949188/"
            >
              <img className="h-10 w-10 " src={LinkedInIcon} alt="html logo" />
            </Link>

            <Link
              className=" mr-5 font-medium text-lg text-gray-400"
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
