import "./styles/main.scss";
import Header from "./components/Header";
import AddNewInput from "./components/AddNewInput";
import Filter from "./components/FilterSortItems";
import CheckListItem from "./components/CheckListItem";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    newTodo: "",
    createdDate: "",
    completed: false,
    items: [
      {
        task: "go to shopping",
        createdDate: "25 May 2021",
        completed: false,
      },
    ],
  };

  handleOnChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  handleDate = (date) => {
    this.setState({ createdDate: date.toDateString() });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        {
          task: this.state.newTodo,
          createdDate: this.state.createdDate,
          completed: this.state.completed,
        },
      ],
    });
    this.setState({
      newTodo: "",
    });
  };

  handleOnDelete = (index) => {
    const items = this.state.items.filter((m, ind) => ind !== index);
    this.setState({ items: items });
  };

  toggleTaskCompleted = (index) => {
    const updatedItems = this.state.items.map((item, ind) => {
      if (index === ind) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    this.setState({ items: updatedItems });
  };

  editTask = (index, newtask) => {
    const editedTaskList = this.state.items.map((item, ind) => {
      if (index === ind) {
        return { ...item, task: newtask };
      }
      return item;
    });
    this.setState({ items: editedTaskList });
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
          <Filter onItemSelect={this.handleOnSelect} />
          <div className="main-container__checklist-items">
            <form>
              {this.state.items.map((item, index) => (
                <CheckListItem
                  key={index}
                  item={item}
                  index={index}
                  completed={item.completed}
                  toggleTaskCompleted={this.toggleTaskCompleted}
                  handleOnDelete={this.handleOnDelete}
                  editTask={this.editTask}
                />
              ))}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
