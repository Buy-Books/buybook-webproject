import React from 'react'
import image from '../assets/About.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about-container '>
    <div className='about-left'>
        <img src={image} alt="" className='image'/>
      
    </div>
    <div className="about-right">
        <h1 
        className='text-2xl text-slate-600 font-medium text-center leading-tight md:text-3xl lg:text-4xl xl:text-6xl md:text-left'>
          Welcome to Buy Books!!</h1>
        <p className='text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left'> 
          Your number one source for all the books.<br/>
         We're dedicated to give you the good quality and a variety of books.</p>
    </div>
    </div>

  )
}

export default About
