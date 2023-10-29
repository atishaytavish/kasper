import React, { useState } from 'react';
import axios from 'axios';

const Customer = () => {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await axios.post('/users', {
      username: formData.username,
      password: formData.password,
      user_id: formData.id,
    })

    console.log(newUser)
  }

  const formStyle = {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px 40px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Add customer</h2>
        <input
          type="text"
          name="id"
          placeholder="ID"
          style={inputStyle}
          value={formData.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          style={inputStyle}
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={inputStyle}
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Customer;

