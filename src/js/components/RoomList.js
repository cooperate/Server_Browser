import React from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const mapStateToProps = state => {
  return { rooms: state.rooms };
};
const Rooms = ({ rooms }) => (
  <ul className="list-group list-group-flush">
    {rooms.map(el => (
    <Link to={`/rooms/${el.roomName}`} key={el.id}>
      <li className="list-group-item">
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
  	</Link>
    ))}
  </ul>
);
const RoomList = connect(mapStateToProps)(Rooms);
export default RoomList;