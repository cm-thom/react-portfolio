import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    //logic for navbar

    return (
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Nav;