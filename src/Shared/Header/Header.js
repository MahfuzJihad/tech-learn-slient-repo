import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAppleAlt, FaUser } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext)
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
                        <Nav.Link href="/login">{user?.displayName}</Nav.Link>
                        <Nav.Link href="/profile">
                            {user.photoURL ?
                                <Image
                                    style={{ height: '30px' }} roundedCircle
                                    src={user.photoURL}></Image>
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