import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar className="main-nav" variant="light">
      <Navbar.Brand href="#home">
        <i class="fas fa-camera"></i>
        <span class="rainbow">Public Art Toronto</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
