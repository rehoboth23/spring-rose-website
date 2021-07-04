import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import MyNav from './nav'
import Footer from './footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVial, faHospitalUser, faStopwatch, faCalendar } from '@fortawesome/free-solid-svg-icons'
import InsertImage from '../assets/images/insert-image.png'
import {
    useHistory,
    useLocation
  } from "react-router-dom";
import "../styles/home.scss"


export default function Home(props) {
    let loc = useLocation()
    let redirectEl = null
    let history = useHistory()

    function moreClickHandler(e) {
        const target_id = e.target.id.split("_")[1]
        pushToHistory(target_id)
    }

    function pushToHistory(target) {
        target = target === "home" ? "" : target
        history.push(target)

    }
    return (
        <div>
            <MyNav location={loc}/>
            {redirectEl}
            <div className="container z-0 repeat-back h-600 fixed-top"/>
            <Container expand="xxl"  className="z-1" id="FrontalDisplay">
                <div className="pad-top-right text-dark-blue">
                    <Row lg={1}>
                        <Col><h1>Fit Some</h1></Col>
                        <Col><h1>Nice Text Here</h1></Col>
                        <Col><h3>For Adults and Children</h3></Col>
                        <Col>
                            <h6><b>
                                Open 24 hours<br/>
                                Monday-Sunday
                            </b></h6>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="z-1 div-40"/>
            <Container className="z-1 bg-aqua text-center text-dark-blue" id="About">
                <h2 className="pad-30">About Spring-Rose</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.<br />
                    Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor <br />
                    sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel<br /> 
                    fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales. <br />
                </p>
                <Row lg={4} className="pad-30 pad-bottom-50">
                    <Col className="text-55">
                        <FontAwesomeIcon icon={faVial} />
                        <h6>On Site Lab and Testing</h6>
                    </Col>
                    <Col className="text-55">
                        <FontAwesomeIcon icon={faHospitalUser} />
                        <h6>Open 7 Days a Week</h6>
                    </Col>
                    <Col className="text-55">
                        <FontAwesomeIcon icon={faStopwatch} />
                        <h6>Short Waiting Times</h6>
                    </Col>
                    <Col className="text-55">
                        <FontAwesomeIcon icon={faCalendar} />
                        <h6>No Appointment Needed</h6>
                    </Col>
                </Row>
                <Button onClick={moreClickHandler} variant={"info"} id="_about">
                    Read More
                </Button>
            </Container>
            <div className="z-1 div-40"/>
            <Container className="z-1 bg-aqua text-center text-dark-blue" id="Services">
                <h2 className="pad-30">Our Services</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.<br />
                    Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor <br />
                    sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel<br /> 
                    fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales. <br />
                </p>
                <Row lg={4} className="pad-30 pad-bottom-50">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={InsertImage} />
                            <Card.Body>
                                <Card.Text>
                                    <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>A Service</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={InsertImage} />
                            <Card.Body>
                                <Card.Text>
                                    <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>A Service</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={InsertImage} />
                            <Card.Body>
                                <Card.Text>
                                    <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>A Service</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={InsertImage} />
                            <Card.Body>
                                <Card.Text>
                                    <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>A Service</b></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Button onClick={moreClickHandler} variant={"info"} id="_service">
                    All Services
                </Button>
            </Container>
            <div className="z-1 div-40"/>
            <Footer />
        </div>
    )
}