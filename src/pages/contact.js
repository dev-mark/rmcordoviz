import React from "react";
import "../assets/styles/contact.scss";

// icons
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-solid.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/envelope-solid.svg";
import { ReactComponent as MarkerIcon } from "../assets/icons/map-marker.svg";

// component
import Map from "../components/Map";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function contact() {
  return (
    <Container className="mt-4 mb-5 text-white">
      <div className="pt-2 pb-4">
        <h1>Get in Touch</h1>
      </div>
      <div>
        <Row className="mb-5 justify-content-center">
          <Col lg={6} className="">
            <Form className="text-left  contact-form mb-3">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter your name here" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email here"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Referrals</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter your referrals here"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  Message <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="Tell us what you want"
                />
              </Form.Group>
              <p>
                <small>
                  <em>
                    Required fields are marked{" "}
                    <span className="text-danger">*</span>
                  </em>
                </small>
              </p>

              <Button variant="warning">
                <strong>Send</strong>
              </Button>
            </Form>
          </Col>
          <Col lg={6} className="">
            <Row noGutters>
              <Col className=" contact-info mb-3">
                <h5>
                  <strong>Ross and Melanie Cordoviz</strong>
                </h5>
                <Row noGutters className="mb-1">
                  <Col lg={1}>
                    <i>
                      <PhoneIcon className="contact-icons" />
                    </i>
                  </Col>
                  <Col>+1 877 690 9730</Col>
                </Row>
                <Row noGutters className="mb-1">
                  <Col lg={1}>
                    <i>
                      <EmailIcon className="contact-icons" />
                    </i>
                  </Col>
                  <Col>rmcordoviz@outlook.com</Col>
                </Row>
                <Row noGutters className="mb-1">
                  <Col lg={1}>
                    <i>
                      <MarkerIcon className="contact-icons" />
                    </i>
                  </Col>
                  <Col>600 Crowfoot Crescent, Calgary, AB T3G 0B4, Canada</Col>
                </Row>
              </Col>
            </Row>
            <Row noGutters>
              <Col className=" contact-map">
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7F3Mt64XDAJ6EeXCRxh0H28vD2lZoYh4`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default contact;
