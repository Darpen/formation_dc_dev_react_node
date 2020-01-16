import React, { Component } from "react";
import "../css/form.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      users: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState(state => {
      let user = { email: state.email, password: state.password };
      let newUsers = [...state.users, user];
      this.setState({ users: newUsers });
      console.log(user);
    });

    alert("Utilisateur ajouté");
    // this.props.onUserSend(this.state);
  }

  render() {
    console.log('login: ', this.state.users);
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.state);
          this.handleSubmit(e);
        }}
      >
        <label>
          <span><span className="bgtexte"></span>Email</span>
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
        <input className="envoyer" type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default Login;
