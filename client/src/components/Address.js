import React, { Component } from "react";

class Address extends Component {

  componentDidMount() {
    const addressId = this.props.match.params.id;
    this.props.getAddress(addressId);
  }

  render() {
    let address = this.props;

    return (
      <div>
        <h2>{this.props.address.address1}</h2>
        <div>{this.props.address.jobNumber}</div>
        <div>{this.props.address.subdivision} {this.props.address.city}</div>
        <div>{this.props.address.client}</div>
        <div>{this.props.address.PI}</div>
      </div>
    );
  }
}
export default Address;

// Contact.propTypes = {
//   contact: PropTypes.object.isRequired
// }
