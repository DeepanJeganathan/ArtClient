import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="main-nav" variant="light">
      <Navbar.Brand href="#home">
        
        
 <i class="fas fa-camera"></i><span class="rainbow">Public Art Toronto</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
