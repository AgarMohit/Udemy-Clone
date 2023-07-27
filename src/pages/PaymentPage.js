import React, { useState } from 'react';
import './PaymentPage.css';
const PaymentPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  // Handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the payment based on the selected payment method
    switch (formData.paymentMethod) {
      case 'creditCard':
        // Handle credit card payment
        break;
      case 'paypal':
        // Handle PayPal payment
        break;
      case 'cryptocurrency':
        // Handle cryptocurrency payment
        break;
      case 'upi':
        // Handle UPI payment
        break;
      default:
        // Handle other payment methods (if any)
        break;
    }
  };

  return (
    <div className="payment-container">
      <h1>Secure Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="PaymentForm-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="PaymentForm-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="PaymentForm-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="PaymentForm-group">
            <label>Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="PaymentForm-group">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="PaymentForm-group">
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="creditCard">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cryptocurrency">Cryptocurrency</option>
            <option value="upi">UPI</option> {/* Add UPI option */}
            {/* Add other payment options as needed */}
          </select>
        </div>
        <button className="PaymentButton" type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
