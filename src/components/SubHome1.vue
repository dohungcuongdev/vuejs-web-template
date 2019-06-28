<template>
  <div>
    <p>Sub Home 1</p>
    <h4><slot name="defaultContent"></slot></h4>
    <h1><slot name="content1"></slot></h1>
    <h2><slot name="content2"></slot></h2>
    <h3><slot :name="slotName"></slot></h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
        slotName: 'content3'
    };
  },
  computed: {
    ...mapGetters({})
  },
  created() {}
};
</script>