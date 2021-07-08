import {Nav, Navbar} from 'react-bootstrap'
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
        let target_id = `${e.target.href.split("*")[1]}`
        let in_page_nav = location.pathname === "/" && target_id.includes("#")

        if (in_page_nav) {
            const top = target_id === "#FrontalDisplay" ? $(target_id).offset().top - 145 : $(target_id).offset().top - 125
            $("html, body").animate({
                scrollTop: top
            }, 1000)
        } else {
            if (target_id.includes("#")) {
                target_id = target_id.toLocaleLowerCase().split("#")[1]
            }
            pushToHistory(target_id)
        }
    }
    function pushToHistory(target) {
        target = target === "home" || target === "frontaldisplay" ? "" : target
        history.push(target)
    }
    return (
        <Navbar fixed="top" id="PageTop" collapseOnSelect expand="lg" className="bg-dark-blue" variant="dark">
            {/* <Button className={"shrink-btn"} variant={"success"}><p className={"f-2"}>Book an Appointment</p></Button> */}
                <Navbar.Brand href="#home" className="logo">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav.Item>
                        <Nav.Link onClick={singlePageNavHandler} href="*#FrontalDisplay" className="no-style-link white-icon f-vw">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={singlePageNavHandler} href="*#About" eventKey="about" className="no-style-link white-icon f-vw">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={singlePageNavHandler} href="*#Services" eventKey="service" className="no-style-link white-icon f-vw">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={singlePageNavHandler} href="*contact" eventKey="contact" className="no-style-link white-icon f-vw">Contact</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav.Item>
                        <Nav.Link onClick={singlePageNavHandler} href="*#FrontalDisplay" className="no-style-link white-icon f-vw u-text">Book An Appointment</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
        </Navbar>
    )
}