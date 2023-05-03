import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import ActiveLink from "../../components/ActiveLink/ActiveLink";
import { Tooltip } from 'react-tooltip'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const profilePicStyle = {
        width: '40px',
        borderRadius: '20px',
        padding: '2px',
        marginRight: '3px'
    }
    const handellogOut = () => {
        logOut()
            .then(() => {
                console.log('user sign out successfully');
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
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
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>

                        </Nav>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={user?.displayName}
                            data-tooltip-place="left"
                        >
                           <span>
                        {
                            user?.photoURL &&
                                 <span><img src={user.photoURL} alt="" style={profilePicStyle} id="second-app-title" /></span> || <span>{user?.email}</span>
            
                        }
                        </span>
                        </a>
                        <Tooltip id="my-tooltip" />
                        {
                            user
                                ? <Button onClick={handellogOut} variant="outline-danger">Logout</Button>
                                : <Link to={'/login'}><Button variant="outline-danger">Login</Button></Link>
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavigationBar;