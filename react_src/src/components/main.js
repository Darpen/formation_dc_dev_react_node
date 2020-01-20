import React, { Component } from "react";

import Connexion from "./connexion";
import ToDoList from "./toDoList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      pastilles: []
    };
  }

  setUsers = users => {
    console.log("Main setUser", users);
    this.setState({ users: users });
  };

  addUser = user => {
    let users = [...this.state.users, user];
    this.setState({ users: users });
  };

  addPastille = pastille => {
    let pastilles = [...this.state.pastilles, pastille];
    this.setState({ pastilles: pastilles });
  }

  render() {
    return (
      <div>
        <Connexion users={this.state.users} addUser={this.addUser} />
        <ToDoList users={this.state.users} addPastille={this.addPastille} pastilles={this.state.pastilles} />
      </div>
    );
  }
}

export default Main;
