import React, { Component } from "react";

export default class CheckListItems extends Component {
  render() {
    const items = this.props.items;
    console.log(items);
    return (
      <>
        <div className="main-container__checklist-items">
          <form>
            {items.map((item) => (
              <div className="checklist-row">
                <div className="form-group">
                  <label className="styled-checkbox" htmlFor="item1">
                    {item.task || "Buy groceries for next week"}
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
                  <i className="fas fa-pen icon icon-pen tooltip">
                    <span className="tooltiptext">Edit todo</span>
                  </i>
                  <i className="fas fa-trash-alt icon icon-trash tooltip">
                    <span className="tooltiptext">Delete todo</span>
                  </i>
                  <div className="date">
                    <i className="fas fa-info-circle tooltip">
                      <span className="tooltiptext">Created date</span>
                    </i>
                    {item.createdDate || "28 Jun 2020"}
                  </div>
                </div>
              </div>
            ))}

            {/* <!-- first checklist row ends--> */}

            {/* <!-- third checklist row starts--> */}
            {/* <div className="checklist-row">
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
                  value="Sign up for online course edit test"
                />
              </div>
              <div className="icons-group"> */}
            {/* <!-- <i className="fas fa-pen icon icon-pen tooltip"><span className="tooltiptext">Edit todo</span></i> --> */}
            {/* <i className="fas fa-trash-alt icon icon-trash tooltip">
                  <span className="tooltiptext">Delete todo</span>
                </i>
                <div className="date">
                  <i className="fas fa-info-circle tooltip">
                    <span className="tooltiptext">Created date</span>
                  </i>
                  28 Jun 2020
                </div>
              </div>
            </div> */}
            {/* <!-- third checklist row ends--> */}
          </form>
        </div>
      </>
    );
  }
}
