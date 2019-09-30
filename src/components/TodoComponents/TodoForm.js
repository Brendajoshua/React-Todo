import React from 'react';


class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            task: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitTask = event => {
        event.preventDefault();
        this.props.addTask(this.state.task);
    };

    render(){
        return(
            <form onSubmit={this.submitTask}>
                <input
                type="text"
                value={this.task}
                name="task"
                onChange={this.handleChanges}
                placeholder="Add a new Todo task here!"/>
                <button>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear</button>
            </form>
        )
    }
}

export default TodoForm;