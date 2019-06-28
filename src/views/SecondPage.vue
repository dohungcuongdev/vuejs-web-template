<template>
  <div>
    <p>Second Page</p>
    <div v-if="currentUser.role!=='guest'">
      <p>Login as user {{currentUser}}</p>
      <button @click="getAllRepos()">Refesh Data</button>
      <ul v-for="repo in repos" :key="repo.id">
        <li>{{repo.name}}</li>
      </ul>
    </div>
    <div v-else>Please login</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      repos: [],
      loading: true
    };
  },
  computed: {
    ...mapGetters({
      gitRepoService: "gitRepoService", // dependency injection
      currentUser: "currentUser"
    })
  },
  created() {
    if (this.repos.length == 0) {
      this.getAllRepos();
    }
  },
  methods: {
    getAllRepos() {
      (this.loading = true),
        this.gitRepoService
          .getRepos()
          .then(response => {
            this.repos = response;
            this.loading = false;
          })
          .catch(e => {
            console.error(e);
            this.loading = false;
          });
    }
  }
};
</script>