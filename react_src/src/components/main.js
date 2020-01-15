import React, { Component } from "react";

import Connexion from "./connexion";
import ToDoList from "./toDoList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
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

  render() {
    return (
      <div>
        <div className="connexion">
          <Connexion users={this.state.users} addUser={this.addUser} />
        </div>
        <ToDoList users={this.state.users} />
      </div>
    );
  }
}

export default Main;
