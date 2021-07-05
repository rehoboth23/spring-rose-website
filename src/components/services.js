import MyNav from './nav'
import Footer from './footer'
import {Container, Row, Col} from 'react-bootstrap'
import "../styles/services.scss"
import {
    useLocation
  } from "react-router-dom";
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import * as $ from 'jquery'

export default function Services(props) {
    let loc = useLocation()
    $("html, body")[0].scrollTop = 0
    return (
        <div>
            <MyNav location={loc}/>
            <Container expand="xxl"  className="text-dark-blue mt-180 " id="ServicePageTop">
                <h1 className="pad-10 w-75 ">Our Services<b className="color-lemon">&#8228;</b></h1>
                <p className="w-75 text-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dapibus magna. Nullam sed nunc eu sapien commodo tempus eget ac odio.
                    Maecenas porttitor, orci elementum pharetra convallis, neque orci finibus ex, id venenatis justo orci ut risus. In fermentum tempor tortor
                    sit amet dictum. Etiam fringilla enim sed arcu bibendum varius. Mauris pellentesque bibendum gravida. Curabitur nisl elit, scelerisque vel
                    fermentum vel, consectetur auctor orci. Sed consequat leo quis tellus malesuada, vitae bibendum arcu sodales.
                </p>
            </Container>
            <Container expand="xxl"  className="text-dark-blue" id="ServiceList">
                <h1 className="pad-10 w-75 ">Services</h1>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
                <Row className="w-75" sm={2}>
                    <Col>A Service Type</Col>
                    <Col className="text-right">Cost</Col>
                </Row>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
                <Row className="w-75" sm={2}>
                    <Col>A Service Type</Col>
                    <Col className="text-right">Cost</Col>
                </Row>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
                <Row className="w-75" sm={2}>
                    <Col>A Service Type</Col>
                    <Col className="text-right">Cost</Col>
                </Row>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
                <Row className="w-75" sm={2}>
                    <Col>A Service Type</Col>
                    <Col className="text-right">Cost</Col>
                </Row>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
                <Row className="w-75" sm={2}>
                    <Col>A Service Type</Col>
                    <Col className="text-right">Cost</Col>
                </Row>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
                <Row className="w-75" sm={2}>
                    <Col>A Service Type</Col>
                    <Col className="text-right">Cost</Col>
                </Row>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
                <Row className="w-75" sm={2}>
                    <Col>A Service Type</Col>
                    <Col className="text-right">Cost</Col>
                </Row>
                <div className="w-75"><Divider className="bg-dark-blue"/></div>
            </Container>
            <Footer />
        </div>
    )
}