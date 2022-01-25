import React from 'react'
import './style/skill.css'

const Personality = () => {

    return(
        <>
            <section id='skill'>
                <div style={{position: 'relative'}}>
                    <h1 className="title">Skill</h1>
                    <div className='mySkill'>
                        <label>Html & Css</label>
                        <div className='progress'>
                            <div className='myProgress' style={{width:"80%"}}></div>
                        </div>
                    </div>
                    <div className='mySkill'>
                        <label>Bootstrap</label>
                        <div className='progress'>
                            <div className='myProgress' style={{width:"70%"}}></div>
                        </div>
                    </div>
                    <div className='mySkill'>
                        <label>Javascript</label>
                        <div className='progress'>
                            <div className='myProgress' style={{width:"70%"}}></div>
                        </div>
                    </div>
                    <div className='mySkill'>
                        <label>React Js</label>
                        <div className='progress'>
                            <div className='myProgress' style={{width:"60%"}}></div>
                        </div>
                    </div>
                    <div className='mySkill'>
                        <label>Laravel PHP</label>
                        <div className='progress'>
                            <div className='myProgress' style={{width:"70%"}}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Personality