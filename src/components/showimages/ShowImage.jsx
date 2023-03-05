import React from "react";
import "../home/Home.css";

const ShowImage = ({ title, largeImg, smallImg }) => {
  return (
    <div className="home-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImg} title={title}>
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImg} className="flex-img" alt={title}/>{" "}
        </a>{" "}
      </div>
    </div>
  );
};
export default ShowImage;
