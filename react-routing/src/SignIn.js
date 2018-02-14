import React from "react";

export default class SignInView extends React.Component {
    render() {
        return (
            <div>
                <header className="jumbotron jumbotron-fluid bg-primary text-white">
                    <div className="container">
                        <h1>Sign In</h1>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="text"
                                    id="email"
                                    className="form-control"
                                    placeholder="your email address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="your password"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                        <p>Don't have an account yet? Sign Up!</p>
                    </div>
                </main>
            </div>
        );
    }
}