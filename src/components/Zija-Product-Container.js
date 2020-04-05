import React from "react";
import "../assets/styles/zija.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function ZijaProductContainer(props) {
  return (
    <Col md={3} lg={3} className="featured-product-container">
      <a href={props.link}>
        <div className="product-overlay">
          <h5>{props.productName}</h5>
        </div>
      </a>

      <img
        src={props.productImage}
        alt="Zija Product"
        height="200"
        width="200"
        className="zija-featured-product-image"
      />
    </Col>
  );
}

export default ZijaProductContainer;
