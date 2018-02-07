import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
    render() {
        let styleClasses = "btn btn-" + this.props.kind;
        return (
            <button className={styleClasses}>
                {this.props.caption}
            </button>
        );
    }    
}

Button.propTypes = {
    kind: PropTypes.oneOf(["primary", "secondary"]),
    caption: PropTypes.string.isRequired
}

Button.defaultProps = {
    kind: "primary"
}