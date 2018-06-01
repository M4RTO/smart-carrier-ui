import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import HeaderLink from './headerLinkCmp';

class Header extends Component{
    
    
    
    render(){
        return (
            <Navbar fluid className="navbarCustom">
                    <Navbar.Brand>
                        <a href="#brand">Smart-Carrier</a>
                    </Navbar.Brand>
                <Navbar.Collapse>
                        <HeaderLink/>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
