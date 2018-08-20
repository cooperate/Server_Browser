// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import cuid from 'cuid';
import { newMessage } from "../actions/index";
import { socketClient } from '../socket'

const mapDispatchToProps = dispatch => {
  return {
    newMessage: message => dispatch(newMessage(message))
  };
};

const mapStateToProps = state => {
  //TODO: Fetch username by ID
  if(state.user[0]){
    var [user] = state.user; 
    return { name: user.name };
  } else {
    return { name: 'default' };
  }
};

class SendMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.props;
    const { message } = this.state;
    const timestamp = Date.now();
    const { roomId } = this.props;
    const id = cuid();
    
    this.props.newMessage({ name, message, timestamp, roomId, id });
    this.setState({ name: name,
      message: "" });

    socketClient.emit('Message', { name, message, timestamp, roomId, id });
  }

  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Send Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={message}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SEND
        </button>
      </form>
    );
  }
}

const MessageInput = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default MessageInput;
