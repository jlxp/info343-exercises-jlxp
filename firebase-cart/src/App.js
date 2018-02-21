import React, { Component } from 'react';

import TrackCard from "./TrackCard";
import * as itunes from "./itunes";

import firebase from "firebase/app";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: "",                  //the iTunes search query string
            tracks: [],             //the tracks returned from the iTunes API
            cartSnap: undefined     //the current firebase snapshot for the
                                    //user's shopping cart items
        }

        //for this exercise we will just sign-in
        //anonymously, which creates a new user account
        //but doesn't capture anything about the user
        firebase.auth().signInAnonymously();
    }
    componentDidMount() {
        //TODO: start listening for authentication state change events
        
            //TODO: if the `user` passed to your listener function is truthy, 
            //create a Firebase reference to  the path "{user-id}/cart", 
            //where "{user-id}" is replaced with the current user's `.uid` 
            //property value. This reference will contain one child key for 
            //each track you add to the cart, with the track data as the 
            //associated value.

            //then start listening for value change events at that ref
            //and whenever you get a new snapshot, update the `cartSnap`
            //state value to match.

    }
    componentWillUnmount() {
        //TODO: stop listening for authentication change events
        //and for value change events from the user's cart reference
    }
    handleSearch(evt) {
        //search the iTunes API and set our state to the results
        evt.preventDefault();
        fetch(itunes.SEARCH_API + this.state.q)
            .then(itunes.handleResponse)
            .then(data => this.setState({tracks: data.results, fetchError: undefined}))
            .catch(err => this.setState({fetchError: err}));
    }
    handleAdd(track) {
        //TODO: add the track passed as the parameter
        //to the Firebase cart snapshot (stored as `cartSnap`
        //in this component's state)
        
    }
    handleRemove(cartItemRef) {
        //TODO: this method should receive a firebase
        //database reference to the cart item to remove.
        //remove that item from the database.
        
    }
    render() {
        let cartTracks = [];
        //TODO: if this.state.cartSnap is truthy
        //then iterate over each child of that snapshot
        //and push a <TrackCard /> element into the `cartTracks`
        //array. Add a child <button> element within the <TrackCard/>
        //that one can click to remove the track from the cart.
        //when that button is clicked, call your `handleRemove()` method,
        //passing the firebase reference to remove. See the use of <TrackCard/>
        //in the search results below for an example.

        return (
            <div>
                <header className="jumbotron jumbotron-fluid">
                    <div className="container-fluid">
                        <h1>
                            <svg fill="#000000" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                            </svg>
                            Buy Songs
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-9">
                                <h2>Search</h2>
                                <form className="mb-4" onSubmit={evt => this.handleSearch(evt)}>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="what do you want to buy?"
                                        value={this.state.q}
                                        onInput={evt => this.setState({q: evt.target.value})}/>
                                </form>
                                <div className="row">
                                    {
                                        this.state.fetchError ? 
                                        <div className="alert alert-danger">
                                            {this.state.fetchError.message}
                                        </div> :
                                        this.state.tracks.map(t => 
                                            <div className="col-xs-12 col-md-3 text-center" key={t.trackId}>
                                                <TrackCard track={t}>
                                                    <button className="btn btn-outline-primary"
                                                        onClick={() => this.handleAdd(t)}>
                                                        add to cart
                                                    </button>
                                                </TrackCard>
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                            <div className="col-md-3">
                                <h2>Cart</h2>
                                {cartTracks}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
