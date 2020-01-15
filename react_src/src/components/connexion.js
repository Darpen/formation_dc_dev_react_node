import React, { Component } from "react";
import "../toDo.css";

import Login from "./login";
import Register from "./register";
import ListMembers from "./listMembers";

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nom: "",
        prenom: "",
        email: "",
        password: "",
        repeatPassword: ""
      }
    };
  }

  render() {
    return (
      <div>
        <Login users={this.props.users} />
        <Register
          onRegister={user => {
            this.props.addUser(user);
          }}
        />
        <ListMembers users={this.props.users} />
      </div>
    );
  }
}

export default Connexion;
