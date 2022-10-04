import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarComp = () => {

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="#home">CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='nav_link' to="/">Products</NavLink>
            <NavLink className='nav_link' to="/add">Add_Products</NavLink>
          </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NavbarComp