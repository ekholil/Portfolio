import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ImLocation, ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r5jsgdl', 'template_64cabir', form.current, 'user_RIZyWThHzf2HjC8U57uvt')
      .then((result) => {
          if(result.text == 'OK'){
            alert('Thank you. We received your message')
            console.log(form.current)
          }
      }, (error) => {
          console.log(error.text);
      });
  };
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <div style={{minHeight:'70vh'}} className="container mb-5">
     <div className="row">
       <div data-aos="fade-right" className="col-md-6 d-flex align-items-center">
         <div className="d-flex flex-column">
          <h1> <ImLocation /> Dhaka, Bangladesh</h1>
          <h1> <ImPhone /> +880 1641739025</h1>
          <h1> <MdEmail /> ikholil.bd@gmail.com</h1>
         </div>
       </div>
       <div data-aos="fade-left" className="col-md-6">
       <form ref={form} onSubmit={sendEmail}>
        <h1 className="text-success text-center mt-4">Contact With me</h1>
      <label>Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label>Email</label>
      <input className="form-control" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="form-control" name="message" /> <br />
      <input className="form-control text-white btn btn-success" type="submit" value="Send" />
    </form>
       </div>
     </div>
    </div>
  );
};

export default Contact;
