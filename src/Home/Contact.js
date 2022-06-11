import React, { useEffect, useState } from 'react';
import './Contact.css';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import {send} from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css";
import contact from '../img/Contact.png';
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
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);
    return (
        <div>
            <div className="contact component__space" id="Contact">
            <div className="row">
                <div data-aos="zoom-in" className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h2 className="hire__text">Hire Me</h2>
                            <p className="hire__text white">Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+8801741968088</strong> or email <strong>bmabuisa.cse@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <form onSubmit={sendMail}>
                               <input type="text" className="input-contact name" required placeholder="Your name *" onChange={handleName} value={senderName}/>
                               <input type="email" className="input-contact email" required placeholder="Your Email *" onChange={handleEmail} value={senderEmail}/>
                               
                               <textarea name="message" id="message" required placeholder="Write Your message" onChange={handleMessage} value={senderMessage}></textarea>
                               <button className="button contact pointer" type="submit">Send</button>
                           </form>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="col__2 contact-img">
                <img src={contact} alt="" />
                </div>
            </div>

           

        </div>

        <div class="flex flex-row justify-center py-8">
           

              <div   className="fa mr-10 "><a  href="https://www.facebook.com/bmabuisa.cse/"><FaFacebook className='size' /></a></div>
              <div  className="fa mr-10 "><a  href="https://www.linkedin.com/in/abu-isa-09377b168/"><FaLinkedin className='size' /></a></div>
              <div  className=" fa"><a  href="https://github.com/ABU-ISA-BISWAS"><FaGithub className='size' /></a></div>
            
          </div>
        </div>
    )
}

export default Contact
