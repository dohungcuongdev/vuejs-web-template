import { LOCAL_STORAGE_GIT_TOKEN } from "../const";

export default {
    // actions - the actions requested from client
    // multiple actions may use the same mutation
    login({ state, commit }, user) {
        console.log('action - login is processing with username=' + user.username + ' password=' + user.password);
        state.userService.login(user.username, user.password).
            then(response => {
                console.log(response);
                localStorage.setItem(LOCAL_STORAGE_GIT_TOKEN, response.token); // store token, secret
                commit("setCurrentUser", response.user);
            })
            .catch(e => {
                console.error(e);
            });
    },
    changeUserAddress({ state, commit }, address) {
        console.log('action - changeUserAddress is processing with address=' + address);
        if (state.currentUser.role !== 'guest') {
            state.userService.changeUserAddress(state.currentUser.username, address).
                then(response => {
                    console.log(response);
                    commit("setUserAddress", address);
                })
                .catch(e => {
                    console.error(e);
                });
        }
    },
    logout({ state, commit }) {
        if (state.currentUser.role !== 'guest') {
            state.userService.logout().
                then(response => {
                    console.log(response);
                    localStorage.setItem(LOCAL_STORAGE_GIT_TOKEN, null); // remove token
                    commit("setCurrentUser", state.guest);
                })
                .catch(e => {
                    console.error(e);
                });
        }
    }
}