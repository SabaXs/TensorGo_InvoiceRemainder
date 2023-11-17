// InvoiceList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceList = ({ accessToken }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/invoices/due`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(response => setInvoices(response.data.dueInvoices))
      .catch(error => console.error('Error fetching invoices:', error));
  }, [accessToken]);

  return (
    <div>
      <h2>Invoice Details</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            {invoice.invoiceNumber} - Due: {invoice.dueDate} - Amount: {invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
