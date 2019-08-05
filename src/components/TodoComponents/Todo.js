import React from "react";

const Todo = props => {
  console.log("props in todo", props);

  const styles = {
    color: "gray",
    textDecoration: "line-through"
  };

  return (
    <h4
      style={props.todo.completed ? styles : null}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      {props.todo.task}
    </h4>
  );
};

export default Todo;
