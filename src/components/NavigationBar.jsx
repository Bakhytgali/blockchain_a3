import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "../index.css";

const NavigationBar = () => {
    return (
        <Navbar className="navmenu" expand="lg">
        <div className="container-lg">
                <Navbar.Brand href="#home">
                    <img src="https://images.creativefabrica.com/products/thumbnails/2023/10/06/szTD6VhLZ/2WODqbTK2AIXDiE7AKwjZ2kiOpq.png" alt="" width={"10%"}/>
                    Eclipse
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        {/*link about should lead to the corresponding component*/}
                    </Nav>
                </Navbar.Collapse>
        </div>
        </Navbar>
    );
}

export default NavigationBar;
