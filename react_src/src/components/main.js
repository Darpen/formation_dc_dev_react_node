import React, { Component } from "react";

import Connexion from "./connexion";
import ToDoList from "./toDoList";
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

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
          id: 5,
          nom:'Sotelo',
          prenom: 'Spencer',
          email: 'spencer@email.com',
          password: 'user'
        }
      ],
      pastilles: [
        {
          title: 'Mern',
          label: 'Digital',
          description: 'Grâce à React, il est facile de créer des interfaces utilisateurs interactives. Définissez des vues simples pour chaque état de votre application, et lorsque vos données changeront, React mettra à jour, de façon optimale, juste les composants qui en auront besoin.',
          dateDebut: '19/01/2020',
          dateFin: '30/02/2020',
          files: '',
          steps: ['Inclure react', 'Inclure node', 'Inclure mongodb', 'Inclure express'],
          addedUsers: ['Mark Holcomb', 'Misha Mansoor', 'Spencer Sotelo']
        },
        {
          title: 'FS0SIETY',
          label: 'Graphisme',
          description: 'Grâce à React, il est facile de créer des interfaces utilisateurs interactives. Définissez des vues simples pour chaque état de votre application, et lorsque vos données changeront, React mettra à jour, de façon optimale, juste les composants qui en auront besoin.',
          dateDebut: '19/01/2020',
          dateFin: '30/02/2020',
          files: '',
          steps: ['Inclure react', 'Inclure node', 'Inclure mongodb', 'Inclure express'],
          addedUsers: ['Mark Holcomb', 'Misha Mansoor', 'Spencer Sotelo']
        },
        {
          title: 'Project Entropia',
          label: 'Graphisme',
          description: 'Grâce à React, il est facile de créer des interfaces utilisateurs interactives. Définissez des vues simples pour chaque état de votre application, et lorsque vos données changeront, React mettra à jour, de façon optimale, juste les composants qui en auront besoin.',
          dateDebut: '19/01/2020',
          dateFin: '30/02/2020',
          files: '',
          steps: ['Inclure react', 'Inclure node', 'Inclure mongodb', 'Inclure express'],
          addedUsers: ['Mark Holcomb', 'Misha Mansoor', 'Spencer Sotelo']
        },
      ]
    };
  }

  componentDidMount(){
    axios.get('/user')
    .then(function (response) {
      // handle success
      this.setState({users: response.data})
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
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
      <Switch>
            <Route path="/connexion" component={() => {
              return <Connexion users={this.state.users} addUser={this.addUser} />
            }} />
            <Route path="/todoList" component={() => {
              return <ToDoList users={this.state.users} addPastille={this.addPastille} pastilles={this.state.pastilles} />
            }} />
      </Switch>
    );
  }
}

export default Main;
