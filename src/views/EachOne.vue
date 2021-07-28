<template>
  <div>
    
    <p>id: {{ single[0].id }}</p>
    <p>size: {{ single[0].size }}</p>
    <p>price:  {{ single[0].price }}</p>
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
    ...mapState(["members"]),
  },
  mounted() {
    

    this.single=this.members.filter(item=>{
      return item.id==this.$route.params.id
    })

    
  
    
  },
};
</script>
