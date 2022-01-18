import React, {Component} from "react";
import TableCell from "./TableCell"

export default class extends Component {
    constructor(props) {
      super(props);
    }

    // used TableColumn instead of TableRow because, based on the way
    // html tables are created, it was easier to create first cells,
    // then columns, and then rows (because the setup of html table
    // is <tr> first and only then <td>, and the number of <td> tags
    // is what creates the number of columns, so setting those first
    // was easier logic to implement)

    
    // pushes a column to the columnsArray, which is then rendered
    // TableColumn, which renders "this.state.columns" number of individual cells,
    // is then rendered once for each row in Table.js
    createColumns = () => {
        let columnsArray = []
        for (let i = 0; i < this.props.columns; i++) {
            columnsArray.push(<TableCell
                selectedColor = {this.props.selectedColor}
            />);
        }

        return columnsArray;
    }
  
    render() {
        return (
            <>
                {/* RENDERS COLUMNS */}
                {this.createColumns()}
            </>
        )
    }
}

