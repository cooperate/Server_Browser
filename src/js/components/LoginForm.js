// src/js/components/Form.js
import React, { Component } from "react"
import { connect } from "react-redux"
import cuid from 'cuid';
import { newUser, userSelf } from "../actions/index"
import { socketClient } from '../socket'
import { push } from 'connected-react-router'

const mapDispatchToProps = dispatch => {
  return {
    userSelf: user => dispatch(userSelf(user)),
    newUser: user => dispatch(newUser(user)),
    loginSuccess: () => dispatch(push('/')) 
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const id = cuid();
    
    this.props.userSelf({ name, id });
    this.props.newUser({ name, id });
    this.setState({ name: "" });
    socketClient.emit('Login', { name, id });
    //TODO, this needs to be further tested
    this.props.loginSuccess();
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const LoginForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default LoginForm;