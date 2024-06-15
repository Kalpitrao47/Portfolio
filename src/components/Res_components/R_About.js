import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../../Icons/WhatsApp Image 2024-06-15 at 12.02.11 PM.jpeg";

const R_About = () => {
    const themeSelect = useSelector((store) => store.theme.themes);
    const dispatch = useDispatch();

    const textColorClass =
        themeSelect == true ? "text-white" : "text-black";

    const theme = useSelector((store) => store.theme.themes);
    console.log(theme);


    const bgColorClass =
        themeSelect == true ? "bg-zinc-900" : "bg-white";

    return (
        <div id="about" className={`flex flex-col items-center justify-evenly ${bgColorClass} ${textColorClass}`}>
            <h1 className="text-3xl font-bold mt-20">About</h1>
            {/*<div className="h-full w-full flex justify-center items-center">
        <img
          className={`rounded-full ${textColorClass} shadow-lg shadow-zinc-400 h-40 w-40`}
          src="https://media.licdn.com/dms/image/C4D03AQG0o6D-aWbSVA/profile-displayphoto-shrink_100_100/0/1656344845426?e=1712188800&amp;v=beta&amp;t=3dGVoQcJOutZuzXC1HxZqmtOmOXhWgUJO-k9XDXn0UM"
          alt="Visit profile for Kalpit Raorane"
        ></img>
      </div>*/}
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

export default R_About;
