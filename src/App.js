import React from 'react';
import logo from './logo.svg';
import './App.css';

// class based component
class App extends React.Component {
  state =  {
    allTodos:[
      {name:"Hi",id: "1"},
      {name:"Yo", id: "2"}
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

  onSubmit= (e)=>{
    e.preventDefault();
    this.setState({allTodos:[...this.state.allTodos,{name:this.state.newTodo,id:this.state.allTodos.length+1}]})    
    this.setState({ newTodo:""})

  }
     
  render() {
    
    return (
      <div>

        {this.renderTodos()}
        
        <form onSubmit={this.onSubmit}>
        
          <input 
          name="newTodo"
          placeholder="meet samanyu" 
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
