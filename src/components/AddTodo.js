import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AddTodo extends React.Component{

    state = {
        todo:""
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit= (e)=>{
        e.preventDefault();
        this.props.addNewTodo(this.state.todo)
        this.setState({ todo:""})
        // this.props.navigation.goBack()
    }
    render(){
        
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    
                    <input 
                    name="todo"
                    placeholder="meet sam" 
                    value = {this.state.todo}
                    onChange={this.onChange}
                    />

                    <input
                    type="submit"
                    value="add ToDo"
                    />

                </form>
                <Link to="/">Go back</Link>

            </div>
        );
    }
}

export default AddTodo;