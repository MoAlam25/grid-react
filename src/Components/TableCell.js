import React, { Component } from "react";


export default class TableCell extends Component {
    constructor(props) {
      super(props);
    }

    // FILL/CHANGE CLICKED CELL COLOR TO SELECTED COLOR
    fillCell = (event) => {
      event.target.style.backgroundColor = this.props.selectedColor;   
    }

    render() {
        return (
          // renders a single cell
          <td className="table-cell" onClick={this.fillCell}></td>
        )
    }
}