import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import AddressContainer from "./containers/AddressContainer";
import AddressesContainer from "./containers/AddressesContainer";
//import CreateAddressContainer from "./containers/CreateAddressContainer";


class App extends Component {

  componentDidMount() {
    this.props.loadAddresses();
  }

  render() {
    return (
      <BrowserRouter>
        <div id="gradient" >

          <h2 className="white">Address Management for Copeland Engineering</h2>
          <div className="links"><Link to={`/`} className="white"> Home </Link></div>
          <div className="links"><Link to={`/addresses`} className="white"> List of Addresses </Link></div>
          <div className="links"><Link to={`/create`} className="white"> Add Address </Link></div>

          <Switch>
            <Route path="/addresses/:id" component={AddressContainer} />
            <Route path="/create" component={Main} />
            <Route path="/addresses" component={AddressesContainer} />

          </Switch>

        </div>

      </BrowserRouter>
    );
  }

}
export default (App);

// <BrowserRouter>
//   <div>
//     <Switch>
//       <Route path="/addresses/:id" component={AddressContainer} />
//       <Route path="/" component={AddressesContainer} />
//     </Switch>
//     <Link to={"/"}>
//       <i className="fa fa-fw fa-dashboard" /> Address Home
//     </Link>
//
//   </div>
// </BrowserRouter>

// <Link to={"/addresses/:id"}>ID</Link>
//   <Link to={"/" + this.props.path + "/" + d._id}> View </Link>
