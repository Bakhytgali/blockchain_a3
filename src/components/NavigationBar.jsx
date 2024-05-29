import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "../index.css";
import Mainbody from "../components/Mainbody";

const NavigationBar = () => {
    return (
        <Navbar className="navmenu" expand="lg">
        <div className="container-lg">
                <Navbar.Brand href="#home" style={{fontSize: "24px", fontWeight: "600"}}>
                    Care Wave
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        {/*link about should lead to the corresponding component*/}
                    </Nav>
                </Navbar.Collapse>
                <Mainbody />
        </div>
        </Navbar>
    );
}

export default NavigationBar;
