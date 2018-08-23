import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import 'lodash';

const mapStateToProps = (state, ownProps) => {
  var user = _.filter(state.users, { 'id': ownProps.userId })[0])
  return { user: user };
};

const UserInfoStateless = ({ user }) => (
  <div>
  	user.name
  </div>
);

const UserInfo = connect(mapStateToProps)(UserInfoStateless);

export default UserInfo;
