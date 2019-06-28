<template>
  <div>
    <ul v-for="navigationLink in navigationLinks" :key="navigationLink.name">
      <li>
        <router-link :to="navigationLink.link">{{navigationLink.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { NAVIGATION_LINKS } from "../../const";

export default {
  data() {
    return {
      navigationLinks: NAVIGATION_LINKS
    };
  },

  mounted() {
    
  }
};
</script>