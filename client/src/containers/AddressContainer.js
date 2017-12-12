import { connect } from "react-redux";
import Address from "../components/Address";
import { getContact } from "../actions";

function mapStateToProps(state) {
  return {
    contact: state.address
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAddress: function (id) {
      dispatch(getAddress(id));
    }

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Address);
