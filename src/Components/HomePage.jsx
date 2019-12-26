import React from 'react';
import { Container, Col, Input } from "reactstrap";
import MoviesList from './MoviesList';
import NavComponent from './NavComponent'
import Footer from './Footer'
import Line from './line.png'
import Grid from './grid.png'


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
        <div>
            <NavComponent />
            <Container>
                
            <div className="row">
                <div className="col-11 d-flex">
                    <h3 className="m-2">TV Shows</h3>
                    <div className="dropdown my-2">
                        <a className="btn btn-secondary dropdown-toggle bg-transparent" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Genres
                        </a>
                    
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Talk-Show</a>
                        <a className="dropdown-item" href="#">Adventure</a>
                        <a className="dropdown-item" href="#">Drama</a>
                        <a className="dropdown-item" href="#">History</a>
                        <a className="dropdown-item" href="#">Horror</a>
                        <a className="dropdown-item" href="#">Thriller</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Sci-Fi</a>
                        <a className="dropdown-item" href="#">Comedy</a>
                        <a className="dropdown-item" href="#">Mystery</a>
                        <a className="dropdown-item" href="#">Reality-TV</a>
                        <a className="dropdown-item" href="#">Animation</a>
                    </div>
                
            </div>
            </div>
        

        
        <div className="col-1 mt-2">
        <img className="fas fa-th-small" src={Line} alt="Grid Icon" width="25" height="25" />
        <img className="fas fa-th-small" src={Grid} alt="Grid Icon" width="25" height="25" />
        </div>
        </div> 
                        
        <Input id="search" type="text" placeholder="Search for Movies" onChange={this.filterMovies} value={this.state.filterText} className="mb-5" />      

                <h4 className="text-white">Action</h4>

                { 
                    <MoviesList /> }
            </Container> 
            <Footer />
        </div>
        );
    }
}
 
export default MainComponent;