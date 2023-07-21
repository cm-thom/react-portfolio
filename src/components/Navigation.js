import "../Navigation.css";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <div>
      <Nav className="nav" justify variant="underline" defaultActiveKey="#home">
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} href="#home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            className="nav-text"
            href="#portfolio"
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            className="nav-text"
            href="#contact"
          >
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            className="nav-text"
            href="#resume"
          >
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        content goes here
      {/* {activeTab === 0 && <Home />}
        {activeTab === 1 && <Portfolio />}
        {activeTab === 2 && <Contact />}
        {activeTab === 3 && <Resume />} */}
      </div>
    </div>
  );
}

export default Navigation;
