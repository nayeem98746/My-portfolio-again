import React from 'react'
import project from './assets/project.jpg'
import './styles/Second.css'

const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>About Me</h1>
            <div className="container-2">
                <div className="image-cont">
                    <img src={project} alt="" />
                </div>

                <div className="text-2">
                    <p>Front-End Developer</p>
                    <p>React js & Nodejs Developer</p>
                    <p>UI & UX Designer</p>
                    <p>MERN Stack Developer sabbir</p>
                   
                </div>
            </div>
        </section>
    )
}

export default Second
