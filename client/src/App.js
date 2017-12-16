import React, { Component } from "react";
import "./App.css";
// import Main from "./components/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
import AddressesContainer from "./containers/AddressesContainer";
import CreateAddressContainer from "./containers/CreateAddressContainer";


class App extends Component {
  constructor() {
    super();

  }
  componentDidMount() {
    this.props.loadAddresses();
    
  }

  render() {
    return (
      <div>
        <AddressesContainer />
        <CreateAddressContainer />
      </div>
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
