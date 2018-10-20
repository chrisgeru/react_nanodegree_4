import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ListItems extends Component {
    render() {
        return (
            <ol className="item-list">
                {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        );
    }
}
ListItems.propType = {
    items: PropTypes.array.isRequired
};
