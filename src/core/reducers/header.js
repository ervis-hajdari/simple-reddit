export const SET_HEADER_DESCRIBER = "MAIN/SET_HEADER_DESCRIBER";

export const setHeaderDescriber = (headerDescriber, byUser) => {
  if (byUser)
    headerDescriber = (
      <>
        {headerDescriber}
        <span className="ml-62">
          by
          <a className="ml-12" style={{ color: "#47e2ea" }}>
            /u/{byUser}
          </a>
        </span>
      </>
    );

  return {
    type: SET_HEADER_DESCRIBER,
    headerDescriber,
  };
};

export default function reducer(
  state = {
    headerDescriber: "",
  },
  action
) {
  switch (action.type) {
    // Language
    case SET_HEADER_DESCRIBER:
      return {
        ...state,
        headerDescriber: action.headerDescriber,
      };

    default:
      break;
  }
  return state;
}
