interface Action {
  type: "MAIN/SET_HEADER_DESCRIBER";
  headerDescriber: { title: string; byUser: string };
}

export const SET_HEADER_DESCRIBER: string = "MAIN/SET_HEADER_DESCRIBER";

export const setHeaderDescriber = (headerDescriber: {
  title: string;
  byUser: string;
}) => ({
  type: SET_HEADER_DESCRIBER,
  headerDescriber,
});

export default function reducer(
  state = {
    headerDescriber: { title: "", byUser: "" },
  },
  action: Action
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
