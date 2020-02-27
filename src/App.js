import React, { Component } from "react";
import Navbar from "./components/navBar";
import Counters from "./components/Counters";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }
  onAdd = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({
      counters: counters
    });
  };

  handleDelete = counterId => {
    const counters = [...this.state.counters];
    const x = counters.filter(counter => counter.id !== counterId.id);
    this.setState({
      counters: x
    });
  };
  resetValue = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: counters
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar counters = {this.state.counters.filter(c => c.value> 0).length }/>
        <Counters
          counters={this.state.counters}
          onAdd={this.onAdd}
          onDelete={this.handleDelete}
          resetValue={this.resetValue}
        />
      </React.Fragment>
    );
  }
}
