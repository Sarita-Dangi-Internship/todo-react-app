import React, { Component } from "react";

export default class FilterSortItems extends Component {
  render() {
    return (
      <>
        <div className="main-container__items-filter-sort">
          {/* filter section starts */}
          <form action="" className="filter">
            <label for="filter">Filter</label>
            <select id="filter" name="filter" className="select" >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="active">Active</option>
              <option value="due-date">Has due date</option>
            </select>
          </form>
          {/*  filter section ends */}

          {/*  sort section starts */}
          <form action="" className="sort">
            <label for="sort">Sort</label>
            <select id="sort" name="sort" className="select">
              <option value="addedDate">Added date</option>
              <option value="active">Due date</option>
            </select>
            <i className="fas fa-sort-amount-down-alt"></i>
          </form>
          {/*  sort section ends  */}
        </div>
      </>
    );
  }
}
