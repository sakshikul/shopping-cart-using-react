import React, { Component } from 'react'

export default class Counter extends Component {
 
    // If count is equal to 0, then count of number 0 is converted in to words zero.
    valueChange = () => {
        const {value} = this.props.counter
        return value === 0 ? "zero" : value
    }
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value ===0 ? "warning": "primary";
        return classes
    }
 
 
    render() {
        let classes = this.getBadgeClasses()
      
        return (
            <div>
                <span className = {classes}>{this.valueChange()}</span>
                <button className = "btn btn-secondary btn-sm m-2" onClick = {()=>this.props.onAdd(this.props.counter)}>Increment</button>
                <button onClick = {() => this.props.onDelete(this.props.counter)} className = "btn btn-danger btn-sm m-2" >Delete</button>
            </div>
        )
    }
}
