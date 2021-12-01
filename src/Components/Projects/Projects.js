import { CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [datas, setDatas] = useState([])
    // const datas = [
    //     {
    //         id:1,
    //         name: 'Cyclemart',
    //         desc: 'A niche Product Ecommerce website. Made with mern stack. ',
    //         techs: ['Node', 'MongoDB', "ReactJS", "ExpressJS", "React-Bootsrap", "Firebase", "Heroku", "REST API"],
    //         live:'https://cyclemart-79076.web.app/',
    //         github_client: 'https://github.com/ekholil/cyclemart_client', 
    //         github_server: 'https://github.com/ekholil/cyclemart-server', 
    //         images: ["https://i.ibb.co/9y1B2YC/Screenshot-1.png", "https://i.ibb.co/K04HVTT/Screenshot-2.png", "https://i.ibb.co/Xts5L6p/Screenshot-3.png"]
    //     }
    // ]
    useEffect(() => {
        fetch(`/datas.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
           .then(res=> res.json())
           .then(data=> setDatas(data))
    }, [])
    return (
        <div style={{backgroundColor:'#2C3E50', height:'100vh'}}>
            <h1 className="text-center pt-4 text-white mx-auto" >My Projects</h1>
            <div className="mx-auto mb-4" style={{borderBottom:'4px solid #28B463', width:'200px', zIndex:'10'}}></div>
            
            <CContainer>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            {
                datas.map(data => <Project key={data.id} data={data} />)
            }
            </CRow>
            </CContainer>
        </div>
    );
};

export default Projects;