import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footerTop d-flex justify-content-between ">
            <div className="mt-5">
              <h1>BS</h1>
            </div>
            <div className="d-flex mt-5">
              <h3>Ready to get started?</h3>
              <Button className="mb-5" variant="primary">
                Learn More
              </Button>
            </div>
          </div>
          <hr />
          <div className="contentText">
            <Container>
              <Row md={4}>
                <Col>Navigation</Col>
                <Col>Services</Col>
                <Col>About</Col>
                <Col>Contact</Col>
              </Row>
            </Container>
            <Container>
              <Row md={4}>
                <Col>Home Page</Col>
                <Col>Digital Marketing</Col>
                <Col>Our History</Col>
                <Col>Call Us</Col>
              </Row>
            </Container>
            <Container>
              <Row md={4}>
                <Col>About Us</Col>
                <Col xs={6}>Lead Generation</Col>
                <Col>Our Team</Col>
                <Col>Email Us</Col>
              </Row>
            </Container>
            <Container>
              <Row md={4}>
                <Col>Portfolio</Col>
                <Col xs={6}>Web Design</Col>
                <Col></Col>
                <Col>Visit Us</Col>
              </Row>
            </Container>
            <Container>
              <Row md={4}>
                <Col>Career</Col>
                <Col xs={6}>Web Development</Col>
                <Col></Col>
                <Col>Book a Meeting</Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
