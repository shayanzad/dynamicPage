<template>
  <div>
    <p>name members : {{ single.shayan }}</p>
    <p>id members : {{ single.id }}</p>
    <p>size members : {{ single.size }}</p>
    <p>{{ data[0].shayan }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      single: {},
    };
  },
  computed: {
    ...mapState(["members","data"]),
  },
  mounted() {
    var user = this.data[this.$route.params.id];
    this.single=user 
  },
};
</script>
