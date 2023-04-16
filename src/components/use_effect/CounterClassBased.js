import React from 'react';


class CounterClassBased extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0,
            message: 'initial message'
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
    }

    componentDidMount(){
        //This will be called after immediate render method called
        console.log("componentDidMount ")
        console.log('count is incremented', this.state.count)
        console.log('message is updated as ', this.state.message)
        document.title = `You clicked the increment button ${this.state.count} times`
    } 

    componentDidUpdate(){
        //This will be called when these is an update in the state and props
        console.log("componentDidUpdate")
        console.log('count is incremented', this.state.count)
        console.log('message is updated as ', this.state.message)
        document.title = `You clicked the increment button ${this.state.count} times`
    }

    handleClick(){
        this.setState({
            count: this.state.count+1
        })
    }

    handleMessage() {
        this.setState({
            message: 'message is updated'
        })
    }

    

    render(){
        return(
        <div>
            <button onClick={this.handleClick}>Increment</button>
            <p>Count is {this.state.count}</p>
            <button onClick={this.handleMessage}>Update Message</button>
        </div>
        )
    }
} 


export default CounterClassBased