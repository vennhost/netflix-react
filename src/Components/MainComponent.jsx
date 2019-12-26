import React from 'react';
import { Container } from "reactstrap";

import NavComponent from './NavComponent'
import HomePage from './HomePage'
import MovieDetails from './MovieDetails'
import About from './About'
import {BrowserRouter as Router, Route } from 'react-router-dom'



class MainComponent extends React.Component {
    state = { 
        filterText: ""
     }

     filterMovies = (e) => {
        this.setState({
            filterText: e.target.value.toLowerCase()
        })
    }

    render() { 
        return ( 
        <Router>
            <NavComponent />
            <Container>
                    <Route to="/" exact component={HomePage} />
                    <Route to="/about"  component={About} />
                    <Route to="/moviedetails/:itemId" component={MovieDetails} />
            
            </Container> 
            
        </Router>
        );
    }
}
 
export default MainComponent;