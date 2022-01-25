import React from 'react'
import './style/about.css'
import Image from './image/Vector.png'

const About = () => {
    return(
        <>
        <section className="home">
            <div className="about" id='about'> 
                <img src={Image} alt="" width="140px" className="clouldLeft"/>
                <p className="introduce1">
                    <span style={{fontSize:'85px', color : '#728ED7'}}>Hi There,</span><br/>
                    I’m a <span style={{color : '#728ED7'}}>Student</span> at<br/>
                    BINUS University
                </p>
                <img src={Image} alt="" width="140px" className="clouldRight" />
                <p className="introduce2">
                    My name is <a href='https://drive.google.com/file/d/1G62fpkS6FQ9gM5IwY6vYEYD-jvOVSsY4/view?usp=sharing' style={{textDecoration:'none', color: '#728ED7', fontWeight: 'bold'}}>Andre Christian</a>,<br/>
                    I'm a computer science student at BINUS.
                    
                </p>
                <br/><br/><br/>
                <a href="#personality" style={{
                        color : '#728ED7', 
                        fontSize: '30px', 
                        textDecoration: 'none',
                        marginLeft: '6.5em'
                    }}>
                    <b>Learn more</b><br/>
                    <svg style={{marginLeft: '8.5em'}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.414 10.656c-.781-.781-2.047-.781-2.828 0l-1.586 1.586v-7.242c0-1.105-.896-2-2-2-1.105 0-2 .895-2 2v7.242l-1.586-1.586c-.781-.781-2.047-.781-2.828 0s-.781 2.047 0 2.828l6.414 6.414 6.414-6.414c.781-.781.781-2.046 0-2.828z"></path>
                    </svg>
                </a>
            </div>
        </section>
        </>
    )
}

export default About
