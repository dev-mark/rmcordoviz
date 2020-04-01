import React from "react";
import "../assets/styles/zija.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function ZijaProductContainer(props) {
  return (
    <Col lg={3} className=" mr-3 ml-3 featured-product-container">
      <div className="product-overlay">
        <h5>{props.productName}</h5>
      </div>

      <img
        src={props.productImage}
        alt="Zija Product"
        height="200"
        width="200"
      />
    </Col>
  );
}

export default ZijaProductContainer;
