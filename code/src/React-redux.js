import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTodo } from "./Redux";

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    }
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(TodoList);
