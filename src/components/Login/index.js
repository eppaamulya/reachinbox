import './index.css'
import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';


const clientId = '821797226178-o5adlbqih6cfrvifdfgogcmh6i55koqp.apps.googleusercontent.com';

const Login = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'email',
      }).then(() => {
        console.log("GAPI client initialized successfully.");
      }).catch((error) => {
        console.error("Error initializing GAPI client:", error);
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleLogin = () => {
    const auth = gapi.auth2.getAuthInstance();
    if (auth) {
      auth.signIn({
        prompt: 'select_account', 
      }).then((response) => {
        navigate('/onebox');
      }).catch((error) => {
      });
    }
  };


  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            {isDarkTheme ? (
              <div className='login-container-dark'>
                <header className='header'>
                  <img src='data:image/png;base64,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' alt="logo" className='image'/>
                  <h1 className='header-head'>REACHINBOX</h1>
                </header>
                <hr className='hr-line-dark' /> 
                <div className='body-dark'>
                  <h1 className='body-head'>Create a new account</h1>
                  <button onClick={handleLogin} className='body-button-1-dark'><img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' alt="google" className='img' />Sign Up with Google</button>
                  <button className='body-button-2'>Create an Account</button>
                  <p className='body-para'>Already have an account? <span className='span-dark'>Sign In</span></p>
                </div>
                <footer className='footer-dark'>
                  <p className='footer-para'>© 2023 Reachinbox. All rights reserved.</p>
                </footer>    
              </div>
            ) : (
              <div className='login-container'>
                <header className='header'>
                  <img src='data:image/png;base64,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' alt="logo" className='image'/>
                  <h1 className='header-head'>REACHINBOX</h1>
                </header>
                <hr className='hr-line' /> 
                <div className='body'>
                  <h1 className='body-head'>Create a new account</h1>
                  <button onClick={handleLogin} className='body-button-1'><img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' alt="google" className='img' />Sign Up with Google</button>
                  <button className='body-button-2'>Create an Account</button>
                  <p className='body-para'>Already have an account? <span>Sign In</span></p>
                </div>
                <footer className='footer'>
                  <p className='footer-para'>© 2023 Reachinbox. All rights reserved.</p>
                </footer>    
            </div>
            )}
          </>
        )
      }}
    </AppContext.Consumer>  
  );
};

export default Login;

