import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class DeleteButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} disabled={this.props.disabled}>
                Delete Last Item
            </button>
        );
    }
}

DeleteButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.any
};
