import { Container, Nav, Navbar } from "react-bootstrap";
import './NavBar.css';
import ijselogo from '../images/images.jpeg';

function NavBar() {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    Lost & Found Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto">
                        <Nav.Link href="#items" className="nav-link">Items</Nav.Link>
                        <Nav.Link href="#requests" className="nav-link">Requests</Nav.Link>
                    </Nav>
                    <div className="ijse-logo ms-3">
                        <img
                            src={ijselogo}
                            alt="IJSE Logo"
                            style={{ 
                                width: '80px', 
                                height: '80px', 
                                objectFit: 'cover',
                                boxShadow: 'var(--shadow-soft)'
                            }}
                            className="rounded-circle logo-img"
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;