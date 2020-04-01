import React from "react";
import "../assets/styles/services-coaching.scss";

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
