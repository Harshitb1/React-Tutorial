import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AllTodos from './components/AllTodos';
import AddTodo from './components/AddTodo';


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

  addNewTodo=(todo)=>{
    console.log("new todo :"+ todo)
    return this.setState({allTodos:[...this.state.allTodos,{name:todo,id:this.state.allTodos.length+1}]})    
  }
     
  render() {
    
    return (
      <Router>
        <div>
        <Route
         exact
         path="/"
         component={()=><AllTodos  allTodos={this.state.allTodos}/>}
        
        />
        {/* {this.renderTodos()} */}
        <Route 
        exact
        path="/add"
        component={()=><AddTodo addNewTodo={this.addNewTodo}/>}
        />
        </div>

      </Router>
      );   
  }

}
export default App;
