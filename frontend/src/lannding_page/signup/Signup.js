import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:5000/register', { email, password });
            alert('User registered!');
            navigate('/'); // Redirect to home page after signup
        } catch (error) {
            console.error("There was an error signing up!", error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container mb-5" id="signup">
          <div className="row mt-5 mb-5 p-3 mr-5">
            <div className="col-lg-6 col-sm-12 mt-5 p-2">
              <img src="media/images/signup.png" alt="Signup Illustration" />
            </div>
    
            <div
              className="col-lg-6 col-sm-12 mt-5 my-5 p-5"
              style={{ alignContent: "center" }}
            >
              <h1>Signup Now</h1>
              <p className="text-muted">Or track your existing application.</p>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              /> <br/>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <br/>
              <button onClick={handleSignup} className='btn btn-dark'>Signup</button>
            </div>
          </div>
        </div>
      );
};

export default Signup;
