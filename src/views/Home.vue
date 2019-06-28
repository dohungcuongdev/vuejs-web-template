<template>
  <div>
    <p>Home Page</p>
    <div class="user-profile">
      <p>Login as user {{currentUser}}</p>
      <sub-home2></sub-home2>
    </div>
    <sub-home1>
      <template v-slot:defaultContent>Default Content</template>
      <template v-slot:[sH1SlotName]>Content {{sH1SlotName}}</template>
    </sub-home1>
    <p>Please enter content1 or content2 or content3:</p>
    <input v-model="sH1SlotName">
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubHome1 from "../components/SubHome1.vue";
import SubHome2 from "../components/SubHome2.vue";

export default {
  components: {
    "sub-home1": SubHome1,
    "sub-home2": SubHome2
  },
  data() {
    return {
      sH1SlotName: ""
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    })
  },
  created() {}
};
</script>