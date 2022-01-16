import React from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cellColor: ""
      rows: 1,
      columns: 1
    }
  }
  

  
  
 
addRow = () => {
  this.setState({rows: this.state.rows + 1});
}

  
addColumn = () =>{
  this.setState({columns: this.state.rows + 1});
}

selectColor = () => {
  
}
  
render () {
  return (
    <div>
      <div></div>
      
      
      
      
      
      
      
      
      
      
      
      
       </div>
    
  )
}








  



  
}
export default App;
