import React, { useState } from 'react'
import './style/message.css'
import Image from './image/Vector.png'

const Message = () => {
    const initialState = {
        name : '',
        email : '',
        description : ''
    }

    const [input, setInput] = useState({...initialState})

    const handleChange = (event) => {
        const value = event.target.value
        const typeOfInput = event.target.name
        setInput({...input, [typeOfInput] : value})
    }

    const handleSumbit = () => {
        if(input.name === '' || input.email === '' || input.description === ''){
            return false
        }
        else if (input){
            alert('message send')
            return true
        }
    }

    return (
        <>  
        <section className='form'>
            <section className="formPage" id='message'>
                <img src={Image} alt="" width="140px" className="clouldLeft" />
                <div className="messageForm">                   
                    <p>Send Me a Message</p>
                    <div className="line"></div>
                    <form action="https://formsubmit.co/andrechrist.p06@gmail.com" method="POST" >
                        <input type="hidden" name="_subject" value="New email from Your website"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <div className="left">
                            <input type="text" placeholder="name" required name='name' value={input.name} onChange={handleChange} />
                            <input type="email" placeholder="email" required name='email' value={input.email} onChange={handleChange} />
                        </div>
                        <div className="right">
                            <textarea name="description" id="" cols="30" rows="10" placeholder="message" required value={input.description} onChange={handleChange}></textarea>
                            <input type="hidden" name="_next" value="https://andre-christian.netlify.app/"></input>
                            <button type="submit" className="sendMessage" onClick={handleSumbit}>Send</button>
                        </div>
                    </form>
                </div>
                <img src={Image} alt="" width="140px" className="clouldRight" />
            </section>
        </section>
        </>
    )
}

export default Message
