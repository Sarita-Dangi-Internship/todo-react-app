// import "./App.scss";
import "./styles/main.scss";
import Header from "./components/Header";
import AddNewInput from "./components/AddNewInput";
import Filter from "./components/FilterSortItems";
import CheckListItem from "./components/CheckListItem";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      createdDate: "",
      items: [
        {
          task: "go to shopping",
          createdDate: "25 May 2021",
          status: "pending",
        },
      ],
    };
  }

  handleOnChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  handleDate = (date) => {
    console.log("date", date, new Date(date));
    this.setState({ createdDate: date.toDateString() });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
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

  handleOnSave = (event, index) => {
    event.preventDefault();
    console.log("task", event, index);

    this.setState({
      items: this.state.items.map((item, ind) => {
        if (ind === index) {
          item.task = event.target.value;
          return item;
        }
        return item;
      }),
    });

    // this.setState({
    //   isEditMode: false,
    // });
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
                <CheckListItem
                  key={index}
                  item={item}
                  index={index}
                  handleOnDelete={this.handleOnDelete}
                  // handleOnSave={this.handleOnSave}
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
