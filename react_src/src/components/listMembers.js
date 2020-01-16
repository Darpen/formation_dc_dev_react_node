import React, { Component } from "react";
import axios from 'axios';
import "../css/listMembers.css";

class ListMembers extends Component {

  /* componentDidMount(){
    axios.get(`https://localhost:3001`)
      .then(response => {
        console.log('get response: ', response);
      })
  } */

  render() {
    console.log("listMembers: ", this.props.users);
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li id={index}>
                <input type ="checkbox" id={index} name="user" />
                <label for="user">{user.nom} {user.prenom}</label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListMembers;
