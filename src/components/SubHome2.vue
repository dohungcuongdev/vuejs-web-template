<template>
  <div>
    <p>Sub Home 2</p>
    <h5>Without Server</h5>
    <button @click="loginAsDHCD1()">Login as username: dohungcuongdev</button>
    <button @click="loginAsDCM1()">Login as username: do-cuong-mulodo</button>
    <button @click="changeUserAddressHCMC1()">Change current user's address into HCMC</button>
    <button @click="logout1()">Logout</button>
    <hr>
    <h5>With Server</h5>
    <button @click="loginAsDHCD2()">Login as username: dohungcuongdev</button>
    <button @click="loginAsDCM2()">Login as username: do-cuong-mulodo</button>
    <button @click="changeUserAddressHCMC2()">Change current user's address into HCMC</button>
    <button @click="logout2()">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { GIT_ACCESS_TOKEN } from "../const";
import { LOCAL_STORAGE_GIT_TOKEN } from "../const";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    })
  },
  mounted() {},
  methods: {
    loginAsDHCD1() {
      this.$store.commit(
        "setCurrentUser",
        this.$store.state.userService.loginResponseDHCD.user
      );
      localStorage.setItem(LOCAL_STORAGE_GIT_TOKEN, GIT_ACCESS_TOKEN); // store token, secret
    },
    loginAsDCM1() {
      this.$store.commit(
        "setCurrentUser",
        this.$store.state.userService.loginResponseDCM.user
      );
      localStorage.setItem(LOCAL_STORAGE_GIT_TOKEN, GIT_ACCESS_TOKEN); // store token, secret
    },
    changeUserAddressHCMC1() {
      if (this.currentUser.role !== "guest")
        this.$store.commit("setUserAddress", "HCMC");
    },
    logout1() {
      if (this.currentUser.role !== "guest") {
        this.$store.commit("setCurrentUser", this.$store.state.guest);
        localStorage.setItem(LOCAL_STORAGE_GIT_TOKEN, null); // remove token
      }
    },

    loginAsDHCD2() {
      this.$store.dispatch("login", {
        username: "dohungcuongdev",
        password: "123"
      });
    },
    loginAsDCM2() {
      this.$store.dispatch("login", {
        username: "do-cuong-mulodo",
        password: "456"
      });
    },
    changeUserAddressHCMC2() {
      this.$store.dispatch("changeUserAddress", "HCMC");
    },
    logout2() {
      this.$store.dispatch("logout");
    }
  }
};
</script>