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
                <span>
                  {user.nom} {user.prenom}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListMembers;
