import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import reducers from "../core/reducers";
// import mainReducers from "../../main-reducers";

const combinedReducers = combineReducers({
  ...reducers,
});

export default function configureStore() {
  return createStore(
    combinedReducers
    // applyMiddleware(thunk)
  );
}

export type RootState = ReturnType<typeof combinedReducers>;
