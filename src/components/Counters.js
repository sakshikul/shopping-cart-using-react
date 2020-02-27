import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary ml-4 mt-4 mb-4"
          onClick={this.props.resetValue}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            onDelete={this.props.onDelete}
            counter={counter}
            key={counter.id}
            onAdd={this.props.onAdd}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
