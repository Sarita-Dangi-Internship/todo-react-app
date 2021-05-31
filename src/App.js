import "./styles/main.scss";
import Header from "./components/Header";
import AddNewInput from "./components/AddNewInput";
import Filter from "./components/FilterSortItems";
import CheckListItem from "./components/CheckListItem";
import React, { Component } from "react";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default class App extends Component {
  state = {
    newTodo: "",
    createdDate: "",
    completed: false,
    filter: "All",
    isOldestFirst: true,
    sortBy:"addedDate",
    items: [
      {
        task: "go to shopping",
        createdDate: "25 May 2021",
        completed: true,
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
      createdDate: new Date(),
    });
  };

  handleOnDelete = (index) => {
    const items = this.state.items.filter((m, ind) => ind !== index);
    this.setState({ items: items });
  };

  handleOnFilter = (event) => {
    console.log("item selected", event);
    this.setState({ filter: event.target.value });
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

  sortByDate = () => {
    const { items, sortBy } = this.state;
    let sortedItems = items;
    const sorted = sortedItems.sort(
      (d1, d2) =>
        d1.createdDate-d2.createdDate
        // new Date(d1.createdDate).getTime() - new Date(d2.cretedDate).getTime()
        // new Date(d2.createdDate).getTime() - new Date(d1.cretedDate).getTime()
    );
    console.log(sorted);
    // this.setState({ sortedItems: sorted });
  };

  handleChangeOnSort = (sortBy) => {
    this.setState({sortBy})
  }
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
          <Filter
            filterNames={FILTER_NAMES}
            filter={this.state.filter}
            handleChangeOnSort={this.handleChangeOnSort}
            handleOnFilter={this.handleOnFilter}
            handleOnSort={this.sortByDate}
          />

          <div className="main-container__checklist-items">
            <form>
              {this.state.items
                .filter(FILTER_MAP[this.state.filter])
                .map((item, index) => (
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
