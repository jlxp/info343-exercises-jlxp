import React from "react";
import PropTypes from "prop-types";

export default class ProgressBar extends React.Component {
    render() {
        let barStyle = {width: this.props.value + "%"}
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={barStyle}></div>
            </div>
        )
    }
}
ProgressBar.propTypes = {
    value: PropTypes.number
};
ProgressBar.defaultProps = {
    value: 100
};
