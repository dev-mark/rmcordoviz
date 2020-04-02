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
        <div id="zija-color-overlay">
          <div className="center-text-to-div">
            <img
              src={zijaDistributorLogo}
              className=" top-layer"
              alt="Zija Distributer logo"
            />
          </div>
        </div>
      </div>
      <div className="services-category  text-center">
        <Container>
          <Row className=" justify-content-center">
            <h1 className="zija-color text-title ">Featured Product</h1>
          </Row>
          <Row noGutters className=" justify-content-center mb-5">
            <ZijaProductContainer
              productName="Product Name"
              productImage={product1Feature}
            />
            <ZijaProductContainer
              productName="Product Name"
              productImage={product2Feature}
            />
            <ZijaProductContainer
              productName="Product Name"
              productImage={product3Feature}
            />
          </Row>
        </Container>
      </div>

      <div className=" ">
        <Row noGutters className="   shop-now-container text-white">
          <div class="linear-green-overlay">
            <Container>
              <Row>
                <Col lg={9} className="  text-center text-container ">
                  <div className=" text-content">
                    <h1 className="text-white ">THIS IS LIFE UNLIMITED</h1>
                    <p>
                      Health, Wellness & Beauty. Financial & Time Freedom.
                      Personal Development. Active Lifestyle. It’s All Possible
                      with Zija International.
                    </p>
                    <Button
                      variant="outline"
                      className="zija-button  pt-2 pb-2"
                    >
                      Shop now
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

      <div>
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
            <Button className="learn-more-button">
              <strong>Learn more</strong>
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default zija;
