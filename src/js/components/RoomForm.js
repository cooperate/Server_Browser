// src/js/components/Form.js
import React, { Component } from "react"
import { connect } from "react-redux"
import cuid from 'cuid';
import { newRoom } from "../actions/index"
import { socketClient } from '../socket'
import { push } from 'connected-react-router'

const mapDispatchToProps = dispatch => {
  return {
    newRoom: room => dispatch(newRoom(room)),
    roomSuccess: () => dispatch(push('/rooms')) 
  };
};

class CreateRoomForm extends Component {
  constructor() {
    super();

    this.state = {
      roomName: "",
      roomDesc: "",
      roomPlayerCount: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { roomName } = this.state;
    const { roomDesc } = this.state;
    const { roomPlayerCount } = this.state;
    const id = cuid();
    
    this.props.newRoom({ roomName, roomDesc, roomPlayerCount, id });
    socketClient.emit('NewRoom', { roomName, roomDesc, roomPlayerCount, id });
    this.setState({ roomName: "" });
    this.props.roomSuccess();
  }

  render() {
    const { roomName } = this.state;
    const { roomDesc } = this.state;
    const { roomPlayerCount } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Create Room</label>
          <input
            type="text"
            className="form-control"
            id="roomName"
            value={roomName}
            onChange={this.handleChange}
            placeholder="Enter The Room Name"
          />
          <input
            type="text"
            className="form-control"
            id="roomDesc"
            value={roomDesc}
            onChange={this.handleChange}
            placeholder="Enter A Room Description"
          />
          <input
            type="number"
            className="form-control"
            id="roomPlayerCount"
            value={roomPlayerCount}
            onChange={this.handleChange}
            placeholder="Enter The Player Count"
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          CREATE ROOM
        </button>
      </form>
    );
  }
}

const RoomForm = connect(null, mapDispatchToProps)(CreateRoomForm);

export default RoomForm;