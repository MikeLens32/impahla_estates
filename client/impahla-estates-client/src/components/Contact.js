import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import contactBanner from '../assets/pexels-photomix-company-101808.jpg';

function Contact() {

    const [contactInfo, setContactInfo] = useState({
        user: "",
        email: "",
        comment: "",
    })

    const form = useRef()
    
    const sendEmail = e => {
        e.preventDefault();

    emailjs.sendForm('service_trm8u9n', 'template_96w3xuh', form.current, 'ZcdeIv9waAKXWypwP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    }

    function handleUser(e) {
        setContactInfo(e.target.value)
    }

    function handleEmail(e) {
        setContactInfo(e.target.value)
    }
    
    function handleComment(e) {
        setContactInfo(e.target.value)
    }

    return(
        <div className='bg zinc-50'>
            <div className='w-full h-[90vh]'>
                <img className='w-full h-full object-cover'  src={contactBanner} alt='Networking Banner'/>
            </div>
            <div className='flex'>
                <h1 className='mx-auto my-4 font-bold text-6xl'>Contact</h1>
            </div>
            <form className='bg-white border p-4 rounded-xl lg:mx-36 mb-10' ref={form} onSubmit={sendEmail}>
            <label className='text-lg font-light mt-2 my-2'>Full Name</label>
            <input 
            className='bg-blue-100 rounded-md ml-2'
            required type="text"
            name={"user" || contactInfo.user}
            onChange={handleUser}
            value={contactInfo.user}/>
            <label className='text-lg font-light mt-2 my-2'>Email Address</label>
            <input 
            className='bg-blue-100 rounded-md ml-2'
            required type="email"
            name={"email" || contactInfo.email}
            onChange={handleEmail}
            value={contactInfo.email}/>
            <br/>
            <label className='text-lg font-light mt-2 my-2'>Comment</label>
            <br/>
            <textarea 
            className='bg-blue-100 rounded-md ml-2'
            cols="80"
            rows="5"
            required type="text"
            name={"comment" || contactInfo.comment}
            onChange={handleComment}
            value={contactInfo.comment}/>
            <br/>
            <input className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer' type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default Contact