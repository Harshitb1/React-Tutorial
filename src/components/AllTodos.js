import React from 'react';
import { Link } from 'react-router-dom';

class AddTodo extends React.Component{

    state={
        newTodo:""
    };

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    renderTodos=(allTodos)=>{
        return allTodos.map(todo=>(
            <li class="list-group-item" key={todo.id}> {todo.id}. {todo.name}</li>

        //   <div key={todo.id}> {todo.id}. {todo.name}</div>
        ))
    }

    render(){
       
        return(
            <div className="container">
                <h3 className="text-center"> Here are your all TODOS</h3>
                <div className="container">
                <ul class="list-group">
                    {this.renderTodos(this.props.allTodos)}
                </ul>
                </div>
                <br/>
                <div className="text-center ">
                    <Link className="btn btn-sm btn-secondary" to="/add">Add New Todo</Link>
                </div>
            </div>
        );
    }
}

export default AddTodo;