import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import 'lodash';

const mapStateToProps = (state, ownProps) => {
  var userRooms = _.filter(state.userRoom, { 'roomId': ownProps.roomId }); 
  var users = new Array();
  userRooms.map(userRoom => {
    users.push(_.filter(state.users, { 'id': userRoom.userId })[0])
    });
  return { users: users };
};

const ConnectedList = ({ users }) => (
  <ul className="list-group list-group-flush">
    {users.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.name}
      </li>
    ))}
  </ul>
);

const UserList = connect(mapStateToProps)(ConnectedList);

export default UserList;
