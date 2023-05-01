import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="container">
                <Container fluid>
                    <Navbar.Brand href="#">American Chef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Blog</Nav.Link>
                        </Nav>

                            <Button variant="outline-success">Login</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;