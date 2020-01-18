import React, { Component } from "react";
import Admin from "./admin";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastille: []
    };
  }

  displayToDo(e, id){
    e.preventDefault();
    console.log("display Pastille");
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pastilles.map((tache, index) => {
            return (
              <li onClick={(e) => this.displayToDo(e, tache.id)} id={index} key={index}>
                <span>
                  {tache.title} {tache.label}
                </span>
              </li>
            );
            })}
        </ul>
        <Admin users={this.props.users} addPastille={this.props.addPastille} />
      </div>
    );
  }
}

export default ToDoList;
