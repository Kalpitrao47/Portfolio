import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import { ReactTyped } from "react-typed";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./Welcome";


const Home = () => {
  // useEffect(()=>{
  //   getUsderrepo();
  // },[]);

  // const getUsderrepo = async () =>{
  //   const data = await fetch("https://api.github.com/repos/Kalpitrao47/NExtProject");
  //   const res = await data.json();
  //   console.log(res);
  // }

  const themeSelect = useSelector((store) => store.theme.themes);
  const dispatch = useDispatch();

  const textColorClass = themeSelect == true ? "text-cyan-500" : "text-zinc-500";  


  return (
    <div id="home" className=" flex flex-col items-center pt-4 ">
      <div>
        <img
          className="rounded-full h-40 w-40 shadow-lg shadow-zinc-400 mt-20"
          src="https://media.licdn.com/dms/image/C4D03AQG0o6D-aWbSVA/profile-displayphoto-shrink_100_100/0/1656344845426?e=1712188800&amp;v=beta&amp;t=3dGVoQcJOutZuzXC1HxZqmtOmOXhWgUJO-k9XDXn0UM"
          alt="Visit profile for Kalpit Raorane"
        >
        </img>
      </div>
      
      <div className="flex flex-col items-center">
      <h1 className={`text-5xl ${textColorClass} mt-4`}>
      Hi, I'm{" "}
      <ReactTyped strings={ [" Kalpit Raorane", "a Frontend Developer"] } typeSpeed={100} loop />
    </h1>
        <h1 className={`text-3xl text-center w-[80%] ${textColorClass} p-5`}>
          Building Digital Products and Web Apps. Learning Front-End Web Development passionate about creating interactive applications and experiences on the web.
        </h1>
        <h2 className={`text-2xl ${textColorClass} pb-2 text-center`}>
          Reach me about your next idea.
        </h2>
      </div>
      <Skills />
      <Welcome/>
    </div>
  );
};

export default Home;
