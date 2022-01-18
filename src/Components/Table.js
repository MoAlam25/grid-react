import React, { Component } from "react";
import TableColumn from "./TableColumn";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  createRows() {
    let rowsArray = [];

    for (let i = 0; i < this.props.rows; i++) {
      rowsArray.push(

          <table>
            <tbody>
                <tr><TableColumn
                  rows = {this.props.rows}
                  columns = {this.props.columns}
                /></tr>
            </tbody>
          </table>
      )
    }
    return rowsArray;
  }
         
  render() { 
    return (
      <>
        {this.createRows()}
      </>
    )
  }
}