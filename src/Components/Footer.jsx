import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Facebook from './facebook.png';
import Instagram from './instagram.png';
import Video from './video.png';
import Twitter from './twitter.png';

class Footer extends React.Component {
    state = {  }
    render() { 
        return ( 

            <Container id="footer" className="mt-5">
                <Row>
                    <Col xs="3"><img src={Facebook} alt="Facebook" width="35" /> 
                    <img src={Instagram} alt="Facebook" width="35" /> 
                    <img src={Twitter} alt="Facebook" width="35" /> 
                    <img src={Video} alt="Facebook" width="35" /> 
                    <nav className="nav flex-column">
                        <a className="nav-link active" href="#">Audio and Subtitles</a>
                        <a className="nav-link" href="#">Media Center</a>
                        <a className="nav-link" href="#">Privacy</a>
                        <a className="nav-link" href="#" >Contact Us</a>
                    </nav>
                    </Col>
                <Col xs="3">
                <nav className="nav flex-column">
                <a className="nav-link active" href="#">Audio Description</a>
                <a className="nav-link" href="#">Investor Relation</a>
                <a className="nav-link" href="#">Legal Notice</a>
                        
            </nav>
                </Col>
                    <Col xs="3"><nav class="nav flex-column">
                    <a className="nav-link active" href="#">Help Center</a>
                    <a className="nav-link" href="#">Jobs</a>
                    <a className="nav-link" href="#">Cookie Preferences</a>
                            
                </nav></Col>
                    <Col xs="3"> <nav class="nav flex-column">
                    <a className="nav-link active" href="#">Gift Cards</a>
                    <a className="nav-link" href="#">Terms of use</a>
                    <a className="nav-link" href="#">Corporate Information</a>
                            
                </nav></Col>
                </Row>
            </Container>

         );
    }
}
 
export default Footer;