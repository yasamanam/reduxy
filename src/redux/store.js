import { applyMiddleware, createStore } from "redux";

import ReduxThunk from "redux-thunk";
import { reducers } from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
