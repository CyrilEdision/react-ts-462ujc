import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};

  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col-4">
            <h3>No</h3>
          </div>
          <div className="col-4">
            <h3>No</h3>
          </div>
          <div className="col-4">
            <h3>No</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
