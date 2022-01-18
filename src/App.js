import React, { Component } from "react";
import "./App.css";
import Table from "./Components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellColor: "black",
      rows: 0,
      columns: 0,
      // cell: {
      //   cellRowPos: 0,
      //   cellColPos: 0,
      //   cellColor: "black"
      // }
    };
  }

  // When incrementing rows, as you loop through and add rows,
  // start the first cellColPos value at 1,
  // and increment the cellColPos value, setting each cellRowPos 
  // to the current this.state.rows value
  // When incrementing columns, as you loop through and add columns,
  // start the first cellColPos value at 1,
  // and increment the cellRowPos, setting each cellColPos
  // to the current this.state.columns value

  // Start off in App, render Table.js
  // Move into Table.js, which will render TableRow.js
  // Table.js will have logic to add columns
  // In order to add a column, must render a new <td></td>
  // at the end of each <tr></tr> that is rendered in TableRow.js
  // Maybe then, could 
  // When increment rows, must iterate the number of columns,
  // and add a new <tr></tr> 
  addRow = () => {
    if (this.state.rows === 0) {
      this.setState(prevState => { return {columns: prevState.columns + 1 }});
    }
    this.setState(prevState => { return {rows: prevState.rows + 1 }});

    console.log("rows: " + this.state.rows);
    console.log("cols: " + this.state.columns);
  };

  addColumn = () => {
    if (this.state.columns === 0) {
      this.setState(prevState => { return {rows: prevState.rows + 1 }});
    }
    this.setState(prevState => { return {columns: prevState.columns + 1 }});
    console.log("rows: " + this.state.rows);
    console.log("cols: " + this.state.columns);
  };

  selectColor = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <div className="buttons">
            <button onClick={this.addColumn}> Add Column </button>
            <button onClick={this.addRow}> Add Row </button>
            <button onClick={this.selectColor}> Select Color </button>
            <button onClick={this.fillAll}> Fill all Cells with Color </button>

            <div className="selectColor">
              <div>
                <label> Select Color: </label>
                <select name="color" id="color-selector" onChange={this.setColor}>
                  <option value="black"> black</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <Table
          rows = {this.state.rows}
          columns = {this.state.columns}
        />
      </div>
    );
  }
}
export default App;
