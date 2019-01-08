import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
//Used to generate random ids
// import uuid from "uuid";
import axios from 'axios';

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

componentDidMount() {

  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    // .then(res => console.log(res.data))
    .then(res => this.setState({ todos: res.data}))
}




  // sets state of completed if the id matches by toggling completed 'true/false'
  toggleComplete = id => {
    console.log(
      "I have been passed from Todoitems component all the way up to App Component- Hey!"
    );
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }) )
    ;
  };

  // Add Todo
  addTodo = title => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: "title",
    //   completed: false
    // };
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact path="/"
              render={props => (
                <React.Fragment>
                  <Addtodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About}>

            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
