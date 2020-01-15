import React, { Component } from "react";
import "../admin.css";

import ToDoForm from "./toDoForm";
import ListMembers from "./listMembers";

class Admin extends Component {
  render() {
    return (
      <div>
        <ToDoForm
          onPastilleSend={pastille => {
            this.props.addPastille(pastille);
          }}
        />
        <ListMembers users={this.props.users} />
      </div>
    );
  }
}

export default Admin;
