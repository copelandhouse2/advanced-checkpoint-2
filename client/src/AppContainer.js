import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadAddresses } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadAddresses: function () {
      dispatch(loadAddresses());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
