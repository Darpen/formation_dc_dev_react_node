import React, { Component } from "react";
import axios from 'axios';
import "../css/listMembers.css";

class ListMembers extends Component {
  constructor(props){
    super(props)

    this.state = {
      addedUser: '',
      addedUsers: []
    };

  }

  removeOnUnchecked(e){
    this.state.addedUsers.forEach(user => {
      if(e.target.value === user ){
        let unchecked = [... this.state.addedUsers, e.target.value]
        unchecked.splice(e.target.value, 1);
        this.setState({ addedUsers : unchecked });
      }
    });
  }

  /* componentDidMount(){
    axios.get(`https://localhost:3001`)
      .then(response => {
        console.log('get response: ', response);
      })
  } */

  render() {
    console.log("listMembers: ", this.props.users);
    console.log('listMembers addedUsers: ', this.state.addedUsers);
    return (
      <div className="listMembers">
        <h2>Collaborateurs</h2>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={index} id={index}>
                <input 
                  type ="checkbox" 
                  id={index} name="user" 
                  value={user.nom + ' ' + user.prenom} 
                  onChange={e=>{
                    console.log('checked ' ,e.target.checked)
                    if(e.target.checked === true){
                      let add = [... this.state.addedUsers, e.target.value]
                      this.setState({ addedUsers: add, addedUser: '' })
                    }else{
                      // J'enlève le user si la checkbox est décochée
                      this.removeOnUnchecked(e);
                    }

                    // envoi de la props
                    this.props.onUserChecked(this.state.addedUsers);
                  }} 
                />
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
