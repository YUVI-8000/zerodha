import React from 'react';

function Team() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 mb-5 border-top'>
            <h1 className='text-center mt-5 '>
               People
            </h1>
        </div>

        <div className='row p-5 mt-5 text-muted text-center' style={{lineHeight:"1.8",fontSize:"1.2em"}}>
            <div className='col-lg-6 col-sm-12 p-5'>
               <img src='/media/images/yu.JPEG' style={{borderRadius:"100%",width:"60%"}} />
               <h4 className='mt-5'>Yuvraj singh</h4>
               <h6>Creator</h6>
            </div>
            <div className='col-lg-6 col-sm-12 p-5'>
                <p>Yuvraj has experience in both front-end and back-end development, with a focus on creating interactive and user-friendly applications.</p>
                <p>His expertise extends to data analysis, where he applies advanced methodologies to extract valuable insights and drive decision-making.</p>
                <p>Yuvraj's profile highlights his commitment to continuous learning and his active engagement in relevant projects and courses.</p>
            </div>
        </div>
   </div>
     );
}

export default Team;