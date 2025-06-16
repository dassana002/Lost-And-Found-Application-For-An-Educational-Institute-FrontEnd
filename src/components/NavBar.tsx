import { Container, Nav, Navbar } from "react-bootstrap";
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Lost And Found Application </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#items">ITEM</Nav.Link>
                            <Nav.Link href="#requests">REQUEST</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
}

export default NavBar;