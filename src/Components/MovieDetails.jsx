import React from "react";
import { Container, Col, Row } from "reactstrap";



class MovieDetails extends React.Component {
    state = { 

            itemId: undefined,
            myMovie: undefined

     }

     
    render() { 

        this.setState({
            itemId: this.props.match.params.itemId,
            myMovie: items.find(item => item.imdbID.toString() === itemId)
        })

        if (myMovie) {

        return ( 
            <Container className="my-5">
                <Row>
                <Col md="4">
                    <img
                    className="movie-detail-image"
                    src={"/" + myMovie.Poster}
                    alt="selected Movie"
                    ></img>
                </Col>
                <Col md="8">
                    <h2>{myMovie.Title}</h2>
                    <h4>Actors: {myMovie.Actors}</h4>
                </Col>
                </Row>
            </Container>
    );
  } else {
    return <div>This movie is not available</div>;
  }
    
    }

    

    componentDidMount = async () => {
            let response = await fetch("http://www.omdbapi.com/?apikey=93741037&i=tt2084949")
            let myMovies = await response.json();
            console.log(myMovie)

            this.setState({
                myMovie: myMovies
                
            })
    }

    

};
 
export default MovieDetails;
 


