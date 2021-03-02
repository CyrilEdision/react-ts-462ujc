import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countApple: 10,
      countOrange: 10,
      countGraphs: 10,
      cartValue: [],
      checkUser: "",
      isAdmin: false
    };
  }
  componentDidMount = props => {
    this.setState(
      {
        checkUser: JSON.parse(localStorage.getItem("user"))
      },
      () => {
        if (this.state.checkUser == "Admin") {
          this.setState({
            isAdmin: true
          });
        } else {
          this.setState({
            isAdmin: false
          });
        }
      }
    );
  };
  addProduct = e => {
    if (e == "Apple" && this.state.countApple < 10) {
      // var last = this.state.cartValue.pop();
      var last = this.state.cartValue[this.state.cartValue.length - 1];
      // console.log(last);
      if (last == e) {
        var lastDel = this.state.cartValue.pop();
        this.setState(
          {
            countApple: this.state.countApple + 1,
            cartValue: this.state.cartValue
          },
          () => {
            // console.log(this.state.cartValue);
          }
        );
      } else {
        alert("Please remove last fruit");
      }
    } else if (e == "Orange" && this.state.countOrange < 10) {
      var last = this.state.cartValue[this.state.cartValue.length - 1];
      // console.log(last);
      if (last == e) {
        var lastDel = this.state.cartValue.pop();
        this.setState(
          {
            countOrange: this.state.countOrange + 1,
            cartValue: this.state.cartValue
          },
          () => {
            // console.log(this.state.cartValue);
          }
        );
      } else {
        alert("Please remove last fruit");
      }
    } else if (e == "Graphs" && this.state.countGraphs < 10) {
      var last = this.state.cartValue[this.state.cartValue.length - 1];
      // console.log(last);
      if (last == e) {
        var lastDel = this.state.cartValue.pop();
        this.setState(
          {
            countGraphs: this.state.countGraphs + 1,
            cartValue: this.state.cartValue
          },
          () => {
            // console.log(this.state.cartValue);
          }
        );
      } else {
        alert("Please remove last fruit");
      }
    }
  };
  removeProduct = e => {
    if (e == "Apple" && this.state.countApple > 0) {
      this.setState(
        {
          countApple: this.state.countApple - 1,
          cartValue: this.state.cartValue.concat("Apple")
        },
        () => {
          console.log(this.state.cartValue);
        }
      );
    } else if (e == "Orange" && this.state.countOrange > 0) {
      this.setState(
        {
          countOrange: this.state.countOrange - 1,
          cartValue: this.state.cartValue.concat("Orange")
        },
        () => {
          console.log(this.state.cartValue);
        }
      );
    } else if (e == "Graphs" && this.state.countGraphs > 0) {
      this.setState(
        {
          countGraphs: this.state.countGraphs - 1,
          cartValue: this.state.cartValue.concat("Graphs")
        },
        () => {
          console.log(this.state.cartValue);
        }
      );
    }
  };
  render() {
    return (
      <div className="container">
        <Link to="/">Login Page</Link>/Home
        <h2>Choose the Item</h2>
        <div className="row">
          <div className="col-4">
            <div className="box-red">
              <h2>Apple</h2>
              <h3>
                Quanitity: <span>{this.state.countApple}</span>
              </h3>
              <button
                onClick={() =>
                  this.state.isAdmin
                    ? this.removeProduct("Apple")
                    : alert("Permission Denied")
                }
              >
                +
              </button>
              <button onClick={() => this.addProduct("Apple")}>-</button>
            </div>
          </div>
          <div className="col-4">
            <div className="box-red box-orange">
              <h2>Orange</h2>
              <h3>
                Quanitity: <span>{this.state.countOrange}</span>
              </h3>
              <button
                onClick={() =>
                  this.state.isAdmin
                    ? this.removeProduct("Orange")
                    : alert("Permission Denied")
                }
              >
                +
              </button>
              <button onClick={() => this.addProduct("Orange")}>-</button>
            </div>
          </div>
          <div className="col-4">
            <div className="box-red box-green">
              <h2>Graphs</h2>
              <h3>
                Quanitity: <span>{this.state.countGraphs}</span>
              </h3>
              <button
                onClick={() =>
                  this.state.isAdmin
                    ? this.removeProduct("Graphs")
                    : alert("Permission Denied")
                }
              >
                +
              </button>
              <button onClick={() => this.addProduct("Graphs")}>-</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4" />
          <div className="col-4 box-cart-top">
            <h2>Cart</h2>
            <div className="box-cart">
              {this.state.cartValue.map((val, index) => {
                return (
                  <p key={index} className={val}>
                    {val}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
