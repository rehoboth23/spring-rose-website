import MyNav from './nav'
import Footer from './footer'
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
    useLocation
  } from "react-router-dom";
import "../styles/contact.scss"

export default function Contact(props) {
    let loc = useLocation()
    return (
        <div>
            <MyNav location={loc}/>
            <div className="z-0 repeat-back-buffer"/>
            <div className="bg-white z-1">
                <Container expand="xxl"  className="z-1 pad-top-50 pad-bottom-50 bg-aqua" id="ContactPageTop">
                    <h1 className="pad-10 w-75 text-dark-blue header-text">Contact Us<b className="color-lemon">&#8228;</b></h1>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.
                        Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor
                        sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel
                        fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales.
                    </p>
                </Container>
                <Container expand="xxl"  className="z-1 bg-aqua pad-bottom-50" id="OpeningHours">
                    <h1 className="pad-10 w-75 text-dark-blue header-text">Opening Hours</h1>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        Monday - Sunday: 24 Hours
                    </p>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        <FontAwesomeIcon icon={faPhone} />&emsp;|&emsp;+234-803-340-7031 < FontAwesomeIcon/>
                    </p>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        <FontAwesomeIcon icon={faMailBulk} />&emsp;|&emsp;example@mail.com < FontAwesomeIcon/>
                    </p>
                </Container>
                <Container expand="xxl"  className="z-1 pad-bottom-50 bg-aqua" id="Directions">
                    <h1 className="pad-10 w-75 text-dark-blue header-text">Directions</h1>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        22 Rumuaghaolu Road
                    </p>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        500272, Port Harcourt
                    </p>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        Nigeria
                    </p>
                    <p className="w-75 text-15 text-dark-blue page-paragraph-text">
                        Tel: +234 803-340-7031
                    </p>
                </Container>
            </div>
            <Footer />
        </div>
    )
}