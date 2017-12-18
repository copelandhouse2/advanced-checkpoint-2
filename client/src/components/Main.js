import React from "react";
// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import AddressContainer from "./containers/AddressContainer";
import AddressesContainer from "../containers/AddressesContainer";
import CreateAddressContainer from "../containers/CreateAddressContainer";


function Main() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <CreateAddressContainer />
          </div>
          <div className="col-md-6">
            <AddressesContainer />
          </div>
        </div>
      </div>
  );

}
export default (Main);
