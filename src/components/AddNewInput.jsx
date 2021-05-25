import React, { Component } from "react";

export default class AddNewInput extends Component {
  render() {
    return (
      <>
        <form action="" className="main-container__add-new-item">
          <input
            type="text"
            name="addItem"
            id="addItem"
            placeholder="Add new..."
          />
          <button id="add">Add</button>
        </form>
      </>
    );
  }
}
