import React, { Component } from "react";
import Admin from "./admin";
import PageWithHeader from "./pageWithHeader";
import "../css/toDoList.css";
import moon from "../images/moon.png";
import {Link} from 'react-router-dom';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastille: []
    };
  }

  render() {
    return (
      <PageWithHeader>
        <div className="toDoListPage">
        <ul>
          {this.props.pastilles.map((tache, index) => {
            return (
              <Link to={"/pastille/" + tache.id} key={tache.id}>
                <li id={index} key={tache.id}>
                <div>
                <h2>
                  {tache.title} {tache.id}
                </h2>
                <p className="dateFin">
                  {tache.dateFin}
                </p>
                </div>
                <p>
                  {tache.description.substring(0,70)}...
                </p>
              </li>
              </Link>
              
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
