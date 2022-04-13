import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../../images/logo.png'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' sticky='top' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='home'>
          <img src={logo} alt='logo' width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={HashLink} to={'home/#top'}>
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} smooth to='home/#services'>
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} smooth to='home/#experts'>
              Experts
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/login'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
