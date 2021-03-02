import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authData: {
        user1: {
          name: "Admin",
          permission: "all",
          password: "Admin"
        },
        user2: {
          name: "cyril",
          permission: "All",
          password: "cyril"
        }
      }
    };
    localStorage.setItem("authData", JSON.stringify(this.state.authData));
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
