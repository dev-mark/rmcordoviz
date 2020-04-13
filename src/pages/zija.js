import React from "react";
import "../assets/styles/zija.scss";

// components
import SuccesStoryContainer from "../components/SuccessStoryContainer";
import ZijaProductContainer from "../components/Zija-Product-Container";

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
      <div className="zija-banner">
        <a href="https://global.zijainternational.com/">
          <div id="zija-color-overlay">
            <div className="center-text-to-div">
              <img
                src={zijaDistributorLogo}
                className="zija-ditributor-logo"
                alt="Zija Distributer logo"
              />
            </div>
          </div>
        </a>
      </div>

      <Container fluid className=" text-center">
        <Row className=" justify-content-center">
          <h1 className="zija-color text-title ">Featured Product</h1>
        </Row>
        <Row noGutters className=" justify-content-center mb-5">
          <ZijaProductContainer
            productName="PERFORMA-BUILD"
            productImage={product1Feature}
            link="https://global.zijainternational.com/shop/products/104126"
          />
          <ZijaProductContainer
            productName="WEIGHT MANAGEMENT BUNDLE"
            productImage={product2Feature}
            link="https://global.zijainternational.com/shop/products/104312"
          />
          <ZijaProductContainer
            productName="AIRTHERAPY RATA DIFFUSER"
            productImage={product3Feature}
            link="https://global.zijainternational.com/shop/products/177366"
          />
        </Row>
      </Container>

      <div>
        <Row noGutters className="shop-now-container text-white">
          <div class="green-overlay">
            <Container>
              <Row>
                <Col
                  xs={12}
                  lg={9}
                  className="  text-center shop-now-text-container "
                >
                  <div className=" text-content">
                    <h1 className="text-white ">THIS IS LIFE UNLIMITED</h1>
                    <p>
                      Health, Wellness & Beauty. Financial & Time Freedom.
                      Personal Development. Active Lifestyle. It’s All Possible
                      with Zija International.
                    </p>
                    <Button
                      variant="outline"
                      className="zija-button  pt-2 pb-2 text-black"
                    >
                      <a href="https://global.zijainternational.com/shop">
                        Shop now
                      </a>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
      </div>

      <Container>
        <Row noGutters className=" justify-content-center">
          <h1 className="zija-color text-title">Success Stories</h1>
        </Row>
        <Row noGutters className=" justify-content-center mb-5">
          <SuccesStoryContainer
            name="Brent Noel"
            image={successStory1}
            description="Proin bibendum at urna ac venenatis. Fusce sodales, leo eu
                  sollicitudin cursus, purus lorem viverra..."
            link="https://blog.zijainternational.com/fall-health-challenge-winner-brent-noel/"
          />
          <SuccesStoryContainer
            name="Matthew Maloy"
            image={successStory2}
            description="Praesent eget hendrerit turpis. Maecenas sed est eu nulla
            placerat dapibus non eu ante. In..."
            link="https://blog.zijainternational.com/health-challenge-matthew-maloy/"
          />
          <SuccesStoryContainer
            name="Kelly Aney"
            image={successStory3}
            description="In hac habitasse platea dictumst. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames..."
            link="https://blog.zijainternational.com/health-challenge-winner-kelly-aney/"
          />
        </Row>
      </Container>

      <Container fluid>
        <Row noGutters className=" justify-content-center">
          <div className="zija-bottom-text-container">
            <h4 className="zija-color">
              BE REWARDED FOR YOUR TALENTS AND EFFORTS
            </h4>
            <p className=" text-white">
              Whatever your goals may be, Zija's turnkey business model,
              easy-to-use tools, unmatched support, and rewarding compensation
              plan make starting and building your own business a reality.
            </p>
            <Button className="learn-more-button ">
              <a
                href="https://global.zijainternational.com/"
                className="text-black"
              >
                <strong>Learn more</strong>
              </a>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default zija;
