import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.term);
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            name="term"
            value={this.state.term}
          />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
