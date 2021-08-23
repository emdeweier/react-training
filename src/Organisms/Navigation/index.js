import logo from '../../logo.svg';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../Atom/Images';

let Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><Image url={logo} alt="logo" width="30" height="30" class="d-inline-block align-top"></Image> Training React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/planet">Planet</Nav.Link>
                        <NavDropdown title="Social" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;