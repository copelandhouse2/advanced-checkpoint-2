import {combineReducers} from "redux";

function addresses(state = [], action) {
  if (action.type === "ADDRESSES_LOADED") {
    return action.value;
  }
  return state;
}

function address(state = [], action) {
  if (action.type === "GET_ADDRESS_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  addresses, address
});
export default rootReducer;
