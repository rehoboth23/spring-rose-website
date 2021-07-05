import {Container, Nav, Row, Col} from 'react-bootstrap'
import * as $ from 'jquery'
import {
    useHistory,
  } from "react-router-dom";
import '../styles/nav.scss'

export default function MyNav(props) {
    let location = props.location
    let history = useHistory()
    function singlePageNavHandler(e) {
        e.preventDefault()
        const href = e.target.href.split("#")[1]
        let target_id = `#${href}`
        if (location.pathname === "/") {
            const top = target_id === "#FrontalDisplay" ? $(target_id).offset().top - 80 : $(target_id).offset().top - 125
            $("html, body").animate({
                scrollTop: top
            }, 1000)
        } else {
            target_id = target_id.toLocaleLowerCase().split("#")[1]
            pushToHistory(target_id)
        }
    }
    function pushToHistory(target) {
        target = target === "home" || target === "frontaldisplay" ? "" : target
        history.push(target)
    }
    return (
        <div id="PageTop">
            <Container id="Nav" expand="xxl" className="fixed-top">
                <Row id="TopRow" xs={1} md={2}>
                    <Col className="pad-top">22 Rumuaghaolu Road, 500272, Port Harcourt, Nigeria</Col>
                    <Col className="pad-top text-right">Tel: +234-803-340-7031</Col>
                </Row>
                <Row id="BottowRow" xs={1} md={2} className="bg-dark-blue">
                    <Col className="pad-bottom">
                        <Nav>
                            LOGO
                        </Nav>
                    </Col>
                    <Col className="pad-bottom">
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link onClick={singlePageNavHandler} href="#FrontalDisplay" className="no-style-link white-icon">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={singlePageNavHandler} href="#About" eventKey="about" className="no-style-link white-icon">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={singlePageNavHandler} href="#Services" eventKey="service" className="no-style-link white-icon">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="contact" className="no-style-link white-icon">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}