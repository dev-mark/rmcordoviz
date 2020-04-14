import React from "react";
import "../assets/styles/services.scss";

// bootstrap
import Row from "react-bootstrap/Row";

// images
import leadershipPhoto from "../assets/images/leadership.jpeg";
import executivePhoto from "../assets/images/executive-coaching.jpg";
import managementPhoto from "../assets/images/management-coaching.jpg";
import oneOnonePhoto from "../assets/images/one-on-one.jpeg";
import webinarsPhoto from "../assets/images/webinars.jpeg";
import workshopPhoto from "../assets/images/workshop.jpeg";

// components
import ServiceProvided from "./Service-Provided.js";

function Coaching() {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-gold mt-5 mb-5 text-title text-uppercase">
          Business Coaching
        </h1>
      </div>
      <div className="services-text-content">
        <p>
          At RMCordoviz Inc. we know that running a successful business
          enterprise is never a one-man show and involves an endless
          collaboration{" "}
        </p>
        <p>
          RMCordoviz Inc. Business Coaching and Consultancy will set your
          company apart with top-notch training and coaching programs that aim
          to enhance and develop the skills to bulletproof your staff, such as;
        </p>
        <p>LIST TO FOLLOW</p>
        <p>
          Through our unparalleled coaching and consultancy program, we build a
          trustworthy and long term professional relationship.{" "}
        </p>
      </div>

      <Row className=" justify-content-center mb-5 mt-4">
        <ServiceProvided
          serviceTitle="Leadership"
          serviceDescription="Etiam vel massa nec ipsum feugiat efficitur tincidunt quis nibh.
              Proin nisi nibh, vehicula eu lorem cursus, sollicitudin tincidunt
              orci."
          image={leadershipPhoto}
        />

        <ServiceProvided
          serviceTitle="Management Coaching"
          serviceDescription="Nam vehicula pellentesque enim at venenatis. Proin consectetur
          dapibus quam non scelerisque. Pellentesque ornare erat ac nunc
          vulputate, ac lacinia."
          image={managementPhoto}
        />

        <ServiceProvided
          serviceTitle="Executive Coaching"
          serviceDescription="Aenean tristique vehicula orci ut convallis. Morbi eget magna in
          velit pharetra egestas. Proin fermentum ex id purus rutrum
          consectetur."
          image={executivePhoto}
        />

        <ServiceProvided
          serviceTitle="Webinars"
          serviceDescription="Nam vehicula pellentesque enim at venenatis. Proin consectetur
          dapibus quam non scelerisque. Pellentesque ornare erat ac nunc
          vulputate, ac lacinia."
          image={webinarsPhoto}
        />
        <ServiceProvided
          serviceTitle="Workshops"
          serviceDescription="Aenean tristique vehicula orci ut convallis. Morbi eget magna in
          velit pharetra egestas. Proin fermentum ex id purus rutrum
          consectetur."
          image={workshopPhoto}
        />
        <ServiceProvided
          serviceTitle="one-on-one"
          serviceDescription="Etiam vel massa nec ipsum feugiat efficitur tincidunt quis nibh.
          Proin nisi nibh, vehicula eu lorem cursus, sollicitudin tincidunt
          orci."
          image={oneOnonePhoto}
        />
      </Row>
    </div>
  );
}

export default Coaching;
