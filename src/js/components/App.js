import React from "react";
import UserList from "./UserList"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container-fluid">
  	<div className="row">
  		<div className="col text-center">
    		<h1>Server Browser</h1>
    	</div>
    </div>
    <div className="row">
    	<div className="col">
    		<UserList />
    	</div>
    </div>
  </div>
);
export default App;