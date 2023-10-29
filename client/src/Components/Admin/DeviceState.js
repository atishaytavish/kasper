import React from 'react';
import './DeviceState.css'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import {useState, useEffect} from 'react'
import axios from 'axios';


const Room = ({DeviceData}) => {

    
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        width: '300px',
        padding: '1%',
        marginLeft: '10px',
        boxShadow: '2px 5px 15px 0px rgba(0,0,0,0.75)'
      };      
      const buttonStyle = {
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '20px'
      };

      console.log("-------", DeviceData)



      


  return (
    <div>
      <div style={formStyle}>
      <h2>{DeviceData.device_name}</h2>
        <div>{DeviceData.device_id}</div>

        <div className='but-con'>
        <button style={buttonStyle}>Light</button>
        <button style={buttonStyle}>{DeviceData.state.light ? <ToggleOnIcon className='ToggleOnIcon'/> : 
        <ToggleOffIcon className='ToggleOffIcon'/>}</button>
        </div>

        <div className='but-con'>
        <button style={buttonStyle}>Fan</button>
        <button style={buttonStyle}>{DeviceData.state.fan ? <ToggleOnIcon className='ToggleOnIcon'/> : 
        <ToggleOffIcon className='ToggleOffIcon'/>}</button>
        </div>

        <div className='but-con'>
        <button style={buttonStyle}>Misc</button>
        <button  style={buttonStyle}>{DeviceData.state.mis ? <ToggleOnIcon className='ToggleOnIcon'/> : 
        <ToggleOffIcon className='ToggleOffIcon'/>}</button>
        </div>

      </div>
    </div>
  );
};

export default Room;
