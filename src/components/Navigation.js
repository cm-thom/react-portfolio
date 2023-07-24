import "../Navigation.css";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { useState } from "react";

function Navigation() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Nav className="nav" justify variant="underline" defaultActiveKey="#home">
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} onClick={() => handleTabClick(0)} href="#home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            onClick={() => handleTabClick(1)}
            className="nav-text"
            href="#portfolio"
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            onClick={() => handleTabClick(2)}
            className="nav-text"
            href="#contact"
          >
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            onClick={() => handleTabClick(3)}
            className="nav-text"
            href="#resume"
          >
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='main-content-area'>
        {activeTab === 0 && <Home />}
        {activeTab === 1 && <Portfolio />}
        {activeTab === 2 && <Contact />}
        {activeTab === 3 && <Resume />}
      </div>
    </div>
  );
}

export default Navigation;
