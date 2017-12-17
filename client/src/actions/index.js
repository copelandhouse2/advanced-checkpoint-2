// Loading the list of addresses
export function loadAddresses() {
  return function (dispatch) {
    fetch("/addresses")
    .then( (response) => {
      return response.json();
    }).then((addresses) => {
      dispatch(addressesLoaded(addresses));
    });
  };
}
function addressesLoaded(addresses) {
  return {
    type: "ADDRESSES_LOADED",
    value: addresses
  };
}

// Action to create the Address
export function createAddress(c) {
  return function (dispatch) {
    fetch("/addresses", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadAddresses()));
  };
}

// Adding the calls to fetch 1 entity.
export function getAddress(id) {
  return function (dispatch) {
    fetch(`/addresses/${id}`)
    .then( (response) => {
      return response.json();
    }).then((address) => {
      dispatch(getAddressDone(address));
    });
  };
}
function getAddressDone(address) {
  return {
    type: "GET_ADDRESS_DONE",
    value: address
  };
}

// Action to create the Address
export function deleteAddress(id) {
  return function (dispatch) {
    fetch(`/addresses/${id}`, {
      method: "DELETE"
    }).then(() => dispatch(loadAddresses()));
  };
}
