import React from "react";
import "./style.css";
import 'typeface-roboto';


import Main from "./components/main";
import Login from "./components/login";
import Register from "./components/register";
import Connexion from "./components/connexion";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {
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
      <Main
        onRegister={user => {
          this.setState({ users: user });
        }}
        user={this.state.users}
      />
    );
  }
}
