import React, { useState } from "react";
import "../assets/styles/contact.scss";
import axios from "axios";

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

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referrals, setReferrals] = useState("");
  const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    axios
      .post("/email", { name, email, referrals, message })
      .then((response) => {
        console.log(response.response.data);
      })
      .catch((err) => {
        setErrors(err.response.data);
      });
    // setValidated(true);
  };
  return (
    <Container className="mb-5">
      <h1 className="banner-title  text-white">GET IN TOUCH</h1>
      <Row className="  justify-content-center ">
        <Col md={8} lg={6} className="">
          <Form
            noValidate
            className="text-left  contact-form mb-3"
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                isInvalid={errors.name}
                type="text"
                placeholder="Enter your name here"
                value={name}
                onChange={(value) => setName(value.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                isInvalid={errors.email}
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(value) => setEmail(value.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group isInvalid={true}>
              <Form.Label>Referrals</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter your referrals here"
                value={referrals}
                onChange={(value) => setReferrals(value.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                Message <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                isInvalid={errors.message}
                as="textarea"
                rows="4"
                placeholder="Tell us what you want"
                value={message}
                onChange={(value) => setMessage(value.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <p>
              <small>
                <em>
                  Required fields are marked{" "}
                  <span className="text-danger">*</span>
                </em>
              </small>
            </p>

            <Button type="submit" className="gold-background text-gold">
              <strong>Send</strong>
            </Button>
          </Form>
        </Col>
        <Col md={8} lg={6}>
          <Row noGutters>
            <Col className=" contact-info mb-3">
              <h5>
                <strong>ROSS AND MELANIE CORDOVIZ</strong>
              </h5>
              <Row noGutters className="mb-1">
                <Col xs={1} md={1} lg={1}>
                  <i>
                    <PhoneIcon className="contact-icons" />
                  </i>
                </Col>
                <Col>
                  <p>+1 877 690 9730</p>
                </Col>
              </Row>
              <Row noGutters className="mb-1">
                <Col xs={1} md={1} lg={1}>
                  <i>
                    <EmailIcon className="contact-icons" />
                  </i>
                </Col>
                <Col>
                  <p>rmcordoviz@outlook.com</p>
                </Col>
              </Row>
              <Row noGutters className="mb-1">
                <Col xs={1} md={1} lg={1}>
                  <i>
                    <MarkerIcon className="contact-icons" />
                  </i>
                </Col>
                <Col className="text-capitalize">
                  <p>
                    6671S Las Vegas Blvd. Building D, Las Vegas, Nevada, 89119
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row noGutters>
            <Col className=" contact-map">
              <Map height="355px" width="100%" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
