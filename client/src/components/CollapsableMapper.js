import React, { Component } from "react";
import {Link} from "react-router-dom"

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Hide";
    let dataDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      dataDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]}
            {d[this.props.field1]}
            {d[this.props.field2]}
            {d[this.props.field3]}
            <Link to={"/" + this.props.path + "/" + d._id}> View </Link>
          </div>
        );
      });
    } else {
      buttonText = "Show";
      dataDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {dataDivs}
      </div>);
  }
}


export default CollapsableMapper;
