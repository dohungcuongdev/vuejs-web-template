export default {
    // mutations - render or update view by changing state or whatever ...
    setCurrentUser(state, currentUser) {
        state.currentUser = currentUser;
        console.log('mutation - currentUser is set to ' + currentUser);
    },
    setUserAddress(state, address) {
        state.currentUser.address = address
        console.log('mutation - currentUser.address is set to ' + address);
    }
}