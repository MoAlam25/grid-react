import React, { Component } from "react";
import TableColumn from "./TableColumn";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  // returns an array of row elements to be rendered
  createRows() {
    let rowsArray = [];
    for (let i = 0; i < this.props.rows; i++) {
      rowsArray.push(
        <tr className="table-row"><TableColumn
          rows = {this.props.rows}
          columns = {this.props.columns}
          selectedColor = {this.props.selectedColor}
        /></tr>
      )
    }
    return rowsArray;
  }
         
  render() { 
    return (
      <table>
        <tbody>
          {/* RENDERS ROWS */}
          {this.createRows()}
          </tbody>
        </table>
    )
  }
}