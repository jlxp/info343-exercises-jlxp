import React from "react";
import Task from "./Task";

export default class TaskList extends React.Component {
    render() {
        //TODO: if we don't have a snapshot yet,
        //just render a simple "loading..." message
        if (!this.props.tasksSnap) {
            return <p>loading...</p>
        }
        //TODO: loop over the tasks snapshot
        //and create a <Task/> for each child snapshot
        //pushing it into an array
        let tasks = [];
        this.props.tasksSnap.forEach(taskSnap => {
            let task = taskSnap.val();
            tasks.push(<Task key={taskSnap.key} taskSnap={taskSnap} />)
        })

        return (
            <ul>
                {tasks}
            </ul>
        );
    }
}