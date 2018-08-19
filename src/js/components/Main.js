import React from "react";
import UserList from "./UserList"
import Messages from "./Messages"
import MessageInput from "./MessageInput"
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => (
  <div className="container-fluid">
  	<div className="row">
  		<div className="col text-center">
    		<h1>Server Browser</h1>
    	</div>
    </div>
    <div className="row">
    	<div className="col-3">
    		<UserList />
    	</div>
      <div className="col-9">
        <Messages />
        <MessageInput />
      </div>
    </div>
  </div>
);
export default Main;