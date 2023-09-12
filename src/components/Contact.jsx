import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/Contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xk7277o', 'template_9jutip5', form.current, 'LPj67QltnK30JGh-S')
            .then((result) => {
                toast.success("Thank you for sent the E-mail !", {
                    position: toast.POSITION.TOP_CENTER
                });

            }, (error) => {
                toast.error("Your E-mail not sent please try again !", {
                    position: toast.POSITION.TOP_LEFT
                });
            });
    };
    return (
        <div id='contact' className='contact-contant' itemID='contact'>
            <ToastContainer />
            <h1 className="contant_title">Contact <span>Me</span></h1>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <div className="contact_container">
                <div className="contact_form">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" required placeholder='Enter Your Name' /><br />
                        <label>Email</label>
                        <input type="email" name="user_email" required placeholder='Enter Your E-mail' /><br />
                        <label>Message</label>
                        <textarea rows={5} cols={30} name="message" required placeholder='Enter Your Message.......'/><br />
                        <input className='submit_button' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
            <ScrollToTop  smooth color="#6f00ff" />
        </div>
    )
}

export default Contact;