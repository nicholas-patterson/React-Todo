import React from "react";
import "./TodoForm.css";

const Todo = props => {
  const styles = {
    color: "gray",
    textDecoration: "line-through"
  };

  return (
    <h4
      style={props.todo.completed ? styles : null}
      onClick={() => props.toggleCompleted(props.todo.id)}
      className="text"
    >
      {props.todo.task}
    </h4>
  );
};

export default Todo;
