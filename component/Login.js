import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      pwd: "",
      loginData: {}
    };
  }
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
    }
    event.preventDefault();
  };
  render() {
    return (
      <>
        <div className="login">
          <div className="login-inner">
            <h2>LOGIN</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                value={this.state.uname}
                onChange={e => this.setState({ uname: e.target.value })}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Passsword"
                value={this.state.pwd}
                onChange={e => this.setState({ pwd: e.target.value })}
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
