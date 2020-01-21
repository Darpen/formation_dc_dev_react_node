import React, { Component } from "react";
import Admin from "./admin";
import PageWithHeader from "./pageWithHeader";

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
      <PageWithHeader>
        <ul>
          {this.props.pastilles.map((tache, index) => {
            return (
              <li onClick={(e) => this.displayToDo(e, tache.id)} id={index} key={tache.id}>
                <span>
                  {tache.title} {tache.label}
                </span>
              </li>
            );
            })}
        </ul>
{/*         <Admin users={this.props.users} addPastille={this.props.addPastille} />
 */}      </PageWithHeader>
    );
  }
}

export default ToDoList;
