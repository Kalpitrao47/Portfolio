import React from "react";
import Netflix from "../Icons/Netflix.png";
import Youtube from "../Icons/Youtube.png";

import { useDispatch, useSelector } from "react-redux";

const Projects = () => {
  const themeSelect = useSelector((store) => store.theme.themes);
  const dispatch = useDispatch();

  const textColorClass =
    themeSelect == true ? "text-cyan-500" : "text-zinc-500";

  const theme = useSelector((store) => store.theme.themes);
  console.log(theme);

  const bgColorClass = themeSelect == true ? "bg-zinc-900" : "bg-white";

  return (
    <div
      id="projects"
      className={`flex flex-col justify-center items-center ${bgColorClass} ${textColorClass}`}
    >
      <h1 className="text-3xl font-bold mt-20">Projects</h1>
      <a
        href="#"
        class="flex flex-col mt-20 mr-32 items-center bg-zinc-900 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-fit md:h-auto md:w-fit md:rounded-none md:rounded-s-lg"
          src={Netflix}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5
            class={`mb-2 text-2xl font-bold tracking-tight ${textColorClass} dark:text-white`}
          >
            Netflix GPT
          </h5>
          <h5
            class={`mb-2 text-xl font-bold tracking-tight ${textColorClass} dark:text-white`}
          >
            Technologies Used: Html,Css,Javascript,React.js,Tailwind
            Css,FireBase.
          </h5>
          <p
            class={`mb-2 text-sm font-normal tracking-tight ${textColorClass} dark:text-white`}
          >
            Developed and maintain a scalable,performant, fast-loading streaming
            platform like Netflix.
          </p>
          <p
            class={`mb-2 text-sm font-normal tracking-tight ${textColorClass} dark:text-white`}
          >
            Strategically implemented Webpack bundler, leading to a remarkable
            boost in response time.
          </p>
          <p
            class={`mb-2 text-sm font-normal tracking-tight ${textColorClass} dark:text-white`}
          >
            Boosts User experience by using memoization, code splitting and
            reusable component.
          </p>

          <p
            class={`mb-2 text-sm font-normal tracking-tight ${textColorClass} dark:text-white`}
          >
            Craft secure and seamless Authentication services by using Firebase.
          </p>

          <p
            class={`mb-2 text-sm font-normal tracking-tight ${textColorClass} dark:text-white`}
          >
            Smart Search with OpenAI forintelligent movie searches based on the
            keywords you type.
          </p>

          <div className="flex">
            <div>
              <a
                href="https://netflix-ni069o0ev-kalpit-raoranes-projects.vercel.app/browse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border rounded-lg p-2 mr-2">
                  Live Demo
                </button>
              </a>
              <a
                href="https://react-youtube-eta-pearl.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border rounded-lg p-2 mr-2">
                  Github Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </a>

      <a
        href="#"
        class="flex flex-col  mt-20 mr-32 items-center bg-zinc-900 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-fit md:h-auto md:w-fit md:rounded-none md:rounded-s-lg"
          src={Youtube}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5
            class={`mb-2 ${textColorClass} text-2xl font-bold tracking-tight dark:text-white`}
          >
            Youtube Web App
          </h5>
          <h5
            class={`mb-2 text-xl font-bold tracking-tight ${textColorClass} dark:text-white`}
          >
            Technologies Used: Html,Css,Javascript,React.js,Tailwind Css.
          </h5>
          <p class={`mb-3 font-normal ${textColorClass} dark:text-gray-400`}>
            Executed a YouTube Clone, the video-sharing platform integrating
            real-time updates using Redux-Toolkit.
          </p>
          <p class={`mb-3 font-normal ${textColorClass} dark:text-gray-400`}>
            It offers live chat demo using the concept of API polling and the
            ability to watch videos.
          </p>
          <p class={`mb-3 font-normal ${textColorClass} dark:text-gray-400`}>
            It implements efficient search autocomplete using debouncing,
            providing real-time suggestions.
          </p>

          <div className="flex">
            <button className="border rounded-lg p-2 mr-2">Live Demo</button>
            <button className="border rounded-lg p-2 mr-2">Github Link</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
