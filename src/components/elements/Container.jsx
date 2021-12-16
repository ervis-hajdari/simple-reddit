import React from "react";

const Container = ({ onClick, children }) => {
  return (
    <div className="border-gray radius-1 flex" onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
