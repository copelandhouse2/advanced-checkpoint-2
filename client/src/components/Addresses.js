import React from "react";
// import CollapsableMapper from "./CollapsableMapper";

function Addresses(props) {

  /* An address
  jobNumber
  address1
  address2
  city
  subdivision
  PI
  client
  */

  const AddressList = props.addresses.map((addr, id) => {
    return (
      <div key={id}>
        <h3>{addr.jobNumber} - {addr.address1} - {addr.subdivision}</h3>
      </div>
    )
  });

  return (
    <div>
      <h2>List of Addresses</h2>
      {AddressList}
    </div>
  );
}
export default Addresses;

// <CollapsableMapper data={props.addresses} path="addresses" field="Address" field1="Subdivision" field2="Client" field3="PI" />
