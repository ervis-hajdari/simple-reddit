export const SET_HEADER_DESCRIBER = "MAIN/SET_HEADER_DESCRIBER";

export const setHeaderDescriber = (headerDescriber) => {
  return {
    type: SET_HEADER_DESCRIBER,
    headerDescriber,
  };
};

export default function reducer(
  state = {
    headerDescriber: { title: "", byUser: "" },
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
