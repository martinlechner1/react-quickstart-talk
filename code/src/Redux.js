import { createStore, combineReducers } from "redux";
const ADD_TODO = "ADD_TODO";

// Action creator
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
// Reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    default:
      return state;
  }
}
// Store
const store = createStore(combineReducers({ todos }));
// Dispatch action (example)
store.dispatch(addTodo("Learn more about redux"));
