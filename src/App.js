// App.js
import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import InvoiceList from './InvoiceList';
import AutomationTrigger from './AutomationTrigger';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  const handleLoginSuccess = (response) => {
    const token = response.accessToken;
    setAccessToken(token);
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <div>
      <h1>Invoice Automation App</h1>
      {!accessToken ? (
        <GoogleLoginButton onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
      ) : (
        <div>
          <InvoiceList accessToken={accessToken} />
          <AutomationTrigger accessToken={accessToken} />
        </div>
      )}
    </div>
  );
};

export default App;
