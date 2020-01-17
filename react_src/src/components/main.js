import React, { Component } from "react";

import Connexion from "./connexion";
import ToDoList from "./toDoList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 0,
          nom:'Doe',
          prenom: 'John',
          email: 'johndoe@email.com',
          password: 'user'
        },
        {
          id: 1,
          nom:'Holcomb',
          prenom: 'Mark',
          email: 'mrak@email.com',
          password: 'mrak'
        },
        {
          id: 2,
          nom:'Mansoor',
          prenom: 'Misha',
          email: 'bulb@email.com',
          password: 'bulb'
        },
        {
          id: 3,
          nom:'Halpern',
          prenom: 'Matt',
          email: 'matt@email.com',
          password: 'user'
        },
        {
          id: 4,
          nom:'Bowen',
          prenom: 'Jake',
          email: 'jake@email.com',
          password: 'user'
        },
        {
          id: 0,
          nom:'Sotelo',
          prenom: 'Spencer',
          email: 'spencer@email.com',
          password: 'user'
        }
      ],
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
  };

  render() {
    return (
      <div>
        <div className="connexion">
          <Connexion users={this.state.users} addUser={this.addUser} />
        </div>
        <ToDoList users={this.state.users} addPastille={this.addPastille} pastilles={this.state.pastilles} />
      </div>
    );
  }
}

export default Main;
