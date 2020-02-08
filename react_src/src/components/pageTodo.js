import React, { Component } from "react";
import Pastille from "./pastille";
import {useRouteMatch} from "react-router-dom";
import axios from 'axios';

export function getmatchid(){
  let match = useRouteMatch('/pastille/:id');
  let id = match.params.id;
  return id;
}

class PageTodo extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          pastille:[]
      }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/todo/' + getmatchid())
    .then((response) => {
    // handle success
    this.setState({pastille: response.data}) 
    })
    .catch((error) =>{
    // handle error
    console.log('ERROR ', error);
    })
  }

  render() {
    console.log('todo: ', this.state.pastille)
    return (
      <Pastille pastille={this.state.pastille} />
    );
  }
}

export default PageTodo;