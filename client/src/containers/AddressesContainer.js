import { connect } from "react-redux";
import Addresses from "../components/Addresses";

function mapStateToProps(state) {
  return {
    addresses: state.addresses
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   };
// }

export default connect(mapStateToProps)(Addresses);
