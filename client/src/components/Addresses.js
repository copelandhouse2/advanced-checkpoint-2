import React from "react";
import {Link} from "react-router-dom"

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
      <address className="card text-center" key={id}>
        <div className="row no-margin-left">
          <strong className="col-md-9 text-uppercase">{addr.address1}</strong>
          <strong className="col-md-3"><Link to= {`/addresses/${addr._id}`}> details </Link></strong><br></br>
        </div>
        {addr.jobNumber}<br></br>
        {addr.client}<br></br>
      <div className="row button-section">
          <button className="col-md-offset-1 col-md-3">Edit</button>
          <button className="col-md-offset-3 col-md-3">Delete</button>
        </div>
      </address>
    </div>
    )
  });

  return (
    <div>
      <h2 className="white">List of Addresses</h2>
      {AddressList}
    </div>
  );
}
export default Addresses;

// <CollapsableMapper data={props.addresses} path="addresses" field="Address" field1="Subdivision" field2="Client" field3="PI" />

// <form className="card" key={id}>
//   <h3>{addr.jobNumber} - {addr.address1} - {addr.subdivision}</h3>
// </form>
