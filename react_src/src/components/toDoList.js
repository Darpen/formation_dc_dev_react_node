import React, { Component } from "react";
import Admin from "./admin";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastille: []
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pastilles.map((tache, index) => {
            return (
              <li id={index}>
                <span>
                  {tache.title} {tache.label}
                </span>
              </li>
            );
            })}
        </ul>
        <Admin users={this.props.users} addPastille={this.props.addPastille} />
      </div>
    );
  }
}

export default ToDoList;
