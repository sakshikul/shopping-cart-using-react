import React, { Component } from "react";
import "../App.css";
import NavBar from "./navBar";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  onAdd = ()=> {
  this.setState({
    value : this.state.value + 1
  })
   
  };
  onSub = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  onReset = e => {
    this.setState({
      value: 0
    });
  };
  
  render() {
    const formatFunction = () => {
      if(this.state.value === 0){
        return "zero"
      }else{
        return this.state.value
      }
    }
    return (
      <div className="shopping-cart">
        <NavBar data={this.state.value} />
        <button onClick={this.onReset}>Reset</button>
        <div className="shopping-cart__details" id="1">
          <div className="shopping-cart__details--list">
            <button >{formatFunction()}</button>
            <button onClick={this.onAdd} name="1">
              +
            </button>
            <button onClick={this.onSub} name="2">
              -
            </button>
            <button onClick={this.onDelete} type="delete">
              Delete
            </button>
          </div>
          <div className="shopping-cart__details--list">
          <button >{formatFunction()}</button>
            <button onClick={this.onAdd} name="3">
              +
            </button>
            <button onClick={this.onSub} name="4">
              -
            </button>
            <button onClick={this.onDelete} type="delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
