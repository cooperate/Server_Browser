import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lodash';
import './Messages.css'

const mapStateToProps = (state, ownProps) => {
  var messages = _.filter(state.messages, { 'roomId': ownProps.roomId });
  return { messages: messages };
};

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.messages !== prevProps.messages) {
      //scroll to bottom
      var messages = document.querySelector('.messages');
      console.log('scrollTop ' + messages.scrollTop);
      console.log('scrollHeight ' + messages.scrollHeight);
      
      if(messages.scrollTop > 0 && 
        messages.scrollTop > messages.scrollHeight * 0.6 || 
        messages.scrollHeight < 2200){
        messages.scrollTop = messages.scrollHeight;
      }
    }
  }

  render() {
    return(
    <ul className="list-group list-group-flush messages scrollbar-success">
      {this.props.messages.map(el => (
        <li className="list-group-item" key={el.id}>
          <div className="row">
          <div className="col-9 messageText">
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
    )
  }
}
const Messages = connect(mapStateToProps)(MessageList);
export default Messages;
