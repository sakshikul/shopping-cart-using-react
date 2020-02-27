import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>Nav:{this.props.counters}</h1>
            </div>
        )
    }
}
