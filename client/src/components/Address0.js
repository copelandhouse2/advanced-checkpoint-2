import React from "react";

function Address(props) {

  const addressId = props.match.params.id;
  props.getAddress(addressId);
  let { jobNumber, address1, address2, subdivision, city, PI, client } = props.address;

  return (
    <div className="container">
      <h2 className="white">Details</h2>

      <address className="big-card">
        <p className="text-uppercase text-center card-title">{address1}</p>

        <div>
          <span className="col-md-3">Job#:</span>
          {jobNumber}
        </div>

        <div>
          <span className="col-md-3">Sub, City:</span>
          {subdivision}, {city}
        </div>

        <div>
          <span className="col-md-3">Client:</span>
          {client}
        </div>

        <div>
          <span className="col-md-3">PI:</span>
          {PI}
        </div>

      </address>
    </div>

  );
}
export default Address;
