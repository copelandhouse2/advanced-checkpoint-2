import React, { Component } from "react";


class CreateAddress extends Component {
  constructor() {
    super();
    this.state = {
      jobNumber: "",
      address1: "",
      address2: "",
      city: "",
      subdivision: "",
      PI: null,
      client: ""
    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2 className="white">Add an Address</h2>
        <form className="container-fluid" onSubmit={(e) => {
          e.preventDefault();
          if (this.props.createAddress) {
            this.props.createAddress(this.state);
          }
        }}>

          <div className="row">
            <div className="white col-md-2">Job #</div>
            <input onChange={(e) => {
              this.setState({
                jobNumber: e.target.value
              });
            }} />
          </div>

          <div className="row">
            <div className="white col-md-2">Address</div>
            <input onChange={(e) => {
              this.setState({
                address1: e.target.value
              });
            }} />
          </div>

          <div className="row">
            <div className="white col-md-2">City</div>
            <input onChange={(e) => {
              this.setState({
                city: e.target.value
              });
            }} />
          </div>

          <div className="row">
            <div className="white col-md-2">Subdivision</div>
            <input onChange={(e) => {
              this.setState({
                subdivision: e.target.value
              });
            }} />
          </div>

          <div className="row">
            <div className="white col-md-2">PI</div>
            <input onChange={(e) => {
              this.setState({
                PI: e.target.value
              });
            }} />
          </div>

          <div className="row">
            <div className="white col-md-2">Client</div>
            <input onChange={(e) => {
              this.setState({
                client: e.target.value
              });
            }} />
          </div>

          <button>Create</button>
        </form>

      </div>
    );
  }

}
export default (CreateAddress);

// <div className="row">
//   <div className="white col-md-1">Address 2</div>
//   <input onChange={(e) => {
//     this.setState({
//       address2: e.target.value
//     });
//   }} />
// </div>
