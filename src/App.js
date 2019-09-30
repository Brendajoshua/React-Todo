import React,{Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Work Out',
    id: 1528817084360,
    completed: false
  }

];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItem: todoData
    };
  }

  toggleTask = id => {
    // console.log(id);
    this.setState({
      todoItem: this.state.todoItem.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  }

  //Update the todo item on our state object
  //use this.setState
  //loop through the arr
  //find which element we clicked update the ""
  addItem = taskName => {
    const newItem = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItem: [...this.state.todoItem, newItem]
    })
    localStorage.setItem('todo', JSON.stringify(this.state)); 
  }

  clearCompleted = () => {
    this.setState({
      todoItem: this.state.todoItem.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Brenda's Todo App!</h2>
          <TodoForm
          addItem={this.addItem}
          // clearCompleted={this.clearCompleted}
        />
        </div>
        <TodoList
          todoItem={this.state.todoItem}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
        <button class="clear-btn" onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}
export default App;