import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lodash';

const mapStateToProps = (state, ownProps) => {
  var messages = _.filter(state.messages, { 'roomId': ownProps.roomId });
  return { messages: messages };
};
const MessageList = ({ messages }) => (
  <ul className="list-group list-group-flush">
    {messages.map(el => (
      <li className="list-group-item" key={el.id}>
        <div className="row">
        <div className="col-9">
        {el.message}
        </div>
        <div className="col-3">
        From:<dt>{el.name}</dt> 
        </div>
        </div>
        <div className="row">
          {el.timestamp}
        </div>
      </li>
    ))}
  </ul>
);
const Messages = connect(mapStateToProps)(MessageList);
export default Messages;
