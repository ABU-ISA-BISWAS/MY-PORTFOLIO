import React, { useState } from 'react';
import './Contact.css';
import contactImg from "./img/about.jpg";
import {send} from 'emailjs-com';
function Contact() {
    const [senderName,setSenderName]=useState('');
    const [senderEmail,setSenderEmail]=useState('');
   
    const [senderMessage,setSenderMessage]=useState('');
    const handleName =(e) =>{
        setSenderName(e.target.value)
    }
    const handleEmail =(e) =>{
        setSenderEmail(e.target.value)
    }
   
    const handleMessage =(e) =>{
        setSenderMessage(e.target.value)
    }
    const sendMail =(e)=>{
        e.preventDefault();
        send(
            'service_jaamhdm',
            'template_ttnqpbr',
            {senderName,senderEmail,senderMessage},
            'aWkavuwkqUO9pWmxo'
        )
        .then((response)=>{
            console.log('success',response.status,response.text)
        })
        .catch((err) => {
            console.log('faield',err)
        }) 
        setSenderName('');
        setSenderEmail('');
        setSenderMessage('');
    }
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                            <p className="hire__text white">Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+8801741968088</strong> or email <strong>bmabuisa.cse@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <form onSubmit={sendMail}>
                               <input type="text" className="contact name" required placeholder="Your name *" onChange={handleName} value={senderName}/>
                               <input type="email" className="contact email" required placeholder="Your Email *" onChange={handleEmail} value={senderEmail}/>
                               
                               <textarea name="message" id="message" required placeholder="Write Your message" onChange={handleMessage} value={senderMessage}></textarea>
                               <button className="button contact pointer" type="submit">Send</button>
                           </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
