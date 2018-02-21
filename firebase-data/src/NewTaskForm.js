import React from "react";

export default class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",              //new task title
            fbError: undefined      //firebase error
        };
    }
    handleSubmit(evt) {
        //prevent the browser's default behavior
        //so that it doesn't try to post the form data
        //back to the server
        evt.preventDefault();

        //TODO: construct a new task object
        //and insert it as a child of the tasksRef
        //and handle any errors that might occur!
        let task = {
            title: this.state.title
        };
        this.props.tasksRef.push(task)
            .then(() => this.setState({title: "", fbError: undefined}))
            .catch(err => this.setState({fbError: err}));
    }
    render() {
        return (
            <form onSubmit={evt => this.handleSubmit(evt)}>
                {
                    this.state.fbError ? 
                    <div className="alert alert-danger">{this.state.fbError.message}</div> : 
                    undefined
                }
                <input type="text" 
                    className="form-control"
                    value={this.state.title}
                    onInput={evt => this.setState({title: evt.target.value})}
                    placeholder="what do you need to do?"
                />
            </form>
        );
    }
}
