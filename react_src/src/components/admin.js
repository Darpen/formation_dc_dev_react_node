import React, { Component } from "react";
import "../css/admin.css";

import ToDoForm from "./toDoForm";
import ListMembers from "./listMembers";

class Admin extends Component {
  render() {
    return (
      <div className="adminRender">
        <div>
          <ToDoForm
            onPastilleSend={pastille => {
              this.props.addPastille(pastille);
            }}
          />
        </div>
        <div>
          <ListMembers users={this.props.users} />
        </div>
        
      </div>
    );
  }
}

export default Admin;
