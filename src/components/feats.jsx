import React, { Component } from "react";
import Feat from "./feat";

class Feats extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            <h4>Feats</h4>
          </div>
          <ul className="list-group list-group-flush" />
        </div>
      </React.Fragment>
    );
  }
}

export default Feats;
/*
{this.props.feats.map(feat => (
  <Feat key={feat.id} feat={feat} />
))}
*/
