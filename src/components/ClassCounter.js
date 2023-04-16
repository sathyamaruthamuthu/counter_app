import React from 'react';


class ClassCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    handleClickIncrement = () => {
        this.setState({
            count : this.state.count+1
        })
    }

    handleClickDecrement = () => {
        this.setState({
            count : this.state.count-1
        })
    }

    resetCounter = () => {
        this.setState({
            count: 0
        })
    }

    render(){
        return(
        <div>
            <header>
                <h1>Counter App using State(class state)</h1>
            </header>
            <div>Count {this.state.count}</div>
            <button onClick={this.handleClickIncrement}>Increment !</button>
            <button onClick={this.handleClickDecrement}>Decrement !</button>
            <button onClick={this.resetCounter}>Reset !</button>
        </div>
        )
    }
}

export default ClassCounter