import React from "react";
import ReactDOM from "react-dom";
const CelebrationPortal = () => {
  return ReactDOM.createPortal(
    <div className="celebration_con">
      <img src="https://i.gifer.com/DEh.gif" alt="" />
    </div>,
    document.getElementById("celebrationPortal")
  );
};

export default CelebrationPortal;
