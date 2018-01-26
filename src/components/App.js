import React, { Component } from 'react';
import TodoItem from './TodoItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      todoItemText:'',
    }
  }

 componentDidMount() {
    this.props.loadItems();
  }

 handleChange(event){
   //short cut es6
   const {name, value} = event.target;
   this.setState({todoItemText:value});
 }



 buildTodoItems(todos){

     let todoItems = [];
     for (var todoItem of todos) {
        let todo = <TodoItem key={todoItem.id}
                    {...todoItem}> </TodoItem>
        todoItems.push(todo);
     }
     return todoItems;
 }

  render() {
    const { items, todos, addTodoItem,loadItems } = this.props



    return (
      <table>
          <tbody>
          <tr><td>
          <input className="addTodo-input" type="text" onChange={this.handleChange}/><button onClick={addTodoItem.bind(null, this.state.todoItemText)}>ADD</button>
          </td>
          </tr>
          <tr>
          <td>
                    <ul>
                      {this.buildTodoItems(todos)}
                    </ul>
          </td>
          </tr>
          </tbody>
      </table>
    );
  }
}

export default App;
