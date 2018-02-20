import { connect } from "react-redux";
import Addresses from "../components/Addresses";
import { deleteAddress } from "../actions";

function mapStateToProps(state) {
  return {
    addresses: state.addresses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteAddress: function (id) {
      dispatch(deleteAddress(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Addresses);
