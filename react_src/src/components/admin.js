import React, { Component } from "react";
import "../css/admin.css";

import ToDoForm from "./toDoForm";
import ListMembers from "./listMembers";

class Admin extends Component {
  render() {
    return (
      <div className="adminRender">
          <ToDoForm
            onPastilleSend={pastille => {
              this.props.addPastille(pastille);
            }} users={this.props.users}
          />
      </div>
    );
  }
}

export default Admin;
