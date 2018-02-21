import React from "react";
import PropTypes from "prop-types";

export default class TrackCard extends React.Component {
    render() {
        return (
            <figure>
                <img src={this.props.track.artworkUrl100} alt={this.props.track.trackName}/>
                <figcaption>{this.props.track.trackName}</figcaption>
                {this.props.children}
            </figure>
        );
    }
}
TrackCard.propTypes = {
    track: PropTypes.shape({
        trackId: PropTypes.number,
        trackName: PropTypes.string,
        artworkUrl100: PropTypes.string
    })
};
