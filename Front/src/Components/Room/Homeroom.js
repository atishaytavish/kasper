import React from 'react'
import Room from './room.js'
import './room.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import AddRooms from './addRoom.js';

const Homeroom = () => {
  const userId = 50;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const roomsData = await axios.get(`/rooms/getRooms/${userId}/`);
      setData(roomsData.data);
      console.log(roomsData);
    }

    fetchData();
  }, [])
  return (
    <div>
    <div className='room'>
      {
        data.map((d) => (
          <Room key={d._id} RoomData = {d}/>
        ))
      }
    </div>
    <AddRooms user_id={userId}/>
    </div>
  )
}

export default Homeroom
