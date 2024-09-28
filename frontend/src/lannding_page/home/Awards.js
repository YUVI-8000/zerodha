import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-6 p-5 col-sm-12'> 
                    <img src='media/images/largestBroker.svg' />
                </div>

                <div className='col-lg-6 p-5 mt-5 col-sm-12'> 
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daiily by trading and investig in : </p>
                   
                    <div className='row'>
                        <div className='col'>
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>

                            <li>
                                <p>Comodity derivatives</p>
                            </li>

                            <li>
                                <p>Currency derivatives</p>
                            </li>
                         </ul>
                        </div>

                        <div className='col'>
                            <ul>
                                <li>
                                <p>Stocks & IPOs</p>
                            </li>

                            <li>
                                <p>Bonds and </p>
                            </li>

                            <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <img src='/media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;