import React, { Component } from "react";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      pwd: "",
      loginData: {}
    };
  }
  createNotification = type => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };
  componentDidMount = () => {
    this.setState({
      loginData: JSON.parse(localStorage.getItem("authData"))
    });
  };
  handleSubmit = () => {
    if (
      this.state.uname == this.state.loginData.user1.name &&
      this.state.pwd == this.state.loginData.user1.password
    ) {
      console.log("Admin");
    } else if (
      this.state.uname == this.state.loginData.user2.name &&
      this.state.pwd == this.state.loginData.user2.password
    ) {
      console.log("User");
    } else {
      console.log("Wrong");
      this.createNotification("error");
    }
    event.preventDefault();
  };
  render() {
    return (
      <div className="login">
        <div className="login-inner">
          <h2>LOGIN</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeHolder="Username"
              value={this.state.uname}
              onChange={e => this.setState({ uname: e.target.value })}
            />
            <input
              type="password"
              className="form-control"
              placeHolder="Passsword"
              value={this.state.pwd}
              onChange={e => this.setState({ pwd: e.target.value })}
            />
            <button>Submit</button>
          </form>
          <NotificationContainer />
        </div>
      </div>
    );
  }
}
export default Login;
