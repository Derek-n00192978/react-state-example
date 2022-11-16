//class component
import React from "react";

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.startValue
        };
          
    }
    componentDidMount(){
        //strictmode will display to mounted logs.
        this.timerID = setInterval(()=>{
            this.setState({
                count: this.state.count -1
            });
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
   
    render() {
        if (this.state.count > 0){           

            return (
                <><h1>Time remaining: {this.state.count} seconds.</h1>         
                </>
            );
        }
        else{
            clearInterval(this.timerID);
            return(<h1>Times Up!</h1>);
        }
        
    }
}
export default Countdown;