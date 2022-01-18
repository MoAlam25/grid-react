import { Component } from "react";


export default class TableCell extends Component {
    constructor(props) {
      super(props);

      this.state = {
        rows: props.rows,
        columns: props.columns
      }
    }
  
    render() {
        return (
          <td className="table-cell">Hello</td>
        )
    }
}