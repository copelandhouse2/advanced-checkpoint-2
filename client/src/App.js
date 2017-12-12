import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import AddressContainer from "./containers/AddressContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadAddresses();

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/address/:id" component={AddressContainer} />
            <Route path="/" component={Addresses} />
          </Switch>
          <Link to={"/"}>
            <i className="fa fa-fw fa-dashboard" /> Address Home
          </Link>
          <Link to={"/address/:id"}>ID</Link>

        </div>
      </BrowserRouter>
    );
  }

}
export default (App);
