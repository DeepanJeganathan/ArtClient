import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="main-nav" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <i class="fas fa-camera"></i> Public Art Toronto
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
