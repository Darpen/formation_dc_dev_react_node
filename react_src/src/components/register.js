import React, { Component } from "react";
import "../register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      repeatPassword: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }

  getErrors = () => {
    let errors = {};
    if (this.state.nom === "") {
      errors.nom = "Nom vide";
    }
    if (this.state.prenom === "") {
      errors.prenom = "Prénom vide";
    }
    if (this.state.email === "") {
      errors.email = "Email vide";
    }
    if (!(this.state.password === this.state.repeatPassword)) {
      errors.password = "Le mot de passe n'est pas identique";
    }
    return errors;
  };

  handleSubmit(event) {
    // Je crée un objet user que je stock dans le state users[]
    let user = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword
    };

    //gestion d'erreur
    let errors = this.getErrors();
    let newState = { errors: errors };
    console.log("register errors", errors);
    if (Object.entries(errors).length === 0) {
      //j'ajoute l'utilisateur entier au state
      newState.user = user;
      console.log("listuser", newState.user);
    }

    //let newUsers = [...this.state.users, user];
    this.setState(newState);

    // J'envoie le state à connexion.js
    this.props.onRegister(this.state);
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("register form submit", this.state);
          this.handleSubmit(e);
        }}
      >
        <label>
          <span>Nom</span>
          <input
            type="text"
            name="nom"
            placeholder="Saisir nom"
            value={this.state.nom}
            onChange={e => {
              this.setState({ nom: e.target.value });
            }}
          />
        </label>
        <span className="errors">{this.state.errors.nom}</span>
        <label>
          <span>Prenom</span>
          <input
            type="text"
            name="prenom"
            placeholder="Saisir prenom"
            value={this.state.prenom}
            onChange={e => {
              this.setState({ prenom: e.target.value });
            }}
          />
        </label>
        <span className="errors">{this.state.errors.prenom}</span>
        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            placeholder="Saisir email"
            value={this.state.email}
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
        </label>
        <span className="errors">{this.state.errors.email}</span>
        <label>
          <span>Mot de passe</span>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={this.state.password}
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
        </label>
        <label>
          <span>Ressaisir mot de passe</span>
          <input
            type="password"
            name="repeatPassword"
            placeholder="Ressaisir mot de passe"
            value={this.state.repeatPassword}
            onChange={e => {
              this.setState({ repeatPassword: e.target.value });
            }}
          />
        </label>
        <span className="errors">{this.state.errors.password}</span>
        <input className="envoyer" type="submit" value="S'inscrire" />
      </form>
    );
  }
}

export default Register;