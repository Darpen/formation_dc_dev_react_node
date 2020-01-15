import React, { Component } from "react";
import "../toDo.css";

import Pastille from "./pastille";
import ToDoForm from "./toDoForm";

class ToDo extends Component {
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

  render() {
    return (
      <div>
        <Pastille pastille={this.state.pastille} />
      </div>
    );
  }
}

export default ToDo;
