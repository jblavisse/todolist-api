import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Task from './Task';

class App extends Component {
  state = {
    tasks: []
  }

  getTask = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    })
  }

  render() {
    const tasksJSX = this.state.tasks.map(task => {
      return (
        <li><Task data={task} /></li>
      )
    })

    return (
      <div className="App">
        <button onClick={this.getTask}>Charger ma tâche</button>
        
        <ul>
          {tasksJSX}
        </ul>
      </div>
    );
  }
}

export default App;