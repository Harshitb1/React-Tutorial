import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AddTodo extends React.Component{

    state={
        newTodo:""
    };

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    renderTodos=(allTodos)=>{
        return allTodos.map(todo=>(
          <div> {todo.id}. {todo.name}</div>
        ))
    }

    render(){
       
        return(
            <div>
            <div>
            {this.renderTodos(this.props.allTodos)}
            </div>
            <Link to="/add">Add New Todo</Link>

            </div>
            

        );
    }
}

export default AddTodo;