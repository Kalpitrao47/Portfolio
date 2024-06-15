import React, { useEffect, useState } from "react";
// import Skills from "./Skills";
import { ReactTyped } from "react-typed";
import { useDispatch, useSelector } from "react-redux";
// import Welcome from "./Welcome";
// import Dummy from "./Dummy";
import ProfileImage from "../../Icons/WhatsApp Image 2024-06-15 at 12.02.11 PM.jpeg"
import Skills from "../Skills";
import Welcome from "../Welcome";
import R_Welcome from "../../components/Res_components/R_Welcome";


const R_Home = () => {
    const themeSelect = useSelector((store) => store.theme.themes);
    const dispatch = useDispatch();

    const textColorClass = themeSelect == true ? "text-white" : "text-black";
    const bgColorClass = themeSelect == true ? "bg-black" : "bg-white";



    return (
        <>
            <div className="w-[80%] m-auto flex items-center p-10">
                <div>
                    <img src={ProfileImage} className="rounded-full h-96 w-96 mt-24 mr-24 ml-20 object-cover" />
                </div>

                <div>
                    <h1 className={`text-5xl ${textColorClass} mt-4`}>
                        Hi, I'm{" "}
                        <ReactTyped strings={[" Kalpit Raorane", "a Frontend Developer"]} typeSpeed={100} loop />
                    </h1>
                    <div className="flex gap-5">
                    <button className={`rounded-3xl bg-white text-black p-4 mt-4 border border-black ${bgColorClass === 'bg-white' ? 'text-black' : 'text-black'}`}>Download Cv</button>
                    <button className={`rounded-3xl bg-zinc-800 text-white p-4 mt-4 border border-black ${bgColorClass === 'bg-black' ? 'text-white' : 'text-black'}`}>Contact Info</button>
                    </div>
                </div>
                

            </div>
            {/* <Skills /> */}
            <R_Welcome/>
        </>
    );
};

export default R_Home;
