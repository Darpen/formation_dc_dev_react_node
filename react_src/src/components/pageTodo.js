import React, { Component } from "react";
import Pastille from "./pastille";
import {useRouteMatch} from "react-router-dom";
import axios from 'axios';

class PageTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pastille:{}
        }
    }

    componentDidMount() {
        const match = useRouteMatch();

        let id= match.params.id;
        console.log(id);
        axios.get(`http://localhost:3001/todolist/todo/` + id)
        .then((response) => {
        // handle success
        console.log(response);
        /* this.setState({pastille: response.data}) */
        })
        .catch((error) =>{
        // handle error
        console.log(error);
        })
    }

  render() {
    return (
      <Pastille pastille={this.state.pastille} />
    );
  }
}

export default PageTodo;