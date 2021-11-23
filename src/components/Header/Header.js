import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
    <Navbar bg="warning" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand as={ HashLink }
    to="#home" className="text-primary fw-bolder">Fitness Club</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end" id="menu-info">
    <Nav.Link as={ HashLink }
    to="/home#home">Home</Nav.Link>
      <Nav.Link as={ HashLink }
    to="/home#services">Services</Nav.Link>
      <Nav.Link as={ HashLink }
    to="/home#trainers">Our Trainers</Nav.Link>
      <Nav.Link as={ HashLink }
    to="/home#about">About Us</Nav.Link>
      <Nav.Link as={ HashLink }
    to="/home#contact">Contact Us</Nav.Link>
      {user?.email ?
        <Button onClick={logOut} variant="light">Log out</Button> : 
        <Nav.Link as={ Link }
    to="/login">Login</Nav.Link>} 
    
    <Navbar.Toggle />
      <Navbar.Text>
        Signed in as: <Link to="#login">{user?.displayName}</Link>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;