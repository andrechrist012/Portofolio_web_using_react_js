import React from 'react'
import './style/message.css'
import Image from './image/Vector.png'

const Message = () => {

    const alertMessage = () =>{
        alert('send')
    }

    return (
        <>  
        <section className='form'>
            <section className="formPage" id='message'>
                <img src={Image} alt="" width="140px" className="clouldLeft" />
                <div className="messageForm">                   
                    <p>Send Me a Message</p>
                    <div className="line"></div>
                    <form action="https://formsubmit.co/andrechrist.backup01@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New email from our web"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <div className="left">
                            <input type="text" placeholder="name" required name='name' />
                            <input type="email" placeholder="email" required name='email' />
                        </div>
                        <div className="right">
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Your message" required></textarea>
                            <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                            <button type="submit" className="sendMessage" onClick={alertMessage}>Send</button>
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