import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {routes} from "./../../../routing/routes"
import {NavLink} from  'react-router-dom'


class SideBar extends Component{
    
    
    render() {
        return (
            <div id="sidebar-menu" className="sideBarMenuContainer">
                <Navbar fluid className="sidebar" inverse >
            
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        {
                            routes.map((prop, key) => {
                                return (
                                    <Navbar.Text key={key} >
                                       <NavLink className='tabLinks' to={prop.path}>{prop.name}</NavLink>
                                    </Navbar.Text>
                                )
                            })
                        }
                    </Navbar.Collapse>
        
                </Navbar>
            </div>
        );
    }
}

export default SideBar;
