import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import auth from '../../../firebase/firebase.init'
import logo from '../../../images/logo.png'

const Header = () => {
  const [user] = useAuthState(auth)
  const { pathname } = useLocation()

  return (
    <Navbar collapseOnSelect expand='lg' sticky='top' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt='logo' width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              as={pathname === '/' ? HashLink : Link}
              to={pathname === '/' ? '#top' : '/'}
            >
              Home
            </Nav.Link>
            {pathname === '/' && (
              <>
                <Nav.Link as={HashLink} smooth to='#services'>
                  Services
                </Nav.Link>
                <Nav.Link as={HashLink} smooth to='#experts'>
                  Experts
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            {user ? (
              <Button
                onClick={() => signOut(auth)}
                variant={'outline-primary'}
                className='mt-3 mt-lg-0 ms-lg-2'
                style={{ width: '100px' }}
              >
                Sign Out
              </Button>
            ) : (
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
