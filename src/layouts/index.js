import React from "react";
import Loading from "react-loading";

import Header from "./Header";

const AppLayout = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loading
      ? (document.body.style.overflowX = "hidden")
      : (document.body.style.overflowX = "auto");
  }, [loading]);

  const childrenVisibilityStyle = loading ? { visibility: "hidden" } : {};

  return (
    <div className="flex column" style={{ minHeight: "100vh" }}>
      <Header />
      <div style={{ position: "relative", flex: 1 }}>
        {loading && (
          <div className="flex justify-center py-60" style={{ width: "100%" }}>
            <Loading type="spin" color="lightgray" width={47} />
          </div>
        )}
        <div style={{ ...childrenVisibilityStyle }}>
          {React.cloneElement(children, { setLoading })}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
