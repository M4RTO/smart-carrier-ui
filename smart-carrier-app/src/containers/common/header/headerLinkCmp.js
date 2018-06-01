import React, { Component } from 'react';
import {  Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Header extends Component{
    
    
    
    render(){
        return (
            <div>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        <p>Avenida</p>
                    </NavItem>
                    <NavDropdown
                        eventKey={2}
                        title={(
                            <div>
                                <i className="fas fa-list-ul"></i>
                            </div>
                        )} noCaret id="basic-nav-dropdown-1">
                        <MenuItem eventKey={1}>
                            <span><i className="fas fa-sign-out-alt"></i></span>
                            Salir
                        </MenuItem>
                    </NavDropdown>
                </Nav>
            </div>
         
        );
    }
}

export default Header;
