import React from 'react'
import MyIcon from "../Icons/html-icon.svg"
import CssIcon from "../Icons/css-icon.svg"
import JavscriptIcon from "../Icons/javascript-programming-language-icon.svg"
import ReactIcon from "../Icons/react-js-icon.svg"
import ReduxIcon from "../Icons/redux-icon.svg"
import FirebaseIcon from "../Icons/google-firebase-icon.svg"
import GitIcon from "../Icons/git-icon.svg"
import TailwindIcon from "../Icons/tailwind-css-icon.svg"
import BootstarpIcon from "../Icons/bootstrap-5-logo-icon.svg"




const Skills = () => {
  return (
    <div>
      <h1 className='text-gray-400 text-center p-5 text-xl'>Skills</h1>
      <div className='flex text-gray-400 justify-center gap-10 shadow-md shadow-zinc-500 mb-5  py-5 items-center w-fit px-5 m-auto rounded-full'>
      <img className='h-20 w-20 ' src={MyIcon} alt='html logo'/>
      <img className='h-20 w-20' src={CssIcon} alt='css logo'/>
      <img className='h-20 w-20' src={JavscriptIcon} alt='Javascript logo'/>
      <img className='h-20 w-20' src={ReactIcon} alt='React logo'/>
      <img className='h-20 w-20' src={ReduxIcon} alt='Redux logo'/>
      <img className='h-20 w-20' src={FirebaseIcon} alt='firebase logo'/>
      <img className='h-20 w-20' src={GitIcon} alt='git logo'/>
      <img className='h-20 w-20' src={TailwindIcon} alt='tailwind logo'/>
      <img className='h-20 w-20' src={BootstarpIcon} alt='bootstrap logo'/>

      </div>
    </div>
  )
}

export default Skills