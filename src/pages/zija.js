import React from "react";
import "../assets/styles/zija.scss";

// images
import zijaDistributorLogo from "../assets/images/zija-independent-distributor-logo.png";
import product1Feature from "../assets/images/zija-featured-1.png";
import product2Feature from "../assets/images/zija-featured-2.png";
import product3Feature from "../assets/images/zija-featured-3.png";
import successStory1 from "../assets/images/success-story-1.PNG";
import successStory2 from "../assets/images/success-story-2.PNG";
import successStory3 from "../assets/images/success-story-3.PNG";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function zija() {
  return (
    <div>
      <div className=" zija-banner">
        <div id="zija-color-overlay">
          <div className="center-text-to-div top-layer">
            <img
              src={zijaDistributorLogo}
              className=""
              alt="Zija Distributer logo"
            />
          </div>
        </div>
      </div>
      <div className="services-category  text-center">
        <Container>
          <Row noGutters className=" justify-content-center">
            <h1 className="zija-color mt-5">Featured Product</h1>
          </Row>
          <Row noGutters className=" justify-content-center">
            <Col lg={3} className=" mr-3 ml-3 featured-product-container">
              <div className="">
                <img
                  src={product1Feature}
                  alt="consultant logo"
                  height="200"
                  width="200"
                />
              </div>
            </Col>
            <Col lg={3} className=" mr-3 ml-3 featured-product-container">
              <div className="">
                <img
                  src={product2Feature}
                  alt="marketing logo"
                  height="200"
                  width="200"
                />
              </div>
            </Col>
            <Col lg={3} className=" mr-3 ml-3 featured-product-container">
              <div className="">
                <img
                  src={product3Feature}
                  alt="marketing logo"
                  height="200"
                  width="200"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className=" shop-now-container text-white">
        <Container className="">
          <Row className="">
            <Col lg={9} className=" text-center text-container ">
              <div className=" text-content">
                <h1 className="text-white ">THIS IS LIFE UNLIMITED</h1>
                <p>
                  Health, Wellness & Beauty. Financial & Time Freedom. Personal
                  Development. Active Lifestyle. It’s All Possible with Zija
                  International.
                </p>
                <Button
                  variant="outline"
                  className="zija-button text-white pt-2 pb-2"
                >
                  Shop now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row noGutters className=" justify-content-center">
          <h1 className="zija-color mt-5">Success Stories</h1>
        </Row>
        <Row noGutters className=" justify-content-center">
          <Col lg={3} className=" mr-3 ml-3 success-story-container">
            <div className="success-story-image-holder">
              <img
                className="success-story-image"
                src={successStory1}
                alt="consultant logo"
                height="200"
                width="200"
              />

              <h3 className=" text-left success-story-title">Brent Noel</h3>
              <hr />
              <p className="text-left pl-2">
                Proin bibendum at urna ac venenatis. Fusce sodales, leo eu
                sollicitudin cursus, purus lorem viverra...
              </p>
              <p className="text-left pl-2">
                <a href="https://blog.zijainternational.com/fall-health-challenge-winner-brent-noel/">
                  Read more...
                </a>
              </p>
            </div>
          </Col>
          <Col lg={3} className=" mr-3 ml-3 success-story-container">
            <div className="success-story-image-holder">
              <img
                className="success-story-image"
                src={successStory2}
                alt="consultant logo"
                height="200"
                width="200"
              />

              <h3 className=" text-left success-story-title">Matthew Maloy</h3>
              <hr />
              <p className="text-left pl-2">
                Praesent eget hendrerit turpis. Maecenas sed est eu nulla
                placerat dapibus non eu ante. In...
              </p>
              <p className="text-left pl-2">
                <a href="https://blog.zijainternational.com/health-challenge-matthew-maloy/">
                  Read more...
                </a>
              </p>
            </div>
          </Col>
          <Col lg={3} className=" mr-3 ml-3 success-story-container">
            <div className="success-story-image-holder">
              <img
                className="success-story-image"
                src={successStory3}
                alt="consultant logo"
                height="200"
                width="200"
              />

              <h3 className=" text-left success-story-title">Kelly Aney</h3>
              <hr />
              <p className="text-left pl-2">
                In hac habitasse platea dictumst. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames...
              </p>
              <p className="text-left pl-2">
                <a href="https://blog.zijainternational.com/health-challenge-winner-kelly-aney/">
                  Read more...
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="">
        <Row noGutters className=" justify-content-center text-white">
          <div className="zija-bottom-text-container">
            <h4 className="zija-color mt-3">
              BE REWARDED FOR YOUR TALENTS AND EFFORTS
            </h4>
            <p>
              Whatever your goals may be, Zija's turnkey business model,
              easy-to-use tools, unmatched support, and rewarding compensation
              plan make starting and building your own business a reality.
            </p>
            <Button className="learn-more-button">Learn more</Button>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default zija;
