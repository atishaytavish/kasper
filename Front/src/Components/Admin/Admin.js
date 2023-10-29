import React, {useState, useEffect} from 'react';
import NavbarMenu from '../NavbarMenu.js';
import AdminPage from './Adminpage.js'
import Unallocate from './Unallocate.js'
import Customer from './Addcustomer'
import DeviceState from './DeviceState.js'
import axios from 'axios'
function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchState = async () => {
      const fetchedData = await axios.get("/device/getalldevice/devices");
      setData(fetchedData.data)
    }

    fetchState();
  }, [])

  return (
    <>
      <NavbarMenu/>
      <AdminPage/>
      <Customer/>
      <Unallocate/>
      {
        data.map((d) => <DeviceState DeviceData={d}/>)
      }
    </>
  );
}
export default Admin;