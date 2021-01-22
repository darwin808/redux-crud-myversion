import counterReducer from "./counter";
import loggedReucer from "./isLogged";
import peopleReducer from "./people";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  loggedReucer,
  peopleReducer,
});

export default allReducers;
