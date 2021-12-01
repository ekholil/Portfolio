import { CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';
import aboutImg from './about_bg.jpg'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
    
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
        <div style={{backgroundColor:'#2C3E50', height:'100vh'}}>
            <h1 className="text-center pt-4 text-white mx-auto" >About Me</h1>
            <div className="mx-auto mb-4" style={{borderBottom:'4px solid #28B463', width:'200px', zIndex:'10'}}></div>
            <CContainer>
                <CRow>
                    <CCol data-aos="fade-right" md={6} sm={12}>
                        <img className="img-fluid" src={aboutImg} alt="" />
                    </CCol>
                    <CCol data-aos="fade-left" md={6} sm={12} className="about">
                        <p className="fs-5 text-white">I am a Passionate frontend developer.I am ready to take a challenging role as a Front End Web Developer in a highly technical company where I could utilize my skills. I can learn new technology quickly. I have designed and developed several websites using HTML, CSS, Bootstrap5, JavaScript, React, React Router, React Bootstrap, NodeJs, ExpressJs.</p>
                        <a className="about-resume" href="../Hero/Ibrahim Kholilullah - Resume.pdf" download>Download Resume</a> <br />
                        <a className="about-contact" href="/contact">Contact me</a>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default About;