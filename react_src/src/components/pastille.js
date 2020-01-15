import React, { Component } from "react";
import "../pastille.css";

class Pastille extends Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.pastille.title}</h1>
        <div className="pastille">
          <div className="info">
            <div className="info-header">
              <div className="label">
                <p>Label</p>
                <p className="labelName">{this.props.pastille.label}</p>
              </div>
              <div className="date">
                <p>Date debut</p>
                <p>{this.props.pastille.dateDebut}</p>
              </div>
              <div className="date">
                <p>Date fin</p>
                <p>{this.props.pastille.dateFin}</p>
              </div>
            </div>
            <div className="description">
              <p>Description</p>
              <p>{this.props.pastille.description}</p>
            </div>
            <div className="pj">
              <p>Piéces jointes</p>
              <div>{this.props.pastille.files}</div>
            </div>
            <div className="step">
              <p>Etapes</p>
              <ul className="stepList">
                {this.props.pastille.steps.map((step, i) => {
                  return (
                    <li key={i}>
                      <input type="checkbox" id={step} name="etapes" />
                      <label for="etapes">{step}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="members">
            <h2>Membres</h2>
            <ul />
          </div>
        </div>
      </div>
    );
  }
}

export default Pastille;
