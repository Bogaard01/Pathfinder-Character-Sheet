import React, { Component } from "react";
import Skill from "./skill";

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            <h4>Skills</h4>
          </div>
          <div className="card-body">
            <div className="div-vertical">
              <div className="row">
                <div className="col-sm-2">
                  <label>Skill Name</label>
                </div>
                <div className="col-sm-1">
                  <label>Score</label>
                </div>
                <div className="col-sm-2">
                  <label>Ability</label>
                </div>
                <div className="col-sm-1">
                  <label>Ranks</label>
                </div>
                <div className="col-sm-1">
                  <label>Trait</label>
                </div>
                <div className="col-sm-1">
                  <label>Feat</label>
                </div>
                <div className="col-sm-2">
                  <label>Equipment</label>
                </div>
                <div className="col-sm-1">
                  <label>Temp</label>
                </div>
              </div>
              {this.props.skills.map(skill => (
                <Skill
                  key={skill.id}
                  onIncrease={this.props.onIncrease}
                  onDecrease={this.props.onDecrease}
                  skill={skill}
                  abilities={this.props.abilities}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
