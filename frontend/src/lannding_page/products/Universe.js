import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
  const navigate = useNavigate();

  const handleSignUp = () => {
      navigate('/signup'); // Redirect to the sign-up page
  };
    return ( 
        <div className="container mt-5">
        <div className="row text-center">
        <p className='mb-5'>Want to know more about our technology stack? Check out the <a href=''>Zerodha.tech</a>  blog.</p>

          <h1 className='mt-5'>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>

          <div className="col-lg-4 col-6 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" />
            <p className='text-muted text-small' >Thematic inveesting platform that helps you invest in diversified baskets of stocks  on ETFs.</p>
          </div>
  
          <div className="col-lg-4 col-sm-6 p-3 mt-5">
            <img src="media/images/streakLogo.png" style={{width:"40%"}} />
            <p className='text-muted text-small' >Systematic trading platfor that allows you to create and backtest strategies without coding</p>
          </div>

        
          <div className="col-lg-4 col-6 p-3  mt-5">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"40%"}} />
            <p className='text-muted text-small' >Our asset mangement venture that is creating simple and transparent index funds to help you save for your goals</p>
          </div>
  
          <div className="col-lg-4 col-sm-6 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" />
            <p className='text-muted text-small' >Options trading platform that lets you create strategies , analyle positions and examine data points like open interst, FII/DIL and more</p>
          </div>

          <div className="col-lg-4 col-sm-12 p-3 mt-5">
            <img src="media/images/goldenpiLogo.png" />
            <p className='text-muted text-small' >Bonds trading platform</p>
          </div>
  
          <div className="col-lg-4 col-sm-12 p-3 mt-5">
            <img src="media/images/dittoLogo.png" style={{width:"40%"}} />
            <p className='text-muted text-small' >Personalized advice on life and health insurance. No span and no mis-selling.</p>
          </div>
          <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto "}} onClick={handleSignUp}>signup</button>

        </div>
      </div>
     );
}

export default Universe;