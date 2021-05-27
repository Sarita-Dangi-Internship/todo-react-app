import React, { Component } from "react";
import Calendar from "./Calendar";

export default class AddNewInput extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }
 
  render() {
    const todoItems = this.props.items;
    console.log(todoItems);
    return (
      <>
        <form action="" className="main-container__add-new-item" onSubmit={this.props.handleOnSubmit}>
          <input
            type="text"
            name="addItem"
            id="addItem"
            placeholder="Add new..."
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <span className="todo__calendar">
            <Calendar handleDate={ this.props.handleDate}/>
            <i className="far fa-calendar-alt"></i>
          </span>
          <button id="add" type="submit">
            Add
          </button>
        </form>
      </>
    );
  }
}
