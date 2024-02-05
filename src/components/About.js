import React from "react";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const themeSelect = useSelector((store) => store.theme.themes);
  const dispatch = useDispatch();

  const textColorClass =
    themeSelect == true ? "text-cyan-500" : "text-zinc-500";

  return (
    <div className="flex items-center justify-evenly">
      <div className="h-full w-full ">
        <img
          className="rounded-full"
          src="https://media.licdn.com/dms/image/C4D03AQG0o6D-aWbSVA/profile-displayphoto-shrink_100_100/0/1656344845426?e=1712188800&amp;v=beta&amp;t=3dGVoQcJOutZuzXC1HxZqmtOmOXhWgUJO-k9XDXn0UM"
          alt="Visit profile for Kalpit Raorane"
        ></img>
      </div>
      <div className={`text-2xl text-center w-[80%] ${textColorClass} p-5`}>
        <h1>
          A Frontend Developer from Mumbai. Have strong experience in developing
          UI, and always open to new directions of programming. Dedicated to
          creating and optimizing interactive, user-friendly and feature-rich
          web applications. Exposure to Front-end & Back-end web development,
          UI/UX and Progressive Web Application (PWA) development. Believe that
          continuous learning and belief are the key factors for achieving
          personal and professional success. Have the desire to learn and
          develop something new, as well as adhere to the rule "Good code is
          beautiful code" and try to follow all standards of the modern
          development process.
        </h1>
      </div>
    </div>
  );
};

export default About;
