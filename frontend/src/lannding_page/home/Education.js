import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
        <div className='row p-5'>

            <div className='col-lg-6 col-sm-12'>
                <img src='media/images/education.svg' style={{width:"70%"}}/>
            </div>

            <div className='col-lg-6 col-sm-12'>
                <h1 className='mb-3 fs-2' >Free and open market education</h1>
                <p>Varsity, the largest online stock maket education book in the world <br/> covering everything from the basics to advanced trading.</p>
                <a href=''style={{textDecoration:"none"}} >Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                <p className='mt-5'>Trading Q&A , the most active trading and investment community in <br/> india for all your market related queries.</p>
                <a href=''style={{textDecoration:"none"}} >Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>

        </div>
    </div>
     );
}

export default Education;
