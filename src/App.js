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
      this.setState(prevState => { return {columns: prevState.columns + 1 }});
    }
    this.setState(prevState => { return {rows: prevState.rows + 1 }});
  };

  addColumn = () => {
    if (this.state.columns === 0) {
      this.setState(prevState => { return {rows: prevState.rows + 1 }});
    }
    this.setState(prevState => { return {columns: prevState.columns + 1 }});
  };

  removeRow = () => {
    if (this.state.rows === 1) {
      this.setState({columns: 0});
  }
    
    if (this.state.rows > 0) {
      this.setState(prevState => {return {rows: prevState.rows - 1}});
    }
  }

  removeColumn = () => {
    if (this.state.columns === 1) {
      this.setState({rows: 0});
    }

    if (this.state.columns > 0) {
      this.setState(prevState => {return {columns: prevState.columns - 1}});
    }
  }

  selectColor = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    console.log("cols" + this.state.columns);
    console.log("rows" + this.state.rows);
    return (
      <div>
        <div>
          <div className="buttons">
            <button onClick={this.addColumn}> Add Column </button>
            <button onClick={this.addRow}> Add Row </button>
            <button onClick={this.removeColumn}> Remove Column </button>
            <button onClick={this.removeRow}> Remove Row </button>
            <button onClick={this.selectColor}> Select Color </button>
            <button onClick={this.fillAll}> Fill all Cells with Color </button>

            <div className="selectColor">
              <div>
                <label> Select Color: </label>
                <input type="color" id="color-selector" value= "#0000ff" onChange={this.selectColor}/>
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
