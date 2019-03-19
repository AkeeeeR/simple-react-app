import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './MyNav.scss';

const MyNav = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-position">
                    <Nav.Link href="#">O NAS</Nav.Link>
                    <Nav.Link href="#">HISTORIA</Nav.Link>
                    <Nav.Link href="#">ARTYKUŁY</Nav.Link>
                    <Nav.Link href="#">PROMOCJE</Nav.Link>
                    <Nav.Link href="#">MAPA</Nav.Link>
                    <Nav.Link href="#">ILUSTRACJE</Nav.Link>
                    <Nav.Link href="#">KONTAKT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNav;