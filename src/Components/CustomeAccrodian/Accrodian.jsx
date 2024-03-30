import React from "react";
import "./Accrodian.css";
const Accrodian = ({heading,descriptions,span}) => {
  return (
    <div className="accrodian-main">
      <div className="container-heading">
        <p className="heading-text">{heading}</p>
      </div>
      <div className="cointainer-description">
        <p className="description">
         <span>{span} </span>{descriptions}
        </p>
      </div>
    </div>
  );
};

export default Accrodian;
