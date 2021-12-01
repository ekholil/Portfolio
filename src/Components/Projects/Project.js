import { CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol } from '@coreui/react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Project = (props) => {
    const {id, name, desc, techs, live, github_client, github_server, images} = props.data
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
        <CCol xs>
        <CCard data-aos="fade-up">
          <CCardImage orientation="top" src={images[0]} />
          <CCardBody style={{backgroundColor:'#2C3E50', color: '#fff'}}>
            <CCardTitle>{name}</CCardTitle>
            <p>{desc}</p>
            <CCardText className="d-flex justify-content-between">
              
              <a className="btn btn-success text-white" href={`/projectdetail/${id}`}>See Details</a>
              <a className="btn btn-success text-white" href={live}>Live link</a>
            </CCardText>
            
          </CCardBody>
          
        </CCard>
      </CCol>
    );
};

export default Project;