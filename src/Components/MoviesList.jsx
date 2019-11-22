import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap'


class MoviesList extends React.Component {
    state = { 
        movies: [],

        
        }

        

    render() { 
        
        
        
        return ( 
            <div>
                <Row>

                    { 
                        (this.state.movies).map((movies, index) =>
                        <Col md="3">
                    <Card className="m-2" key={index}>
                            <CardImg top width="100%" src={ movies.Poster } alt="Movie Image" />
                            <CardBody>
                            <CardTitle>{ movies.Title }</CardTitle>
                            <CardSubtitle>{ movies.imdbID.toUpperCase() }</CardSubtitle>
                            <CardText>{ movies.Year }</CardText>
                            <Button>Comment</Button>
                            </CardBody>
                        </Card> 
                        </Col>
                    )}
                </Row>
            </div>
             );
    }
    
    componentDidMount = async () => {
        let response = await fetch("http://www.omdbapi.com/?apikey=93741037&s=Batman");
        let json = await response.json()
        console.log(response)
        
        console.log(json)
        console.log(json.Search)

        let movies = await json.Search;

        this.setState ({
            movies: movies
            
        })

        console.log("Poster", this.state.movies.Poster)
    }
} 
 
export default MoviesList;