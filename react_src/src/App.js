import React from "react";
import "./style.css";

import Main from "./components/main";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
      <BrowserRouter>
        <Main
          onRegister={user => {
            this.setState({ users: user });
          }}
          user={this.state.users}
        />
      </BrowserRouter>
      
    );
  }
}
