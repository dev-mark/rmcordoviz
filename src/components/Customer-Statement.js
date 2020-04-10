import React from "react";
import "../assets/styles/index.scss";

function CustomerStatement(props) {
  return (
    <div className="customer-statement-container">
      <div className="customer-statement">
        <h3 className="feedback">"{props.feedback}"</h3>
        <h6>- {props.name}</h6>
      </div>
    </div>
  );
}

export default CustomerStatement;
