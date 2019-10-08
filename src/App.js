import React from 'react';
import logo from './logo.svg';
import './App.css';

// class based component
class App extends React.Component {
  state =  {
    allTodos:[
      {name:"Meet Alexa on 10th",id: "1"},
      {name:"Buy apple", id: "2"}
    ],
    newTodo:""
  }

  renderTodos=()=>{
    return this.state.allTodos.map(todo=>(
      <div> {todo.id}. {todo.name}</div>
    ))
  }

  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  addNewTodo=()=>{
    return {name:this.state.newTodo,id:this.state.allTodos.length+1}
  }

  onSubmit= (e)=>{
    e.preventDefault();
    this.setState({allTodos:[...this.state.allTodos,this.addNewTodo()]})    
    this.setState({ newTodo:""})

  }
     
  render() {
    
    return (
      <div>

        {this.renderTodos()}
        
        <form onSubmit={this.onSubmit}>
        
          <input 
          name="newTodo"
          placeholder="meet sam" 
          value = {this.state.newTodo}
          onChange={this.onChange}
          />

          <input
          type="submit"
          value="add ToDo"
          />

        </form>

      </div>
      );   
  }

}
export default App;
