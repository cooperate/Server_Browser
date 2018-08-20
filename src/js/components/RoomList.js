import React from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { userJoinRoom } from '../actions/index'
import { socketClient } from '../socket'
import cuid from 'cuid';

const mapStateToProps = state => {
  var userId;
  if(state.user[0]){
    userId = state.user[0].id;
  } else {
    userId = 'default';
  }
  return { rooms: state.rooms, userId: userId };
};

const mapDispatchToProps = dispatch => {
  return {
    userJoinRoom: userRoom => dispatch(userJoinRoom(userRoom)),
    roomSuccess: room => {
      var location = {
        pathname: '/rooms/' + room.roomName,
        state: { roomId: room.roomId, userRoomId: room.userRoomId }
      }
      dispatch(push(location));
    }
  };
};

const pushRoute = (el, props) => {
  const roomId = el.id;
  const roomName = el.roomName;
  const userId = props.userId;
  const id = cuid();
  const room = { roomName: roomName, roomId: roomId, userRoomId: id };
  socketClient.emit('JoinedRoom', {roomId: roomId, userId: userId, id: id});
  props.userJoinRoom({roomId, userId, id});
  props.roomSuccess(room);
};

const Rooms = ( props ) => (
  <ul className="list-group list-group-flush">
    {props.rooms.map(el => (
      <li className="list-group-item" onClick={() => {pushRoute(el, props)}} key={el.id}>
        <div className="col-4">
        {el.roomName}
        </div>
        <div className="col-7">
        {el.roomDesc} 
        </div>
        <div className="col-1">
        {el.roomPlayerCount} 
        </div>
      </li>
    ))}
  </ul>
);

const RoomList = connect(mapStateToProps, mapDispatchToProps)(Rooms);

export default RoomList;
