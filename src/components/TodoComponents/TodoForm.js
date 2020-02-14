import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

        handleChanges = event => {
        // update state with each keystroke
        // console.log(e);
        this.setState({ 
            newTodo: event.target.value });
        // console.log(this.state);
      };

      submitTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        // this.setState({ item: "" });
      };

      render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input type="text" name="todoOne" value={this.state.newTodo}onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        );
      }
}

export default TodoForm;