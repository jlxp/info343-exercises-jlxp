import React from "react";
import PropTypes from "prop-types";

export default class Alerts extends React.Component {
    render() {
        let styleClasses = "alert alert-" + this.props.kind;
        return (
            <div>
                <div className={styleClasses}>
                    {this.props.caption}
                </div>
                <div className="alert"></div>
            </div>
        );
    }
}

Alerts.propTypes = {
    kind: PropTypes.oneOf(["primary", "secondary"]),
    caption: PropTypes.string.isRequired
}

Alerts.defaultProps = {
    kind: "primary"
}