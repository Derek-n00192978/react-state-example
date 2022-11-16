//class component
import React from "react";

class Clicky extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: 0
        };
          //really important line of code
          this.handleClick = this.handleClick.bind(this);
      
    }
    componentDidMount(){
        //strictmode will display to mounted logs.
        console.log('mounted')
    }
    handleClick() {
          //really important line of code after 'Clicked',
        this.setState({
            clicked: this.state.clicked + 1
        });
    }
    render() {
        return (
            <>
                <h1>Button has been clicked { this.state.clicked} times</h1>  
                <button onClick={this.handleClick}>Click me</button>          
            </>
        );
    }
}
export default Clicky;