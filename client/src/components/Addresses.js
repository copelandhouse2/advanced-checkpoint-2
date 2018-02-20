import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";

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
          <strong className="col-md-3"><Link to={`/addresses/${addr._id}`}> details </Link></strong><br></br>
        </div>
        {addr.jobNumber}<br></br>
        {addr.client}<br></br>
      <div className="row button-section">
          <button className=""
            onClick={(e) => {
            e.preventDefault();
            if (props.deleteAddress) {
              props.deleteAddress(addr._id);
            }}}
          > Delete </button>
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

Addresses.propTypes = {
  addresses: PropTypes.array.isRequired
}


// <button className="col-md-offset-1 col-md-3">Edit</button>
