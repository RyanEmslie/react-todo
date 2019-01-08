import React, { Component } from 'react';
import Todoitem from './Todoitem';
import Proptypes from 'prop-types';

class Todos extends Component {
  

  
  
  render() {
    // Arrow function to map through state and return title
    // Key required  
    return this.props.todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} 
          toggleComplete={ this.props.toggleComplete }
          deleteTodo={ this.props.deleteTodo }/>
    ));
  }
}

// PropTypes - array of objects
Todos.propTypes = {
  todos: Proptypes.array.isRequired,
  toggleComplete: Proptypes.func.isRequired,
  deleteTodo: Proptypes.func.isRequired
}


export default Todos;
