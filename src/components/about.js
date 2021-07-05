import MyNav from './nav'
import Footer from './footer'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Doctor from '../assets/images/doctor.jpeg'
import "../styles/about.scss"
import {
    useLocation
  } from "react-router-dom";
import * as $ from 'jquery'

export default function About(props) {
    let loc = useLocation()
    $("html, body")[0].scrollTop = 0
    return (
        <div>
            <MyNav location={loc}/>
            <Container expand="xxl"  className="text-dark-blue mt-180 " id="AboutPageTop">
                <h1 className="pad-50 w-75 ">ABOUT US<b className="color-lemon">&#8228;</b></h1>
                <p className="w-75 text-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.
                    Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor
                    sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel
                    fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales.
                </p>
            </Container>
            <Container expand="xxl"  className="text-dark-blue" id="OurTeam">
                <h1 className="pad-50 w-75 ">MEET THE TEAM</h1>
                <Row lg={3} className="pad-20 w-75 text-15">
                    <Col className="text-center">
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="h-200" src={Doctor}/>
                            <Card.Body>
                                <Card.Title>Fname Lname</Card.Title>
                                <Card.Text>
                                    Title/Position
                                </Card.Text>
                                <Card.Text>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.linkedin.com">&emsp;<FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.gmail.com">&emsp;<FontAwesomeIcon icon={faMailBulk} /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="h-200" src={Doctor}/>
                            <Card.Body>
                                <Card.Title>Fname Lname</Card.Title>
                                <Card.Text>
                                    Title/Position
                                </Card.Text>
                                <Card.Text>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.linkedin.com">&emsp;<FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.gmail.com">&emsp;<FontAwesomeIcon icon={faMailBulk} /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="h-200" src={Doctor}/>
                            <Card.Body>
                                <Card.Title>Fname Lname</Card.Title>
                                <Card.Text>
                                    Title/Position
                                </Card.Text>
                                <Card.Text>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.linkedin.com">&emsp;<FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.gmail.com">&emsp;<FontAwesomeIcon icon={faMailBulk} /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row lg={3} className="pad-20 no-outline w-75 text-15">
                    <Col className="text-center">
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="h-200" src={Doctor}/>
                            <Card.Body>
                                <Card.Title>Fname Lname</Card.Title>
                                <Card.Text>
                                    Title/Position
                                </Card.Text>
                                <Card.Text>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.linkedin.com">&emsp;<FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.gmail.com">&emsp;<FontAwesomeIcon icon={faMailBulk} /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="h-200" src={Doctor}/>
                            <Card.Body>
                                <Card.Title>Fname Lname</Card.Title>
                                <Card.Text>
                                    Title/Position
                                </Card.Text>
                                <Card.Text>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.linkedin.com">&emsp;<FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.gmail.com">&emsp;<FontAwesomeIcon icon={faMailBulk} /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="h-200" src={Doctor}/>
                            <Card.Body>
                                <Card.Title>Fname Lname</Card.Title>
                                <Card.Text>
                                    Title/Position
                                </Card.Text>
                                <Card.Text>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.linkedin.com">&emsp;<FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a target="_blank" rel="noreferrer" className="text-dark-blue no-style-link white-icon" href="https://www.gmail.com">&emsp;<FontAwesomeIcon icon={faMailBulk} /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}