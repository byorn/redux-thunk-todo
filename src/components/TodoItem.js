import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class TodoItem extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    const {id, text,completed,toggleTodoItem, deleteTodoItem } = this.props
    return (
      <li>
        <div><a href="#" className="noteClose" onClick={deleteTodoItem.bind(null,id)}>x</a>
        <div className="note">
                 <button onClick={toggleTodoItem.bind(null,id)}>Done</button>
                  &nbsp;&nbsp; <span style={{textDecoration:completed?'line-through':'none'}}> {text} </span> </div>
        </div>

      </li>
    );
  }
}

function mapStateToProps(state){
  return {

  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(TodoItem);
