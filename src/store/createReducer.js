import { combineReducers } from "redux";
import combinedReducers from "./combinedReducers";
// import { createBrowserHistory } from "history";
// import { connectRouter } from "connected-react-router";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: combinedReducers,
    // router: connectRouter(createBrowserHistory()),
    ...injectedReducers,
  });
  return rootReducer;
}
