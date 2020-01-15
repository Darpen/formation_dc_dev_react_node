import React, { Component } from "react";
import "../toDo.css";

import ToDo from "./toDo";
import Admin from "./admin";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastille: {
        title: "",
        label: "",
        description: "",
        dateDebut: "",
        dateFin: "",
        files: "",
        step: "",
        steps: []
      }
    };
  }

  addPastille = pastille => {
    let pastilles = [...this.state.pastille, pastille];
    this.setState({ pastilles: pastilles });
  };

  render() {
    return (
      <div>
        <ToDo pastille={this.state.pastille} />
        <Admin users={this.props.users} />
      </div>
    );
  }
}

export default ToDoList;
