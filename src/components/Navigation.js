import "../Navigation.css";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav className="nav" justify variant="underline" defaultActiveKey="#home">
      <Nav.Item>
        <Nav.Link className="nav-text" href="#home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-text" href="#portfolio">
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-text" href="#contact">
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-text" href="#resume">
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
