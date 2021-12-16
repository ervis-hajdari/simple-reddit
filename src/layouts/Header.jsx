import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
  const headerDescriber = useSelector((state) => state.Header.headerDescriber);
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
        <span>{headerDescriber.title}</span>
        {headerDescriber.byUser !== "" && (
          <span className="ml-62">
            by
            <a className="ml-12" style={{ color: "#47e2ea" }}>
              /u/{headerDescriber.byUser}
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
