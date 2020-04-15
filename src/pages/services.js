import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import "../assets/styles/services.scss";

// bootstrap
import Container from "react-bootstrap/Container";

// // icons
import ConsultantIcon from "../assets/icons/conversation.svg";
import DevelopmentIcon from "../assets/icons/code.svg";
import ProgressIcon from "../assets/icons/progress.svg";
import DigitalMarketing from "../assets/icons/social-media-marketing.svg";
import SEOIcon from "../assets/icons/search.svg";

// Components
import SoftwareDevelopment from "../components/Services-SoftwareDevelopment";
import BusinessDevelopment from "../components/Services-BusinessDevelopment";
import ServicesSocialMediaManagement from "../components/Services-SocialMediamanagement";
import Coaching from "../components/Services-Coaching";
import Marketing from "../components/Services-Marketing";
import ServiceCategory from "../components/Service-Category-With-Indicator";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Services = (props) => {
  const [selected, setSelected] = useState("Business Development");
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (props.location.state !== undefined) {
      setSelected(props.location.state.category);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className=" services-banner">
        <div id="color-overlay">
          <div className=" center-text-to-div text-center">
            <h1 className="banner-title text-gold">
              <strong>SERVICES</strong>
            </h1>
            {/* <p className="subtitle  text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec.
            </p> */}
          </div>
        </div>
      </div>

      <Container>
        <div className="carousel-container mt-5">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            showSlither={true}
            numberOfCards={width < 426 ? 1 : width > 425 && width < 769 ? 2 : 3}
            leftChevron={<button>{"<"}</button>}
            rightChevron={<button>{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
            activePosition="left"
            alwaysShowChevrons
          >
            <ServiceCategory
              icon={ProgressIcon}
              title="Business Development"
              selected={selected}
              setSelected={setSelected}
            />
            <ServiceCategory
              icon={ConsultantIcon}
              title="Business Coaching"
              selected={selected}
              setSelected={setSelected}
            />
            <ServiceCategory
              icon={DigitalMarketing}
              title="Digital Marketing"
              selected={selected}
              setSelected={setSelected}
            />
            <ServiceCategory
              icon={SEOIcon}
              title="Social Media Management, Ads Development and SEO"
              selected={selected}
              setSelected={setSelected}
            />
            <ServiceCategory
              icon={DevelopmentIcon}
              title="Software Development"
              selected={selected}
              setSelected={setSelected}
            />
          </ItemsCarousel>
        </div>
      </Container>

      {/* <Container className=" text-center">
        <div noGutters className="services-category my-4">
          <ServiceCategory
            icon={ProgressIcon}
            title="Business Development"
            selected={selected}
            setSelected={setSelected}
          />
          <ServiceCategory
            icon={ConsultantIcon}
            title="Business Coaching"
            selected={selected}
            setSelected={setSelected}
          />
          <ServiceCategory
            icon={DigitalMarketing}
            title="Digital Marketing"
            selected={selected}
            setSelected={setSelected}
          />
          <ServiceCategory
            icon={SEOIcon}
            title="Social Media Management, Ads Development and SEO"
            selected={selected}
            setSelected={setSelected}
          />
          <ServiceCategory
            icon={DevelopmentIcon}
            title="Software Development"
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </Container> */}

      <Container>
        {selected === "Business Coaching" && <Coaching />}
        {selected === "Business Development" && <BusinessDevelopment />}
        {selected === "Digital Marketing" && <Marketing />}
        {selected === "Social Media Management, Ads Development and SEO" && (
          <ServicesSocialMediaManagement />
        )}
        {selected === "Software Development" && <SoftwareDevelopment />}
      </Container>
    </div>
  );
};

export default Services;
