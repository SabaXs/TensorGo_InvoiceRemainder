// AutomationTrigger.js
import React from 'react';
import axios from 'axios';

const AutomationTrigger = ({ accessToken }) => {
  const handleTriggerAutomation = () => {
    axios.post(`http://localhost:3001/invoices/trigger-automation`, null, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(response => console.log('Automation triggered:', response.data))
      .catch(error => console.error('Error triggering automation:', error));
  };

  return (
    <div>
      <button onClick={handleTriggerAutomation}>Trigger Automation</button>
    </div>
  );
};

export default AutomationTrigger;
