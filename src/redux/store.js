import { applyMiddleware, createStore } from "redux";

import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { reducers } from "./reducers/index";

const middlewareEnhancer = applyMiddleware(
  // logger,
  ReduxThunk
);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(reducers, undefined, composedEnhancers);

export default store;
