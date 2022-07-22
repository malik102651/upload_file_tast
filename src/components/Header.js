import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className='container-fluid'>
            <Navbar bg='light' expand='lg' >
                
                    <Navbar.Brand href='#'>
                        Main Page
                    </Navbar.Brand>
                         {/* <Nav className="ml-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/About">About</Nav.Link>
                            <Nav.Link to="/Contact">Contact</Nav.Link>
                         </Nav> */}
                         <Link className='nav-link' to='/Home'>Home</Link>
                         <Link className='nav-link' to='/About'>About</Link>
                         <Link className='nav-link' to='/Contact'>Contact</Link>
                         
                         

                </Navbar>
                </div>
        </div>
    )
}
