import React from "react";
import Loading from "react-loading";

import Header from "./Header";

interface PageStates {
  loading: string;
  error: string;
  neutral: string;
}

const AppLayout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const pageStates: PageStates = {
    loading: "loading",
    error: "error",
    neutral: "neutral",
  };

  const [pageState, setPageState] = React.useState(pageStates.loading);

  const childrenVisibilityStyle: object =
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
