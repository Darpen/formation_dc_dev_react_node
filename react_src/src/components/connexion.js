import React, { Component } from "react";
import "../css/connection.css"

import Login from "./login";
import Register from "./register";

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
        <button className="registerButton" type="button">CREER UN COMPTE</button>
        <Register
          onRegister={user => {
            this.props.addUser(user);
          }}
        />
      </div>
    );
  }
}

export default Connexion;
