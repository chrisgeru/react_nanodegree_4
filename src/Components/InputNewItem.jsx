import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class InputNewItem extends Component {

    inputIsEmpty = () => {
        return this.props.value === '';
    };

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        );
    }
}

InputNewItem.propTypes = {
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.any
};
