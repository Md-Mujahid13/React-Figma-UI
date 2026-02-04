    import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
    import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
    import { Col, Container, Row } from "react-bootstrap";


    const Header = () => {
        return (
            <>
                <div className="header-details-top">
                    <Container fluid>
                        <Row>
                            <Col md={8}>
                    <div className="header-details">
                        <div className="details-phone"><FontAwesomeIcon icon={faPhone} color="#FFD25D"/><span>(00)875 784 5682</span></div>
                        <div className="details-gmail"><FontAwesomeIcon icon={faEnvelope} color="#FFD25D"/><span>pacargoinfo@gmal.com</span></div>
                        <div className="details-location"><FontAwesomeIcon icon={faLocationDot} color="#FFD25D" /><span>238,Arimantab,Moska-USA.</span></div>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="header-icons">
                        <FontAwesomeIcon icon={faFacebookF} color="#17254E" />
                        <FontAwesomeIcon icon={faInstagram} color="#17254E"/>
                        <FontAwesomeIcon icon={faLinkedinIn} color="#17254E"/>
                        <FontAwesomeIcon icon={faYoutube} color="#17254E" />
                    </div>
                    </Col>
                    </Row>
                    </Container>
                </div>
                <div className="header">
                    <div className="header-logo"></div>
                    <div className="header-li-items">
                            <div className="header-li-home"><li><a href="/">Home</a></li></div>
                            <div className="header-li-About-Us"><li><a href="about">About Us</a></li></div>
                            <div className="header-li-Courses"><li><a href="courses">Courses</a></li></div>
                            <div className="header-li-Pages"><li><a href="coursesdetails">Courses Details</a></li></div>
                            <div className="header-li-Blog"><li><a href="event">Event</a></li></div>
                            <div className="header-li-Contact"><li><a href="eventdetails">Event Details</a></li></div>
                            <div className="header-li-Contact"><li><a href="teacher">Teacher</a></li></div>
                    </div>
                    <div className="header-button-purpul">
                        <button type="button">Create Account <div className="cyrclediv"><FontAwesomeIcon icon={faArrowRightLong} size="xl"></FontAwesomeIcon></div></button>
                    </div>
                </div>
            </>
        )
    }
    export default Header;