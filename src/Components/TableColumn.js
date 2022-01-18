import React, {Component} from "react";
import TableCell from "./TableCell"

export default class extends Component {
    constructor(props) {
      super(props);
    }

    createColumns = () => {
        let columnsArray = []
        for (let i = 0; i < this.props.columns; i++) {
            columnsArray.push(<TableCell
            />);
        }

        return columnsArray;
    }
  
    render() {
        return (
            <>
                {this.createColumns()}
            </>
        )
    }
}

