<template>
  <div class="about">
      <template v-for="(item,index) in members" >
        <router-link :key="index" :to="`/EachOne/${item.cat}/${item.id}`">{{ item.name }}</router-link> |
      </template>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState(["members"])
  }
}
</script>
