import React from 'react';
import './room.css'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import {useState, useEffect} from 'react'
import axios from 'axios';


const Room = ({RoomData}) => {

    
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

      const [fan, setFan] = useState(false);
      const [light, setLight] = useState(false);
      const [misc, setMisc] = useState(false);
      useEffect(() => {
        const fetchState = async () => {
          const fetchedData = await axios.get(`/device/${RoomData.device_id}`);
          console.log(fetchedData.data)
          setFan(fetchedData.data.state.fan);
          setLight(fetchedData.data.state.light);
          setMisc(fetchedData.data.state.mis);
        }

        fetchState();
      }, [])


      const handelChange = async (divc) => {
        if(divc == '1'){
          await axios.put('/device/updateDevice/', {
            targetChange: !light,
            applicationName: 'light',
            deviceId: RoomData.device_id
          })
          setLight(!light)
        }
        else if(divc == '2'){
          await axios.put('/device/updateDevice/', {
            targetChange: !fan,
            applicationName: 'fan',
            deviceId: RoomData.device_id
          })
          setFan(!fan)
        }
        else if(divc == '3'){
          await axios.put('/device/updateDevice/', {
            targetChange: !misc,
            applicationName: 'mis',
            deviceId: RoomData.device_id
          })
          setMisc(!misc)
        }
      }


  return (
    <div>
      <div style={formStyle}>
      <h2>{RoomData.room_name}</h2>
        <div>{RoomData.room_id}</div>

        <div className='but-con'>
        <button style={buttonStyle}>Light</button>
        <button onClick={() => handelChange('1')} style={buttonStyle}>{light ? <ToggleOnIcon className='ToggleOnIcon'/> : 
        <ToggleOffIcon className='ToggleOffIcon'/>}</button>
        </div>

        <div className='but-con'>
        <button style={buttonStyle}>Fan</button>
        <button onClick={() => handelChange('2')} style={buttonStyle}>{fan ? <ToggleOnIcon className='ToggleOnIcon'/> : 
        <ToggleOffIcon className='ToggleOffIcon'/>}</button>
        </div>

        <div className='but-con'>
        <button style={buttonStyle}>Misc</button>
        <button onClick={() => handelChange('3')} style={buttonStyle}>{misc ? <ToggleOnIcon className='ToggleOnIcon'/> : 
        <ToggleOffIcon className='ToggleOffIcon'/>}</button>
        </div>

      </div>
    </div>
  );
};

export default Room;
