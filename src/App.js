// import "./App.scss";
import "./styles/main.scss";
import Header from "./components/Header";
import AddNewInput from "./components/AddNewInput";
import Filter from "./components/FilterSortItems";
import CheckListItems from "./components/CheckListItem";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      createdDate: "",
      items: [{ task: "go to shopping", createdDate: "25 May 2021" }],
      editMode: "false",
    };
  }

  handleOnChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  handleDate = (date) => {
    console.log("date", date, new Date(date));
    this.setState({ createdDate: date.toDateString() });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("task", this.state.newTodo, this.state.createdDate);
    this.setState({
      items: [
        ...this.state.items,
        {
          task: this.state.newTodo,
          createdDate: this.state.createdDate,
        },
      ],
    });
    this.setState({
      newTodo: "",
    });
  };

  handleOnDelete = (index) => {
    console.log(index);
    const items = this.state.items.filter((m, ind) => ind !== index);
    this.setState({ items: items });
  };

  handleOnEdit = (index) => {

    if (!this.state.editMode) {
      
}
  };
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Header />
          <AddNewInput
            value={this.state.newTodo}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
            handleDate={this.handleDate}
          />
          <Filter />
          <div className="main-container__checklist-items">
            <form>
              {this.state.items.map((item, index) => (
                <CheckListItems
                  key={index}
                  item={item}
                  index={index}
                  handleOnDelete={this.handleOnDelete}
                  handleOnEdit={this.handleOnEdit}
                />
              ))}
            </form>
          </div>
          {/* <CheckListItems
            items={this.state.items}
            handleOnDelete={this.handleOnDelete}
          /> */}
        </div>
      </div>
    );
  }
}
