import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <header className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1><span role="img" aria-label="musical notes icon">🎵</span> Search iTunes</h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="container">
                            <form>
                                <input type="text"
                                    className="form-control"
                                    placeholder="what do you want to listen to?"
                                    />
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="results">
                                TODO: handle search and render results
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
