import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
const NavbarMenu = () => {
  const navbarStyle = {
    backgroundColor: '#333', 
    color: '#fff',          
    padding: '10px 20px',   
    display: 'flex',        
    justifyContent: 'space-between', 
  };

  const logoStyle = {
    fontSize: '24px',       
    fontWeight: 'bold',     
    textDecoration: 'none', 
    color: '#fff',          
  };

  // const linkStyle = {
  //   color: '#fff',          
  //   textDecoration: 'none', 
  //   marginLeft: '10px',     
  // };

  const nav = {
    margin: '0 10px 0 10px', 
    color:'white',
    textDecoration: 'none',
  };
  const moveleft = {
      margin:'0 100px 0 0',
  };

  return (
    <div style={navbarStyle}>
      <a href="/" style={logoStyle}>KASPER</a>
      <div style={moveleft}>
        <Link style={nav} to="/">Admin</Link>
        <Link style={nav} to="/customer-login">Customer</Link>
        {/* <Link style={nav} to="/room">Room</Link> */}
      </div>
    </div>
  );
};

export default NavbarMenu;
