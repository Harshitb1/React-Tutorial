import React from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends React.Component {
//   state =  {
//     allTodos:[
//       {name:  "Hi",id: "1"},
//       {name:"Yo", id: "2"}
//     ]
//   }
//   console.log(this.state.allTodos)
//   return (

//     <div className="App">
//       {/* {this.state.allTodos} */}
//     </div>

//   );
// }
var todos=[];
//  renderTodos=()=>{
   
//  }

class App extends React.Component {
  state =  {
        allTodos:[
          {name:"Hi",id: "1"},
          {name:"Yo", id: "2"}
        ]
      }
     
  render() {
    
    return this.state.allTodos.map(todo=>(
      <div> {todo.id}. {todo.name}</div>
      ));  
   
 
  }

}
export default App;
