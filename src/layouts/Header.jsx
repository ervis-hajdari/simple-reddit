import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className="px-38 p-30 flex align-center"
      style={{
        backgroundColor: "#545871",
        color: "white",
      }}
    >
      <div>
        <h2
          style={{ margin: 0, cursor: "pointer" }}
          onClick={() => navigate({ pathname: "/" })}
        >
          <b>reddit</b>
        </h2>
      </div>
      <div style={{ width: 25 }} />
      <div>
        <span>subreddits</span>
      </div>
    </div>
  );
};

export default Header;
