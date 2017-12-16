import { connect } from "react-redux";
import CreateAddress from "../components/CreateAddress";
import { createAddress } from "../actions";

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    createAddress: (address)=> {
      dispatch(createAddress(address));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAddress);
