import { CCard, CCardImage, CCol, CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetail = () => {
    const [project, setProject] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch(`/datas.json`)
           .then(res=> res.json())
           .then(data=> setProject(data))
    }, [])
    const itemid = Number(id)
    const singleItem = project?.find(service => service.id === itemid)
    
    return (
        <div className="container mt-3">
           <h1>Project Name : {singleItem?.name}</h1>
           <p className="fs-4">Description : <br />
           {singleItem?.desc}
           </p>
           <p className="fs-4 mb-2">Technologies used : <br /> {
           singleItem?.techs?.map(tech => <div style={{color:'#fff', backgroundColor:'gray', margin: '10px', display: 'inline-block', padding: '2px 5px', borderRadius:'5px'}}>{tech}</div>)
            }
           </p>
           <p className="fs-4">Main Features : <br /> 
           {
               singleItem?.features.map(item => <li>{item}</li>)
           }
           </p>
           <div className="mb-4" style={{display:'flex', maxWidth: '400px', justifyContent:'space-around'}}>
           <a className="btn btn-success text-white" href={singleItem?.live}>Live Site</a>
           <a className="btn btn-success text-white" href={singleItem?.github_client}>Frontend Code</a>
           {
               singleItem?.github_server? <a className="btn btn-success text-white" href={singleItem?.github_server}>Backend Code</a>: ''
           }
           </div>
           <h3 className="mb-4">ScreenShots :  </h3>

           <CContainer>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
                {
                    singleItem?.images.map(img => {
                        return (
                            <CCol xs>
                            <CCard>
                              <CCardImage orientation="top" src={img} />
                                                  
                            </CCard>
                          </CCol>
                            )
                    })
                }
            </CRow>
            </CContainer>

          
        </div>
    );
};

export default ProjectDetail;