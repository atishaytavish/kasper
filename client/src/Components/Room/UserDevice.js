import React, { useState } from 'react';
import NavbarMenu from '../NavbarMenu';

const UserDevice = ({UserData}) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const DeviceId = UserData.device_id;
  const DeviceName = UserData.device_name;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/cutomer-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Data saved to MongoDB!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formStyle = {
    maxWidth: '300px',
    margin: '2% auto',
    padding: '10px 20px',
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

  return (
    <div>
      {/* <NavbarMenu /> */}
      <div style={formStyle}>
        <h2>User Device</h2>
        <h2>Name :{DeviceName}</h2>
        <h2>Id :{DeviceId}</h2>
      </div>
    </div>
  );
};

export default UserDevice;
