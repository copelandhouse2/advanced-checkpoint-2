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
        <h2>Project Address</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (this.props.createAddress) {
            this.props.createAddress(this.state);
          }
        }}>
          <div>
            Job #: <input onChange={(e) => {
              this.setState({
                jobNumber: e.target.value
              });
            }} />
          </div>
          <div>
            Address 1: <input onChange={(e) => {
              this.setState({
                address1: e.target.value
              });
            }} />
          </div>
          <div>
            Address 2: <input onChange={(e) => {
              this.setState({
                address2: e.target.value
              });
            }} />
          </div>
          <div>
            City: <input onChange={(e) => {
              this.setState({
                city: e.target.value
              });
            }} />
          </div>
          <div>
            Subdivision: <input onChange={(e) => {
              this.setState({
                subdivision: e.target.value
              });
            }} />
          </div>
          <div>
            PI: <input onChange={(e) => {
              this.setState({
                PI: e.target.value
              });
            }} />
          </div>
          <div>
            Client: <input onChange={(e) => {
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
