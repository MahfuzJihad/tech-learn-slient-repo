import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAppleAlt, FaUser } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="ml-3 d-flex align-items-center justify-content-lg-between" href="#home"><FaAppleAlt></FaAppleAlt>Tech Learn</Navbar.Brand>
                <div>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/course">Course</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/login">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="primary" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/registar">Registar</Nav.Link>
                                        {/* <Link to='/login'>Login</Link> */}
                                        {/* <Link to='/registar'>Registar</Link> */}
                                    </>

                            }

                        </Nav.Link>
                        <Nav.Link href="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }} roundedCircle
                                    src={user?.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;