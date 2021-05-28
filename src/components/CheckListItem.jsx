import React, { Component } from "react";

export default class CheckListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      newTodo: this.props.newTodo,
    };
  }

  handleOnEdit = () => {
    this.setState({ isEditMode: true });
  };
  handleOnChange = (event) => {
    this.setState({ newTodo: event.target.value });
    console.log("edit", this.state.newTodo);
  };

  render() {
    const { task, createdDate } = this.props.item;
    const { handleOnDelete, index, handleOnSave } = this.props;
    const { isEditMode } = this.state;
    return (
      <>
       
        <div className="checklist-row">
          {!isEditMode ? (
            <>
              <div className="form-group">
                <label className="styled-checkbox" htmlFor="item1">
                  {task || "Buy groceries for next week"}
                  <input
                    type="checkbox"
                    id="item1"
                    name="item1"
                    value="item1"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="icons-group">
                <i
                  className="fas fa-pen icon icon-pen tooltip"
                  onClick={() => {
                    this.handleOnEdit(index);
                  }}
                >
                  <span className="tooltiptext">Edit todo</span>
                </i>
                <i
                  className="fas fa-trash-alt icon icon-trash tooltip "
                  onClick={() => {
                    handleOnDelete(index);
                  }}
                >
                  <span className="tooltiptext">Delete todo</span>
                </i>
                <div className="date">
                  <i className="fas fa-info-circle tooltip">
                    <span className="tooltiptext">Created date</span>
                  </i>
                  {createdDate || "28 Jun 2020"}
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="form-group">
                <label className="styled-checkbox" htmlFor="item3">
                  <input
                    type="checkbox"
                    id="item3"
                    name="item3"
                    value="item3"
                  />
                  <span className="checkmark"></span>
                </label>
                <input
                  type="text"
                  className="edit-input"
                  defaultValue={task}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="icons-group">
                <i
                  className="fas fa-check icon icon-pen tooltip"
                  // onClick={() => {
                  //   handleOnSave(index);
                  // }}
                >
                  <span className="tooltiptext">Save todo</span>
                </i>
                <i
                  className="fas fa-trash-alt icon icon-trash tooltip"
                  onClick={() => {
                    handleOnDelete(index);
                  }}
                >
                  <span className="tooltiptext">Delete todo</span>
                </i>
                <div className="date">
                  <i className="fas fa-info-circle tooltip">
                    <span className="tooltiptext">Created date</span>
                  </i>
                  28 Jun 2020
                </div>
              </div>
            </>
          )}
        </div>

        
      </>
    );
  }
}
