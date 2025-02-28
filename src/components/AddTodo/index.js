import React, {Component} from "react";


class AddTodo extends Component {
 state = {
     defaultValue: "",
     value: this.props.addTodoValue
 }

 handleChange = (e) => {
   this.setState({
     value: e.target.value
   });
 }

 clearInput = () => {
   document.getElementById("todoValue").value = "";
   this.setState({value:""});
 }

 addTodo = () => {
   this.props.fooAddTodo(this.state.value);
   this.clearInput();
 }

 render() {
   return (
     <div className="input-group mb-3">
       <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
       <div className="input-group-append">
         <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
       </div>
     </div>
   );
 }
}

export default AddTodo;