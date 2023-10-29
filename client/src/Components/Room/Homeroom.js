import React from 'react'
import Room from './room.js'
import './room.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import AddRooms from './addRoom.js';
import UserDevice from './UserDevice.js';
const Homeroom = () => {
  const userId = JSON.parse(localStorage.getItem('user')).user_id;
  console.log("------------", userId)

  const [data, setData] = useState([]);
  const [room,setRoom] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const roomsData = await axios.get(`/rooms/getRooms/${userId}/`);
      setData(roomsData.data);
      console.log(roomsData);

      const allocatedDevice = await axios.get(`/device/getalldevice/${userId}/`);
      setRoom(allocatedDevice.data);
      console.log(allocatedDevice.data);
    }

    fetchData();
  }, [])
  return (
    <div>
    <div className='room'>
      {
        room.map((d) => (
          <UserDevice key={d._id} UserData = {d}/>
        ))
      }
    </div>
    <hr></hr>
    <AddRooms user_id={userId}/>
    <hr></hr>
    <div className='room'>
      {
        data.map((d) => (
          <Room key={d._id} RoomData = {d}/>
        ))
      }
    </div>
    </div>
  )
}

export default Homeroom
