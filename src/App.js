import React, { Component } from "react";
import "./App.css";
import Table from "./Components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellColor: "black",
      rows: 0,
      columns: 0
    };
  }



  addRow = () => {
    if (this.state.rows === 0) {
      this.setState({ columns: this.state.columns++ });
    }
    this.setState({ rows: this.state.rows++ });
  };

  addColumn = () => {
    if (this.state.columns === 0) {
      this.setState({ rows: this.state.rows++ });
    }
    this.setState({ columns: this.state.columns++ });
  };

  selectColor = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
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
                <option value="white"> white</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
