import React, { Component } from "react";

import Connexion from "./connexion";
import ToDoList from "./toDoList";
import Admin from "./admin";
import PageTodo from "./pageTodo";
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      pastilles: []
    };

    this.addPastille = this.addPastille.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:3001/user', {withCredentials: true})
    .then((response) => {
      // handle success
      this.setState({users: response.data})
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get('http://localhost:3001/todo', {withCredentials: true})
    .then((response) => {
      // handle success
      this.setState({pastilles: response.data})
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
    console.log('main', this.state.pastilles)
    return (
      <Switch>
            <Route 
              path="/connexion" 
              component={() => {
                return <Connexion 
                          users={this.state.users} 
                          addUser={this.addUser} 
                        />
            }} />
            <Route 
              path="/todoList" 
              component={() => {
                return <ToDoList 
                          users={this.state.users} 
                          addPastille={this.addPastille} 
                          pastilles={this.state.pastilles} 
                        />
            }} />
            <Route 
              path="/pastille/:id" 
              component={() => {
                return <PageTodo 
                          pastilles={this.state.pastilles} 
                        />
            }} />
            <Route 
              path="/admin" 
              component={() => {
                return <Admin 
                          users={this.state.users} 
                          addPastille={this.addPastille} />
            }} />
      </Switch>
    );
  }
}

export default Main;
