import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  deleteCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <>
        <Header />
        <Container fixed>
          <div className="formContainer">
            <h2 className="title">Welcome to your Todo App!</h2>
            <TodoList
              todos={this.state.todos}
              toggleCompleted={this.toggleCompleted}
            />
            <TodoForm
              addItem={this.addItem}
              deleteCompleted={this.deleteCompleted}
            />
          </div>
        </Container>
      </>
    );
  }
}

export default App;
