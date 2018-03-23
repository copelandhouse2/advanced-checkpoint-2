import React, { Component } from "react";

// Tested between function and class.
// Function was called multiple times and as such the database call was repeated over and over
// Reverted it back to class.

class Address extends Component {

  componentDidMount() {
    const addressId = this.props.match.params.id;
    this.props.getAddress(addressId);
  }

  render() {
    let { jobNumber, address1, subdivision, city, PI, client } = this.props.address;

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
}
export default Address;
