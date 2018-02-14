import React from "react";

export default class SignUpView extends React.Component {
    render() {
        return (
            <div>
                <header className="jumbotron jumbotron-fluid bg-info text-white">
                    <div className="container">
                        <h1>Sign Up</h1>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <p>Already have an account? Sign In!</p>
                    </div>
                </main>
            </div>
        );
    }
}