import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDelete, counter, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col-10">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-1">
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-1"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}>
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-sm btn-danger m-1">
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
