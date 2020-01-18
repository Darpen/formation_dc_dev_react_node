import React, { Component } from "react";
import "../css/form.css";

// route
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorLogin: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
     //controler si l'utilisateur existe dans la base de données
    this.props.users.forEach(user => {
      if((this.state.email === user.email) && (this.state.password === user.password)){
        console.log('Utilisateur connecté');
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
          this.handleSubmit(e);
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
        <input className="envoyer" type="submit" value="SE CONNECTER" />
        {/* Affiche le message d'erreur si email ou mdp faux */}
        <div>{this.state.errorLogin}</div>
      </form>
    );
  }
}

export default Login;
