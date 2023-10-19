import React from "react";

const Shimmer = ({ height, width, className, containerClass }) => {
  return (
    <div
      style={{
        height: height,
        width: width,
      }}
      className={` ${containerClass}  shimmer-container `}
    >
      <div className={` ${className}  shimmer `}></div>
    </div>
  );
};

export default Shimmer;
