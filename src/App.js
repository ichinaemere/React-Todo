import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

const myList = [
  {
      task: 'Organize desk',
      id: 1207,
      completed: false
  }, 
  
  {
      task: 'Do laundry',
      id: 19091997,
      completed: false
  },
  
  {
      task: 'Meet with Dr. Hammond',
      id: 1121,
      completed: false
  },
  
  {
      task: 'Clean up room',
      id: 19212000,
      completed: false
  }
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need 
  //to work with your state

  constructor(){
    super();
    this.setState = {
      myList
    };
  }

  // Class methods update state

  toggleTodo = (clickedId) =>{
    // no mutating the current state
    // for every array and every object - create a new one (... or array methods: MAP)
    const newTodoList = this.state.myList.map(todo => {
    // loop through the array
    // find the item we clicked on (id, maybe by index)
    //toggle that tasks complete property
    
    if (todo.id === clickedId){
      //toggle completed
      return{
        ...todo,
        completed: !todo.completed
      };
    } else {
      return todo
    }
    });

    // Update state

    this.setState({
      myList: newTodoList
    });
  }

  render() {
    return (
      <div>
        <h2>Chinaemere's To-Do List!</h2>
        <TodoList myList={this.state.myList} toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
