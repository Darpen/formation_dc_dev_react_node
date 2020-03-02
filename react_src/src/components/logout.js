import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router";

class Logout extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          pastille:[]
      }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/logout')
    .finally((response) => {
      // handle success
      console.log('logout!!!!!!!!!!!!!!!!!!!!!!!!')
      if (response.data.redirect == '/') {
        return window.location = "/login"
      }
    })
  }
}

export default withRouter(Logout);