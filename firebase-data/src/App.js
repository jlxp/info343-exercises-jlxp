import React, { Component } from 'react';

//import firebase application, auth, and database modules
import firebase from "firebase/app";

//our own components
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import PurgeButton from "./PurgeButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksRef: undefined,    //firebase database ref for the current user's tasks
            tasksSnap: undefined    //firebase snapshot containing those tasks
        }

        //for this demo, we will just sign-in 
        //anonymously, which creates a new user account
        //but doesn't capture any info about that user
        firebase.auth().signInAnonymously();
    }
    /**
     * This method is called just after the component has "mounted",
     * which means it rendered for the first time. This is a good place
     * to start listening for Firebase events that modify our state.
     */
    componentDidMount() {
        //TODO: listen for authentication state changes
        //and once the user is authenticated, get a firebase
        //reference to this user's tasks, and start listening
        //for value change events
        this.unlistenAuth = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let userID = user.uid;
                let ref = firebase.database().ref(`${userID}/tasks`);
                this.valueListener = ref.on("value", snapshot => this.setState({tasksSnap: snapshot}));
                this.setState({tasksRef: ref});
            }
        });
    }
    /**
     * This method is called when this component will be "unmounted",
     * meaning it will be removed from the DOM and destroyed. This is
     * the place to stop listening for Firebase events.
     */
    componentWillUnmount() {
        //TODO: stop listening for authentication state changes
        //and stop listening for value change events
        this.unlistenAuth();
        this.state.tasksRef.off("value", this.valueListener);
    }
    render() {
        //TODO: pass the firebase reference/snapshot to our components
        //as properties
        return (
            <div className="App">
                <header className="jumbotron jumbotron-fluid bg-primary text-white">
                    <div className="container">
                        <h1>My Task List</h1>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <NewTaskForm tasksRef={this.state.tasksRef} />
                        <div className="mt-2"></div>
                        <TaskList tasksSnap={this.state.tasksSnap} />
                        <div className="mt-2">
                            <PurgeButton tasksRef={this.state.tasksRef} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
