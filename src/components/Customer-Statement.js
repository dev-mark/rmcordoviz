import React from "react";
import "../assets/styles/home.scss";

function CustomerStatement(props) {
  return (
    <div className="customer-statement-container">
      <div className="customer-statement">
        <h3>"{props.feedback}"</h3>
        <h6>- {props.name}</h6>
      </div>
    </div>
  );
}

export default CustomerStatement;