import React, {Component} from 'react';
import Todo from "../Todo";
import AddTodo from "../AddTodo";



export class Todos extends Component {
  state = {
    addTodoValue: "",
    todos: []
  }
  
  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }
  
  handleDelete = todo => {
    const todos = this.state.todos.filter(t => t.id !== todo);
    this.setState({ todos });
  }

  handleDone = todo => {
    const todos = [...this.state.todos];
    todos.map(t => {
      if (t.id === todo.id) {
        t.isDone = !t.isDone;
      }
      
      return t;
    });
    
    this.setState({todos});
  }
  
  addNewTodo = value => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push(
        {
          id: this.getTime(),
          value: value,
          isDone: false
        }
      );
      
      this.setState({ addTodoValue: "", todos })
    } else {
      console.log("Please Add Todo Text");
    }
  }

  render() {
    return (
      <table className="table">
          <tbody>
            {this.state.todos.map((todo, index) => (
              <tr key={todo.id}>
                <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-center">
                <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
              </td>
            </tr>
          </tbody>
      </table>
    );
  }
}

export default Todos;