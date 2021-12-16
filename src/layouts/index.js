import React from "react";
import Loading from "react-loading";

import Header from "./Header";

const AppLayout = ({ children }) => {
  const pageStates = {
    loading: "loading",
    error: "error",
    neutral: "neutral",
  };

  const [pageState, setPageState] = React.useState(pageStates.loading);

  // React.useEffect(() => {
  //   pageState !== "neutral"
  //     ? (document.body.style.overflowX = "hidden")
  //     : (document.body.style.overflowX = "auto");
  // }, [pageState]);

  const childrenVisibilityStyle =
    pageState !== "neutral" ? { display: "none" } : {};

  return (
    <div className="flex column" style={{ minHeight: "100vh" }}>
      <Header />
      <div style={{ position: "relative", flex: 1 }}>
        {
          {
            loading: (
              <div
                className="flex justify-center py-60"
                style={{ width: "100%" }}
              >
                <Loading type="spin" color="lightgray" width={47} />
              </div>
            ),
            error: <div>Something went wrong! Please report this.</div>,

            neutral: null,
          }[pageState]
        }
        <div style={{ ...childrenVisibilityStyle }}>
          {React.cloneElement(children, { pageStates, setPageState })}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
