import {
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  markTodoAsCompleted,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (err) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(err));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({text});
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todos = await response.json();
    dispatch(createTodo(todos));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
        method: 'delete',
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const markTodoAsCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post',
        });
        const updatedTodo = await response.json();
        dispatch(markTodoAsCompleted(updatedTodo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
}

export const displayAlert = (text) => () => {
  alert(text);
};
