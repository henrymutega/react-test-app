import { Component } from "react";

class Count extends Component{
    constructor(){
        super();
        this.state = {
            count : 0,
        };
    }
    increment = () => {
        this.setState({
            count: this.state.count + 2, 
        });
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render(){
        return(
        <div>
            <h3>Counting: {this.state.count}</h3>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div> 
        

        )
    }
}

export default Count;