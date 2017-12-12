import React from "react";
//import CollapsableMapper from "./CollapsableMapper";

function Addresses(props) {
  return (
    <CollapsableMapper data={props.addresses} path="address1" field="Address" field1="Subdivision" field2="Client" field3="PI" />
  );
}
export default Addresses;
