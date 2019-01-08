import React, { Component } from 'react'
import Proptypes from 'prop-types';

export class Addtodo extends Component {
    // Class specific state
    state = {
        title: ''
    }
 
    //  Setting local class state
    onChange = (e) => this.setState({ title: e.target.value });

    //  Passing state up to App component
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

  render() {
    return (
      <form style={{ display: 'flex' }}
            onSubmit={this.onSubmit}
            >
          <input 
            type="text" name="title"
            placeholder="Add Todo..."
            style={{ flex: '10', padding: '5px' }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input 
            type='submit'
            value='Submit'
            className='btn'
            style={{ flex: '1' }}
            />
      </form>
    )
  }
}

// PropTypes - array of objects
Addtodo.propTypes = {
  addTodo: Proptypes.func.isRequired
}


export default Addtodo