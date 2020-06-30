import React from "react";
import { connect } from "react-redux";
import newTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removoTodo, markTodoAsCompleted } from "./actions";
import { displayAlert } from "./thunks";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, onDisplayAlert }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStatetoProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removoTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: () => dispatch(displayAlert),
});

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
