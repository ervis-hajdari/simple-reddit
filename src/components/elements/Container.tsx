import React from "react";

interface ContainerProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ onClick, children }) => {
  return (
    <div className="border-gray radius-1 flex" onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
