// GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onLoginSuccess, onLoginFailure }) => {
  const clientId = '107844043984-46****************7cu78clho5m1.apps.googleusercontent.com'; 
  //used astriks to maintain privacy and security.

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
