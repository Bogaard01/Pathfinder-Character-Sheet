import React, { Component } from "react";
import Abilities from "./abilities";
import Skills from "./skills";
import Feats from "./feats";

class Character extends Component {
  state = {
    abilities: [
      { id: "00", title: "Strength", value: "10", mod: "0" },
      { id: "01", title: "Dexterity", value: "12", mod: "1" },
      { id: "02", title: "Constitution", value: "13", mod: "1" },
      { id: "03", title: "Intelligence", value: "14", mod: "2" },
      { id: "04", title: "Wisdom", value: "15", mod: "2" },
      { id: "05", title: "Charisma", value: "16", mod: "3" }
    ],
    skills: [
      {
        id: "00",
        title: "Acrobatics",
        ranks: "4",
        abilityId: "01",
        value: "0",
        equipment: "-2",
        feat: "2",
        trait: "0",
        temp: "0"
      },
      {
        id: "01",
        title: "Appraise",
        ranks: "1",
        abilityId: "03",
        value: "0",
        equipment: "0",
        feat: "0",
        trait: "2",
        temp: "0"
      },
      {
        id: "02",
        title: "Bluff",
        ranks: "2",
        abilityId: "05",
        value: "0",
        equipment: "0",
        feat: "2",
        trait: "0",
        temp: "0"
      },
      {
        id: "03",
        title: "Climb",
        ranks: "1",
        abilityId: "00",
        value: "0",
        equipment: "-4",
        feat: "0",
        trait: "0",
        temp: "1"
      },
      {
        id: "04.0",
        title: "Craft",
        ranks: "0",
        abilityId: "03",
        value: "0",
        equipment: "2",
        feat: "0",
        trait: "0",
        temp: "0"
      },
      {
        id: "04.1",
        title: "Craft",
        ranks: "0",
        abilityId: "03",
        value: "0",
        equipment: "0",
        feat: "0",
        trait: "0",
        temp: "0"
      },
      {
        id: "05",
        title: "Diplomacy",
        ranks: "3",
        abilityId: "05",
        value: "0",
        equipment: "0",
        feat: "0",
        trait: "0",
        temp: "0"
      },
      {
        id: "06",
        title: "Disguise",
        ranks: "1",
        abilityId: "05",
        value: "0",
        equipment: "2",
        feat: "0",
        trait: "0",
        temp: "0"
      },
      {
        id: "07",
        title: "Escape Artist",
        ranks: "3",
        abilityId: "01",
        value: "0",
        equipment: "0",
        feat: "4",
        trait: "0",
        temp: "0"
      },
      {
        id: "08",
        title: "Fly",
        ranks: "0",
        abilityId: "01",
        value: "0",
        equipment: "-5",
        feat: "0",
        trait: "0",
        temp: "0"
      },
      {
        id: "09",
        title: "Heal",
        ranks: "3",
        abilityId: "04",
        value: "0",
        equipment: "2",
        feat: "0",
        trait: "0",
        temp: "2"
      }
    ],
    feats: [
      {
        id: "0000",
        title: "Dodge",
        category: "Combat",
        prereqs: [{ type: "ability", id: "01", value: "13" }],
        text:
          "Your training and reflexes allow you to react swiftly to avoid an opponents' attacks.",
        benefit: [{ type: "AC", subtype: "dodge", value: "1" }],
        normalText: "",
        source: "PF-core",
        ruleSet: [{ type: "PF" }]
      },
      {
        id: "0001",
        title: "Double-Slice",
        category: "Combat",
        prereqs: [
          { type: "ability", id: "01", value: "16" },
          { type: "feat", id: "0002", boolean: true }
        ],
        text:
          "Your off-hand weapon while dual-wielding strikes with greater power.",
        benefit: {
          ability: { type: "", subtype: "", value: "" },
          attack: {},
          skill: {},
          spell: {},
          criticalHit: {},
          armor: {},
          save: {},
          resistance: {},
          speed: {},
          initiative: {}
        },
        normalText: "",
        source: "PF-core",
        ruleSet: [{ type: "PF" }]
      },
      {
        id: "0002",
        title: "",
        category: "",
        prereqs: [{ type: "", value: "" }],
        text: "",
        benefit: [{ type: "", subtype: "", value: "" }],
        normalText: "",
        source: "PF-core",
        ruleSet: [{ type: "PF" }]
      },
      {
        id: "0003",
        title: "",
        category: "",
        prereqs: [{ type: "", value: "" }],
        text: "",
        benefit: [{ type: "", subtype: "", value: "" }],
        normalText: "",
        source: "PF-core",
        ruleSet: [{ type: "PF" }]
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-3">
            <Abilities
              onIncrease={this.handleAbilityIncrease}
              onDecrease={this.handleAbilityDecrease}
              abilities={this.state.abilities}
            />
          </div>
          <div className="col-sm-9">
            <Skills
              onIncrease={this.handleSkillIncrease}
              onDecrease={this.handleSkillDecrease}
              abilities={this.state.abilities}
              skills={this.state.skills}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Feats
              abilities={this.state.abilities}
              skills={this.state.skills}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleAbilityIncrease = ability => {
    const abilities = [...this.state.abilities]; // ... == clone command
    const index = abilities.indexOf(ability); // index of ability changed
    abilities[index] = { ...ability }; // clone that ability
    abilities[index].value++; // increment value
    abilities[index].mod = -5 + Math.trunc(abilities[index].value / 2);
    this.setState({ abilities }); // call setState()
  };

  handleAbilityDecrease = ability => {
    const abilities = [...this.state.abilities]; // ... == clone command
    const index = abilities.indexOf(ability);
    abilities[index] = { ...ability };
    abilities[index].value--;
    abilities[index].mod = -5 + Math.trunc(abilities[index].value / 2);
    if (abilities[index].value <= 0) {
      abilities[index].value = 0;
      abilities[index].mod = 0;
    } //restrict base ability to 0 or more
    this.setState({ abilities });
  };
  /*
  handleSkillIncrease = skill => {
    const abilities = [...this.state.abilities]; // ... == clone command
    const index = abilities.indexOf(ability); // index of ability changed
    abilities[index] = { ...ability }; // clone that ability
    abilities[index].value++; // increment value
    abilities[index].mod = -5 + Math.trunc(abilities[index].value / 2);
    this.setState({ abilities }); // call setState()
  };

  handleSkillDecrease = skill => {
    const abilities = [...this.state.abilities]; // ... == clone command
    const index = abilities.indexOf(ability);
    abilities[index] = { ...ability };
    abilities[index].value--;
    abilities[index].mod = -5 + Math.trunc(abilities[index].value / 2);
    if (abilities[index].value <= 0) {
      abilities[index].value = 0;
      abilities[index].mod = 0;
    } //restrict base ability to 0 or more
    this.setState({ abilities });
    
  };
  */
}

export default Character;
