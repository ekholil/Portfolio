import React from 'react';

const Blog = () => {
    return (
        <div>
            <div style={{backgroundColor:'#2C3E50'}}>
            <h1 className="text-center pt-4 text-white mx-auto" >Blogs</h1>
            <div className="mx-auto pb-4" style={{borderBottom:'4px solid #28B463', width:'200px', zIndex:'10'}}></div>
            </div>
            <div style={{height:'90vh', backgroundColor:'#2C3E50', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center',color:'#fff'}}>
            <h1 className="fs-1">Blog is Coming soon</h1>
            <p>Here is all my blogs about web technologies</p>
        </div>
        </div>
    );
};

export default Blog;
