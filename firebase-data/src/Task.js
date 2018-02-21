import React from "react";

//styles for all tasks
let baseStyles = {
    cursor: "pointer"
};

//styles for tasks where `.done` is truthy
let doneStyles = {
    //the ... is the spread operator and in this case
    //it assigns all properties from `baseStyles` to
    //this new object as well
    ...baseStyles,
    textDecoration: "line-through",
    color: "#AAA"
}

export default class Task extends React.Component {
    /**
     * 
     * @param {boolean} curDone the current .done state of the task
     */
    handleClick(curDone) {
        //TODO: update the `done` property of the task;
        //updates must be done through the ref,
        //but remember that you can get the ref for
        //a snapshot by accessing the snapshot's .ref
        //property
        let ref = this.props.taskSnap.ref;
        ref.update({
            done: !curDone
        });
    }
    render() {
        //TODO: get the task properties and render accordingly;
        //use `doneStyles` if the task's .done property is truthy,
        //else use `baseStyles`
        let task = this.props.taskSnap.val();
        let styles = task.done ? doneStyles : baseStyles;
        return (
            <li style={styles} onClick={() => this.handleClick(task.done)} >
                {task.title}
            </li>
        );
    }
}