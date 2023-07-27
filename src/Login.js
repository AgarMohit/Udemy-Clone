import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import './Login.css';
const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useNavigate(); // Get the history object to handle redirection

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
    const { username, password } = formData;

    // Check if the entered credentials are valid
    if (username === 'ABCD' && password === '1234') {
      // Redirect to the home page
      history.push('/home');
    } else {
      // Display an error message for incorrect credentials
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
