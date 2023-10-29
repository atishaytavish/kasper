import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the server for saving in MongoDB
    try {
      const response = await axios.post('/device/', {
        device_id: formData.id,
        device_name: formData.name
      });
      if (response.ok) {
        console.log('Data saved to MongoDB!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

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

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Add Devices</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          style={inputStyle}
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="id"
          placeholder="ID"
          style={inputStyle}
          value={formData.id}
          onChange={handleInputChange}
        />
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
