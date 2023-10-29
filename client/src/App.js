import './App.css';
import Admin from './Components/Admin/Admin.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerLogin from './Components/Customer/LoginCustomer.js'
import Homeroom from './Components/Room/Homeroom.js'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/customer-login" element={<CustomerLogin />} />
      <Route path="/room" element={<Homeroom />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
