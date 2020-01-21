import React, { Component } from "react";
import "../css/form.css";

// route
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';
axios.defaults.withCredentials = true;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorLogin: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
     //controler si l'utilisateur existe dans la base de données
    this.props.users.forEach(user => {
      if((this.state.email === user.email) && (this.state.password === user.password)){
        console.log('Utilisateur connecté');
        axios.post("http://localhost:3001/login", {
          email: this.state.email,
          password: this.state.password
        });
      }else{
        this.setState({errorLogin: 'Email ou mot de passe incorrect'})
      }
    });
  }

  render() {
    console.log('login: ', this.props.users);
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.state);
          this.handleLogin(e);
        }}
      >
        <label>
          <span>Email</span>
          <input
            type="text"
            name="name"
            placeholder="Saisir email"
            value={this.state.email}
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
        </label>
        <label>
          <span>Mot de passe</span>
          <input
            type="password"
            name="password"
            placeholder="Saisir mot de passe"
            value={this.state.password}
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
        </label>
        <input className="loginButton" type="submit" value="SE CONNECTER" />
        {/* Affiche le message d'erreur si email ou mdp faux */}
        <div>{this.state.errorLogin}</div>
      </form>
    );
  }
}

export default Login;
