import React, { useEffect } from "react";
import Skills from "./Skills";

const Home = () => {
  // useEffect(()=>{
  //   getUsderrepo();
  // },[]);

  // const getUsderrepo = async () =>{
  //   const data = await fetch("https://api.github.com/repos/Kalpitrao47/NExtProject");
  //   const res = await data.json();
  //   console.log(res);
  // }

  return (
    <div className=" flex flex-col items-center overflow-y-hidden pt-4">
      <div>
        <img className="rounded-full shadow-lg shadow-zinc-400"
          src="https://media.licdn.com/dms/image/C4D03AQG0o6D-aWbSVA/profile-displayphoto-shrink_100_100/0/1656344845426?e=1712188800&amp;v=beta&amp;t=3dGVoQcJOutZuzXC1HxZqmtOmOXhWgUJO-k9XDXn0UM"
          alt="Visit profile for Kalpit Raorane"
        ></img>
      </div>
      <div className="flex">
        <h1 className="text-gray-400 mt-5">Hi,I'm Kalpit Raorane </h1>{" "}
        <img
          className="w-6 h-6 mt-5 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPz5mjqHOnb0-AGSahs1RPIdCiZJN519SzrWIMib_66Q&s"
        />
      </div>
      <div>
        <h1 className="text-6xl text-gray-400 p-10">Building Digital Products and Web Apps.</h1>
        <h2 className="text-6xl text-gray-400 pb-2 text-center">Reach me about
        your next idea.</h2>
      </div>
      <Skills/>
    </div>
    
  );
};

export default Home;
