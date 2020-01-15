import React, { Component } from "react";
import "../listMembers.css";

class ListMembers extends Component {
  render() {
    console.log("list", this.props.users);
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
