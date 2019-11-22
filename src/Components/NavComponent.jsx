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
              <NavLink className="text-white" href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">TV Series</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="text-white" href="#">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#">My List</NavLink>
            </NavItem>
            
          </Nav>
          <Nav>
            <img className="ml-2" src={Search} alt="Facebook" width="25" /> 
            <a className="text-white" href="#">KIDS</a>
            <img className="ml-2" src={Bell} alt="Facebook" width="25" /> 
          </Nav>
          
       
      </Navbar>
      
    </div>

         );
    }
}
 
export default NavComponent;