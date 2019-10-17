import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-2">
            <label>{this.props.skill.title}</label>
          </div>
          <div className="col-sm-1">
            <span className="badge ability-badge badge-primary m-1">
              {this.getSkillScore(this.props.skill)}
            </span>
          </div>
          <div className="col-sm-2">
            <label>{this.getAbilityName(this.props.skill)}</label>
          </div>
          <div className="col-sm-1">
            <label>{this.props.skill.ranks}</label>
          </div>
          <div className="col-sm-1">
            <label>{this.props.skill.trait}</label>
          </div>
          <div className="col-sm-1">
            <label>{this.props.skill.feat}</label>
          </div>
          <div className="col-sm-2">
            <label>{this.props.skill.equipment}</label>
          </div>
          <div className="col-sm-1">
            <label>{this.props.skill.trait}</label>
          </div>
        </div>
      </React.Fragment>
    );
  }
  getAbilityName = skill => {
    return this.props.abilities.find(ability => ability.id === skill.abilityId)
      .title;
  };
  getSkillScore = skill => {
    const mod = parseInt(
      this.props.abilities.find(ability => ability.id === skill.abilityId).mod
    );
    return (
      mod +
      parseInt(skill.ranks) +
      parseInt(skill.trait) +
      parseInt(skill.feat) +
      parseInt(skill.equipment) +
      parseInt(skill.temp)
    );
  };
}

export default Skill;
