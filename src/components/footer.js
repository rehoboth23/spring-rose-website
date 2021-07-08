import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faYelp } from '@fortawesome/free-brands-svg-icons'
import "../styles/footer.scss"

export default function Footer(props) {
    return(    
        <div className="z-1 bg-dark-blue text-white">
            <Container>
                <Row sm={3} className="pad-30 pad-bottom-50">
                    <Col>
                        <h4 className="text-white pad-top-30">Address</h4>
                        <p className="pad-bottom-30">
                            22 Rumuaghaolu Road<br />
                            500272, Port Harcourt<br />
                            Nigeria<br />
                            Tel: +234 803-340-7031<br />
                        </p>
                    </Col>
                    <Col>
                        <h4 className="text-white pad-top-30">OPENING HOURS</h4>
                        <p className="pad-bottom-30">
                            &emsp;24 Hours<br />
                            Monday - Sunday
                        </p>
                    </Col>
                    <Col>
                        <h4 className="text-white pad-top-30">Connect With Us!</h4>
                        <a target="_blank" rel="noreferrer" className="no-style-link white-icon icon-20" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a target="_blank" rel="noreferrer" className="no-style-link white-icon icon-20" href="https://www.linkedin.com">&emsp;<FontAwesomeIcon icon={faLinkedin} /></a>
                        <a target="_blank" rel="noreferrer" className="no-style-link white-icon icon-20" href="https://www.yelp.com">&emsp;<FontAwesomeIcon icon={faYelp} /></a>
                        <a target="_blank" rel="noreferrer" className="no-style-link white-icon icon-20" href="https://www.gmail.com">&emsp;<FontAwesomeIcon icon={faMailBulk} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}