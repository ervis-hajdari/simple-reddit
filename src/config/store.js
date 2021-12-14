import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import reducers from "../core/reducers";
// import mainReducers from "../../main-reducers";

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,
    })
    // applyMiddleware(thunk)
  );
}
