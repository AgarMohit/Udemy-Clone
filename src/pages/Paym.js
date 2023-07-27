import React, { useState } from 'react';
import './Paym.css';
import card_img from"../assets/images/card_img.png"
const Paym = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="PaymContainer">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>full name :</span>
              <input
                type="text"
                placeholder="john deo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>address :</span>
              <input
                type="text"
                placeholder="room - street - locality"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>city :</span>
              <input
                type="text"
                placeholder="mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>state :</span>
                <input
                  type="text"
                  placeholder="india"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <span>zip code :</span>
                <input
                  type="text"
                  placeholder="123 456"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="title">payment</h3>
            <div className="inputBox">
              <span>cards accepted :</span>
              <img src= {card_img} alt="" />
            </div>
            <div className="inputBox">
              <span>name on card :</span>
              <input
                type="text"
                placeholder="mr. john deo"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>credit card number :</span>
              <input
                type="number"
                placeholder="1111-2222-3333-4444"
                value={creditCardNumber}
                onChange={(e) => setCreditCardNumber(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>exp month :</span>
              <input
                type="text"
                placeholder="january"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
              />
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>exp year :</span>
                <input
                  type="number"
                  placeholder="2022"
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input
                  type="text"
                  placeholder="1234"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="proceed to checkout" className="submit-btn" />
      </form>
    </div>
  );
};

export default Paym;
