import React, { Component } from "react";
import Admin from "./admin";
import PageWithHeader from "./pageWithHeader";
import "../css/toDoList.css";
import moon from "../images/moon.png";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastille: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/todolist/todo/1`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  displayToDo(e, id){
    e.preventDefault();
    console.log("display Pastille");
  }

  render() {
    return (
      <PageWithHeader>
        <div className="toDoListPage">
        <ul>
          {this.props.pastilles.map((tache, index) => {
            return (
              <li onClick={(e) => this.displayToDo(e, tache.id)} id={index} key={tache.id}>
                <div>
                <h2>
                  {tache.title}
                </h2>
                <p className="dateFin">
                  {tache.dateFin}
                </p>
                </div>
                <p>
                  {tache.description.substring(0,70)}...
                </p>
              </li>
                );
            })}
        </ul>
        <img className="moon" src={moon} alt="la lune"></img>
        </div>
{/*         <Admin users={this.props.users} addPastille={this.props.addPastille} />
 */}      </PageWithHeader>
    );
  }
}

export default ToDoList;
