import React, { Component } from 'react'
import ConnectedList from './ConnectedList'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { socketClient } from '../socket'
import { connect } from 'react-redux'
import { userLeaveRoom } from '../actions/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './Room.css'

const mapStateToProps = state => {
  if(state.user[0]){
    var [user] = state.user;
    return { userId: user.id };
  } else {
    return { userId: 'default' };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    userLeaveRoom: userRoom => dispatch(userLeaveRoom(userRoom)),
  }
};

class RoomStateful extends Component {
  constructor(props){
    super(props);
  }

  componentWillUnmount() {
    const roomId = this.props.location.state.roomId;
    const userId = this.props.userId;
    const id = this.props.location.state.userRoomId;
    this.props.userLeaveRoom({roomId, userId, id});
    socketClient.emit('UserLeaveRoom', {roomId, userId, id});
  }

  toggleSidebar() {
    var element = document.getElementById("sidebar");
    element.classList.toggle("active");
  }

  render(){
    const roomId = this.props.location.state.roomId;
    return (
      <div className="container-fluid roomContainer">
        <div id="sidebar" className="sidebar">
            <ConnectedList roomId={roomId}/>
        </div>
        <div className="content">
        	<div className="row chatTitle">
            <div className="col-2">
               <button type="button" onClick={() => {this.toggleSidebar()}} className="btn btn-info">
                <i className="fas"></i>
                <span>+</span>
            </button>
            </div>
            <div className="col-10 text-center">
              <h1>{this.props.match.params.roomName}</h1>
            </div>
          </div>
          <div className="row chatWindow">
            <div className="col-12">
              <div className="row messageList">
                <Messages roomId={roomId}/>
              </div>
              <div className="row messageInput">
                <MessageInput roomId={roomId}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Room = connect(mapStateToProps, mapDispatchToProps)(RoomStateful);

export default Room;
