import React, { Component } from "react";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

class Ability extends Component {
  render() {
    return (
      <React.Fragment>
        <h6 className="card-title">{this.props.ability.title}</h6>

        <div className="row">
          <div className="col-sm-3">
            <span className="badge ability-badge  m-1">
              {this.props.ability.mod}
            </span>
          </div>
          <div className="col-sm-3">
            <span className="badge ability-badge badge-primary m-1">
              {this.props.ability.value}
            </span>
          </div>
          <div className="col-sm-3">
            <button
              onClick={() => this.props.onIncrease(this.props.ability)}
              className="btn"
            >
              <FaRegPlusSquare className="ability-icon" />
            </button>
          </div>
          <div className="col-sm-3">
            <button
              onClick={() => this.props.onDecrease(this.props.ability)}
              className="btn"
            >
              <FaRegMinusSquare className="ability-icon" />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  // wrap the mod and score in a col-sm-6? and the buttons in the other 6?
  // make the transition to mobile size not look bad.
  getBtnClasses() {
    return "btn btn-secondary btn-sm m-1";
  }
  getBadgeClasses() {
    //check this.props.ability.id to return different colors for the badges
    // end css class with something to concatinate
    // on hold, think it will be color vomit.
    return "badge ability-badge m-1";
  }
}

export default Ability;
