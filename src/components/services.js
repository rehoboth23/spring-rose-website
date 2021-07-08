import MyNav from './nav'
import Footer from './footer'
import {Container, Row, Col} from 'react-bootstrap'
import "../styles/services.scss"
import {
    useLocation
  } from "react-router-dom";
import { Divider } from 'antd';
import 'antd/dist/antd.css';

export default function Services(props) {
    let loc = useLocation()
    return (
        <div>
            <MyNav location={loc}/>
            <div className="z-0 repeat-back-buffer"/>
            <div className="bg-white z-1">
                <Container expand="xxl"  className="z-1 pad-top-50 pad-bottom-50 bg-aqua" id="ServicePageTop">
                    <h1 className="pad-10 w-75 text-dark-blue">Our Services<b className="color-lemon">&#8228;</b></h1>
                    <p className="w-75 text-15 text-dark-blue">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.
                        Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor
                        sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel
                        fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales.
                    </p>
                </Container>
                <Container className="z-1 bg-aqua pad-bottom-50" expand="xxl" id="ServiceList">
                    <h1 className="pad-10 w-75 text-dark-blue">Services</h1>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                    <Row className="w-75 text-dark-blue" sm={2}>
                        <Col>A Service Type</Col>
                        <Col className="text-right">Cost</Col>
                    </Row>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                    <Row className="w-75 text-dark-blue" sm={2}>
                        <Col>A Service Type</Col>
                        <Col className="text-right">Cost</Col>
                    </Row>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                    <Row className="w-75 text-dark-blue" sm={2}>
                        <Col>A Service Type</Col>
                        <Col className="text-right">Cost</Col>
                    </Row>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                    <Row className="w-75 text-dark-blue" sm={2}>
                        <Col>A Service Type</Col>
                        <Col className="text-right">Cost</Col>
                    </Row>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                    <Row className="w-75 text-dark-blue" sm={2}>
                        <Col>A Service Type</Col>
                        <Col className="text-right">Cost</Col>
                    </Row>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                    <Row className="w-75 text-dark-blue" sm={2}>
                        <Col>A Service Type</Col>
                        <Col className="text-right">Cost</Col>
                    </Row>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                    <Row className="w-75 text-dark-blue" sm={2}>
                        <Col>A Service Type</Col>
                        <Col className="text-right">Cost</Col>
                    </Row>
                    <div className="w-75"><Divider className="bg-dark-blue"/></div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}