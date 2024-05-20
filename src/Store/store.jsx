import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // For asynchronous actions
import rootReducer from "../Store/reducers/movieReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
