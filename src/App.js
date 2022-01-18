import React, { Component } from "react";
import "./App.css";
import Table from "./Components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "#ffffff",
      rows: 0,
      columns: 0
    };
  }

  // ADDS ROWS TO GRID
  addRow = () => {
    // sets columns to 1 if adding first cell to grid
    if (this.state.rows === 0) {
      this.setState(prevState => { return {columns: prevState.columns + 1 }});
    }
    this.setState(prevState => { return {rows: prevState.rows + 1 }});
  };

  // ADDS COLUMNS TO GRID
  addColumn = () => {
    // sets rows to 1 if adding first cell to grid
    if (this.state.columns === 0) {
      this.setState(prevState => { return {rows: prevState.rows + 1 }});
    }
    this.setState(prevState => { return {columns: prevState.columns + 1 }});
  };

  // REMOVES ROWS FROM GRID
  removeRow = () => {
    // sets columns to zero if removing final row from grid
    if (this.state.rows === 1) {
      this.setState({columns: 0});
  }
    
    if (this.state.rows > 0) {
      this.setState(prevState => {return {rows: prevState.rows - 1}});
    }
  }

  // REMOVES COLUMNS FROM GRID
  removeColumn = () => {
    // sets rows to zero if removing final column from grid
    if (this.state.columns === 1) {
      this.setState({rows: 0});
    }

    if (this.state.columns > 0) {
      this.setState(prevState => {return {columns: prevState.columns - 1}});
    }
  }

  // ALLOWS USER TO SELECT COLORS FROM COLOR SELECTOR
  selectColor = (event) => {
    this.setState({ selectedColor: event.target.value });
  };

  render() {
    return (
      <div>
        <header>Grid Builder</header>
        <div>
          <div className="buttons">
            <button onClick={this.addColumn}> Add Column </button>
            <button onClick={this.addRow}> Add Row </button>
            <button onClick={this.removeColumn}> Remove Column </button>
            <button onClick={this.removeRow}> Remove Row </button>

            <div className="color-selector">
              <label> Select Color: </label>
              <input type="color" id="color-selector" value= {this.state.selectedColor} onChange={this.selectColor}/>
            </div>
          </div>
        </div>
        
        {/* RENDERS TABLE */}
        <Table
          rows = {this.state.rows}
          columns = {this.state.columns}
          selectedColor = {this.state.selectedColor}
        />
      </div>
    );
  }
}
export default App;
