import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="container">

                <h3 className="text-center">Welcome, Add Your Todos Here</h3>
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group ">
                        <label for="exampleInputTodo">Enter Your Task</label>
                        <input
                            name="todo" 
                            type="text"
                            className="form-control"
                            placeholder="meet sam" 
                            value = {this.state.todo}
                            onChange={this.onChange}
                            id="exampleInputTodo" 
                            aria-describedby="todoHelp"
                        />
                        <small id="todoHelp" class="form-text text-muted">We'll never share your todos with anyone else.</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>  
                </div>
                <br/>
                <div className="row ">
                    <Link className="btn btn-sm btn-dark" to="/">Go back</Link>
                </div>
            </div>
        );
    }
}

export default AddTodo;