import React, {Component} from "react";
import TableCell from "./TableCell"

export default class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        rows: props.rows,
        columns: props.columns
      }
    }

    createArrayFromColumns = () => {
        let columnsArray = []
        for (let i = 0; i < this.state.columns; i++) {
            columnsArray.push(<TableCell/>);
        }

        return columnsArray;
    }
  
    render() {
        console.log(this.createArrayFromColumns())
        return (
            <td>
                {this.createArrayFromColumns()}
            </td>
        )
    }
}
  
// createArrayFromColumns = () => {
    //     console.log(this.state.columns)
    //     let rowsArray = [];
    //     for (let i = 0; i < this.state.columns; i++) {
    //         rowsArray.push(<tr><TableCell
    //             rows = {this.state.rows}
    //             columns = {this.state.columns}
    //         /></tr>);
    //     }
    //     return rowsArray;
    // }


