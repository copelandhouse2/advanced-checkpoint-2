import { connect } from "react-redux";
import Addresses from "../components/Addresses";

function mapStateToProps(state) {
  return {
    contacts: state.addresses
  };
}

export default connect(mapStateToProps)(Addresses);
