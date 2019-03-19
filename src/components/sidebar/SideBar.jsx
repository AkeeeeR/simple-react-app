import React from 'react';
import { Nav } from 'react-bootstrap';
import './SideBar.scss';

const SideBar = () => {
    return (
        <div>
            <p>MENU</p>
            <Nav className="flex-column">
                <i className="fas fa-arrow-right"><Nav.Link href="/">POZYCJA 1</Nav.Link></i>
                <i className="fas fa-arrow-right"><Nav.Link href="/">POZYCJA 2</Nav.Link></i>
                <i className="fas fa-arrow-right"><Nav.Link href="/">POZYCJA 3</Nav.Link></i>
            </Nav>
        </div>
    );
}

export default SideBar;