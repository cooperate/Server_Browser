import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
const mapStateToProps = state => {
  return { users: state.users };
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