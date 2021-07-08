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
            <div expand="xxl"  className="z-1" id="FrontalDisplay">
                <div className="pad-right text-dark-blue">
                    <p className="text-dark-blue font-shrink">
                        <b>
                            Fit Some<br/>
                            Nice Text Here<br/>
                            For Adults and Children
                        </ b>
                    </p>
                    <p className="text-dark-blue font-shrink">
                        Open 24 hours<br/>
                        Monday-Sunday
                    </p>
                </div>
            </div>
            <div className="bg-white z-1">
                <Container className="z-1 bg-aqua text-center text-dark-blue pad-bottom-50 pad-top-50" id="About">
                    <h2 className="pad-30 text-dark-blue header-text">About Spring-Rose</h2>
                    <p className="text-dark-blue page-paragraph-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.<br />
                        Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor <br />
                        sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel<br /> 
                        fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales. <br />
                    </p>
                    <Row sm={2} md={2} lg={4} className="pad-30 pad-bottom-50">
                        <Col className="text-55">
                            <FontAwesomeIcon icon={faVial} />
                            <h6 className="text-dark-blue">On Site Lab and Testing</h6>
                        </Col>
                        <Col className="text-55">
                            <FontAwesomeIcon icon={faHospitalUser} />
                            <h6 className="text-dark-blue">Open 7 Days a Week</h6>
                        </Col>
                        <Col className="text-55">
                            <FontAwesomeIcon icon={faStopwatch} />
                            <h6 className="text-dark-blue">Short Waiting Times</h6>
                        </Col>
                        <Col className="text-55">
                            <FontAwesomeIcon icon={faCalendar} />
                            <h6 className="text-dark-blue">No Appointment Needed</h6>
                        </Col>
                    </Row>
                    <Button onClick={moreClickHandler} variant={"info"} id="_about">
                        Read More
                    </Button>
                </Container>
                <Container className="z-1 bg-aqua text-center text-dark-blue pad-top-50 pad-bottom-50" id="Services">
                    <h2 className="pad-30 text-dark-blue header-text">Our Services</h2>
                    <p className="text-dark-blue page-paragraph-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.<br />
                        Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor <br />
                        sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel<br /> 
                        fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales. <br />
                    </p>
                    <Row sm={2} md={2} lg={4} className="pad-30 pad-bottom-50">
                        <Col>
                            <Card className={"service-home"}>
                                <Card.Img border="light" variant="top" src={InsertImage} />
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>Genereal Outpatient and Inpatient Care</b></a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={"service-home"}>
                                <Card.Img border="light" variant="top" src={InsertImage} />
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>Pediatrics</b></a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={"service-home"}>
                                <Card.Img border="light" variant="top" src={InsertImage} />
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>A Service</b></a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={"service-home"}>
                                <Card.Img border="light" variant="top" src={InsertImage} />
                                <Card.Body>
                                    <Card.Text>
                                        <a href="https://www.googlg.com" className="no-style-link text-dark-blue"><b>A Service</b></a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Button onClick={moreClickHandler} variant={"info"} id="_services">
                        All Services
                    </Button>
                </Container>
            </div>
            <Footer />
        </div>
    )
}