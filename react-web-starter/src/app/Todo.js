import React, { Component } from "react";
import { isNumber } from "util";

// const nums = [1, 2, 3, 4];

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
      // newItem: ""
    };
  }

  handleClick(e) {
    e.preventDefault();
    const items = [...this.state.items, this.input.value];
    this.input.value = "";
    this.setState({
      items
      // newItem: ""
    });
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({ newItem: value });
  }

  removeItem(index) {
    const indexNum = parseInt(index, 10);
    const items = [
      ...this.state.items.slice(0, indexNum),
      ...this.state.items.slice(indexNum + 1)
    ];
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <form>
          <input
            ref={node => (this.input = node)}
            // onChange={this.handleInputChange.bind(this)}
            // value={this.state.newItem}
            type="text"
          />
          <button onClick={this.handleClick.bind(this)}>Add Item</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li
              onClick={this.removeItem.bind(this, [index])}
              key={index + item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
