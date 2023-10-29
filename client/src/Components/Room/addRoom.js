import React, { useState } from 'react';
import axios from 'axios';

const AddRooms = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    deviceId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await axios.post('/rooms/', {
      room_name: formData.roomname,
      room_id: formData.roomid,
      device_id: formData.deviceId,
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
        <h2>Add Rooms</h2>
        <input
          type="text"
          name="id"
          placeholder="Room ID"
          style={inputStyle}
          value={formData.roomid}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Room Name"
          style={inputStyle}
          value={formData.roomname}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="id"
          placeholder="Device ID"
          style={inputStyle}
          value={formData.deviceId}
          onChange={handleInputChange}
        />
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRooms;

