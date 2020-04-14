import React, { useState, useEffect } from "react";
import "../assets/styles/services.scss";

// bootstrap
import Container from "react-bootstrap/Container";

// // icons
import ConsultantIcon from "../assets/icons/consultant.svg";
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

const Services = (props) => {
  const [selected, setSelected] = useState("Software Development");

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
            <p className="subtitle  text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec.
            </p>
          </div>
        </div>
      </div>

      <Container className=" text-center">
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
      </Container>

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
