import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
    /* un objectif 
    On sait qu'une fois qu'on a récup les données dans un tableau,
    tasks: 
    [
      {completed: false, id: 1, title: "delectus aut aute…"},
      {completed: false, id: 2, title: "quis ut nam facil…"},
      {completed: false, id: 3, title: "fugiat veniam min…"},
      ...
    ]

    on veut ça en échange

    <ul>
      <li>delectus aut aute...</li>
      <li>quis ut nam facil...</li>
      <li>fugiat veniam min...</li>
      ...
    </ul>

    le .map, ça fait une copie de l'ancien tableau, pour chaque élément
    il va venir prendre le retour d'une fonction et le mettre dans un
    nouveau tableau

    ancien tableau: this.state.tasks
    nouveau tableau: tasksJSX
    */

    const tasksJSX = this.state.tasks.map(bachi => {
      return <li>{bachi.title}</li>
    })

    /*
      tasksJSX  -> []
      1er tour:
      {completed: false, id: 1, title: "delectus aut aute…"}
      va se mettre dans bachi

      Puis on obtient en retour  <li>delectus aut aute</li>
      tasksJSX -> [
        <li>delectus aut aute</li>
      ]

      2ème tour
      {completed: false, id: 2, title: "quis ut nam facil…"}
      va se mettre dans bachi

      Puis on obtient en retour <li>quis ut nam facil...</li>
      tasksJSX -> [
       <li>delectus aut aute</li>,
       <li>quis ut nam facil...</li>
      ]

    */



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