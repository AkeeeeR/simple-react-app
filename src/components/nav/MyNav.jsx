import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './MyNav.scss';

const MyNav = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-position">
                    <Nav.Link href="#home">O NAS</Nav.Link>
                    <Nav.Link href="#link">HISTORIA</Nav.Link>
                    <Nav.Link href="#link">ARTYKUŁY</Nav.Link>
                    <Nav.Link href="#link">PROMOCJE</Nav.Link>
                    <Nav.Link href="#link">MAPA</Nav.Link>
                    <Nav.Link href="#link">ILUSTRACJE</Nav.Link>
                    <Nav.Link href="#link">KONTAKT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNav;