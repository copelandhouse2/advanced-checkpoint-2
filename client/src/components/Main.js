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
          <div className="col-md-4">
            <AddressesContainer />
          </div>
          <div className="col-md-8">
            <CreateAddressContainer />
          </div>
        </div>
      </div>
  );

}
export default (Main);
