import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import UserList from './UserList';
import 'lodash';

const mapStateToProps = (state, ownProps) => {
  var userRooms = _.filter(state.userRoom, { 'roomId': ownProps.roomId }); 
  var users = new Array();
  userRooms.map(userRoom => {
    users.push(_.filter(state.users, { 'id': userRoom.userId })[0])
    });
  return { users: users };
};

const ConnectedListStateless = ({ users }) => (
  <UserList users={users}/>
);

const ConnectedList = connect(mapStateToProps)(ConnectedListStateless);

export default ConnectedList;
