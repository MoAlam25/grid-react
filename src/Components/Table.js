import React, { Component } from "react";
import TableColumn from "./TableColumn";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: props.rows,
      columns: props.columns
    }
  }

  createRows() {
    let rowsArray = [];

    for (let i = 0; i < this.state.rows; i++) {
      rowsArray.push(
        <tr> 
          <TableColumn
            rows = {this.state.rows}
            columns = {this.state.columns}
         />
        </tr>)
    }
    return rowsArray;
  }
              

  render() {
      return (
        <table>
          <tbody>
              <tr><td></td></tr>
          </tbody>
        </table>
      )
  }
}
