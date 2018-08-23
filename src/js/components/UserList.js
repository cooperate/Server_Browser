import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import 'lodash';

/*TODO should this ConnectedList abstract another component called UserList?
UserList shouldn't be part of this logic.*/
const UserList = ({ users }) => (
  <ul className="list-group list-group-flush">
    {users.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.name}
      </li>
    ))}
  </ul>
);

export default UserList;