import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {ListItems} from "./Components/ListItems";
import {InputNewItem} from "./Components/InputNewItem";
import {DeleteButton} from "./Components/DeleteButton";

class App extends React.Component {
    state = {
        value: '',
        items: [],
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    addItem = event => {
        event.preventDefault();
        this.setState(oldState => ({
            items: [...oldState.items, this.state.value],
        }));
    };

    deleteLastItem = event => {
        this.setState(prevState => ({items: this.state.items.slice(0, -1)}));
    };

    noItemsFound = () => {
        return this.state.items.length === 0;
    };

    render() {

        return (
            <div className="App">
                <Header/>
                <h2>Shopping List</h2>
                <InputNewItem
                    onSubmit={this.addItem}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <DeleteButton
                    onClick={this.deleteLastItem}
                    disabled={this.noItemsFound()}
                />
                <p className="items">Items</p>
                <ListItems items={this.state.items}/>
            </div>
        );
    }
}

export default App;
