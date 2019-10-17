import React, { Component } from "react";
import Ability from "./ability";

class Abilities extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            <h4>Abilities</h4>
          </div>
          <div className="card-body">
            <div className="div-vertical">
              <div className="row">
                <div className="col-sm-3">
                  <label>Modifier</label>
                </div>
                <div className="col-sm-3">
                  <label>Score</label>
                </div>
              </div>
              {this.props.abilities.map(ability => (
                <Ability
                  key={ability.id}
                  onIncrease={this.props.onIncrease}
                  onDecrease={this.props.onDecrease}
                  ability={ability}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Abilities;
