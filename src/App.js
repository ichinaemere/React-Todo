import React from 'react';
// import ReactDOM from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'
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

  constructor(){
    super();
    this.state = {
      myList
    };
  }

  // Class methods update state

  clearCompleted = () => {
    // event.preventDefault();
    this.setState({
      myList: this.state.myList.filter(todo => todo.completed === false)
    })
  }

  addTodo = itemTodo => {

    const newTodo = {
      task: itemTodo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      myList: [...this.state.myList, newTodo]
    });
  };

  toggleTodo = clickedId =>{
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
    } 

    return todo;
  
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
        <TodoList myList={this.state.myList} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
