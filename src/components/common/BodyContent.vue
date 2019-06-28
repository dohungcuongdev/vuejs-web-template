<template>
  <div>
    <div>
      <keep-alive>
        <navigation></navigation>
      </keep-alive>
    </div>
    <div>
      <keep-alive>
        <dynamic-content></dynamic-content>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import DynamicContent from "./DynamicContent.vue";

export default {
  components: {
    navigation: Navigation,
    "dynamic-content": DynamicContent
  }
};
</script>