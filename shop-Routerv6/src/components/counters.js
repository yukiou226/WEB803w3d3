import React, { Component } from "react";
import Counter from "./counter";
import { faRedo, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
        >
        <FontAwesomeIcon icon={faRedo} />
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={counters.length !== 0 ? "disabled" : ""}
        >
        <FontAwesomeIcon icon={faRecycle} />
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;