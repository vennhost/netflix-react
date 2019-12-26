import React, { useState } from "react";
import { Collapse,
    Navbar,
    
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
     } from "reactstrap";
import Logo from './logo.png'
import Search from './search.png'
import Bell from './doorbell.png'
import {Link} from 'react-router-dom'



class NavComponent extends React.Component {
    state = { 
       
     }
    render() { 

     
        return ( 

    <div id="nav">
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/"><img src={Logo} alt="Logo" width="100"/></NavbarBrand>
       
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="text-white" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="text-white" to="#">TV Series</Link>
            </NavItem>

            <NavItem>
              <Link className="text-white" to="#">Movies</Link>
            </NavItem>
            <NavItem>
              <Link className="text-white" to="#">My List</Link>
            </NavItem>
            
          </Nav>
          <Nav>
            <img className="ml-2" src={Search} alt="Facebook" width="25" /> 
            <Link className="text-white" to="#">KIDS</Link>
            <img className="ml-2" src={Bell} alt="Facebook" width="25" /> 
          </Nav>
          
       
      </Navbar>
      
    </div>

         );
    }
}
 
export default NavComponent;