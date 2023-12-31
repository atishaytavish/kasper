import React, { useState } from 'react';
import NavbarMenu from '../NavbarMenu';
import { redirect } from 'react-router-dom';

const CustomerLogin = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const fetchData = async () => {
          const userData = await axios.post('/user/login',{
            name:formData.name,
            password:formData.password,
          });
          setUser(userData);
          if(user){
            localStorage.setItem('user', user);
            redirect('/room')
          }
        }
    
        fetchData();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formStyle = {
    maxWidth: '300px',
    margin: '2% auto',
    padding: '20px 40px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  const [user,setUser] = useState();
  
  return (
    <div>
      <NavbarMenu />
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Customer login</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          style={inputStyle}
          value={formData.name}
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
          Login
        </button>
        
      </form>
    </div>
  );
};

export default CustomerLogin;
