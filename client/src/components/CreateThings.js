import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: {
        body: ""
      },
      contact: {
        name: "",
        occupation: "",
        avatar: ""
      },
      vehicle: {
        year: "",
        make: "",
        model: ""
      },
      product: {
        name: "",
        description: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Comments</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createComment) {
              this.props.createComment(this.state.comment);
            }
          }}>
            <div>
              Body: <input onChange={(e) => {
                const comment = {body: e.target.value};
                this.setState({
                  comment: Object.assign(this.state.comment,comment)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Contact</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createContact) {
              this.props.createContact(this.state.contact);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const contact = {name: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Occupation: <input onChange={(e) => {
                const contact = {occupation: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Avatar: <input onChange={(e) => {
                const contact = {avatar: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Vehicle</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createVehicle) {
              this.props.createVehicle(this.state.vehicle);
            }
          }}>
            <div>
              Year: <input onChange={(e) => {
                const vehicle = {year: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Make: <input onChange={(e) => {
                const vehicle = {make: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Model: <input onChange={(e) => {
                const vehicle = {model: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Product</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createProduct) {
              this.props.createProduct(this.state.product);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const product = {name: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <div>
              Description: <input onChange={(e) => {
                const product = {description: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
      </div>

    );
  }
}
export default CreateThings;


// <div>
//   ID: <input onChange={(e) => {
//     const comment = {_id: e.target.value};
//     this.setState({
//       comment: Object.assign(this.state.comment,comment)
//     });
//   }} />
// </div>

// <div>
//   ID: <input onChange={(e) => {
//     const contact = {_id: e.target.value};
//     this.setState({
//       contact: Object.assign(this.state.contact,contact)
//     });
//   }} />
// </div>

// <div>
//   ID: <input onChange={(e) => {
//     const vehicle = {_id: e.target.value};
//     this.setState({
//       vehicle: Object.assign(this.state.vehicle,vehicle)
//     });
//   }} />
// </div>
//
// <div>
//   ID: <input onChange={(e) => {
//     const product = {_id: e.target.value};
//     this.setState({
//       product: Object.assign(this.state.product,product)
//     });
//   }} />
// </div>
