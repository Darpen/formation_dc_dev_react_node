import React, { Component } from "react";
import axios from 'axios';
import "../toDo.css";

import Pastille from "./pastille";
import Admin from "./admin";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastilles: []
    };
  }

  getAllPastilles(){
    return axios.get('/pastille/1');
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pastilles.map((tache, index) => {
            return (
              <li id={index}>
                <span>
                  {tache.title} {tache.label}
                </span>
              </li>
            );
          })}
        </ul>
        {/* <Pastille pastilles={this.state.pastilles} /> */}
        <Admin users={this.props.users} addPastille={this.props.addPastille} />
      </div>
    );
  }
}

export default ToDoList;
