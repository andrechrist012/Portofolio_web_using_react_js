import React from 'react'
import './style/project.css'
import Image from './image/project/Untitled.png'
import Image1 from './image/project/Untitled1.png'
import Image2 from './image/project/Untitled2.png'
import Image3 from './image/project/Untitled3.png'
import Image4 from './image/project/Untitled4.png'
import Image5 from './image/project/Untitled5.png'

const Project = () => {

    return(
        <>
            <section id='project'>
                <h1 className="title">Project</h1>
                <div className="gallery">
                    <div className="image">
                        <img src={Image} alt="" />
                        <img src={Image1} alt="" />
                    </div>
                    <div className="image">
                        <img src={Image2} alt="" />
                        <img src={Image3} alt="" />
                    </div>
                    <div className="image">
                        <img src={Image4} alt="" />
                        <img src={Image5} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project