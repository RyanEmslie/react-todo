import React, { Component } from 'react'
import Proptypes from 'prop-types';

export class Todoitem extends Component {
  
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottome: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  // Using an arrow function bypasses need to bind 'this' 
  toggleComplete = (e) => {
    console.log(this.props)
  }

  
  render() {
    
    // Destructoring
    const { id, title } = this.props.todo;
    
    return (
      //Line vs Variable styles
      // <div style={{ backgroundColor: 'lightblue' }}>
      <div style={ this.getStyle() }>
        <p>
        {/* using props.toggleComplete to move state up to 'component tree'*/}
        <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/> { '' }
        { title }
        <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)} >X</button>
        </p>
      </div>
    )
  }
}


//Style variable example
const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRaduis: '50%',
  cursor: 'pointer',
  float: 'right'
}

// PropTypes - array of objects
Todoitem.propTypes = {
  toggleComplete: Proptypes.func.isRequired,
  deleteTodo: Proptypes.func.isRequired
}



export default Todoitem
