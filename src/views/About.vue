<template>
  <div class="about">
      <template v-for="(item,index) in members" >
        <router-link :key="index" :to="`/EachOne/${index}`">{{ item.name }}</router-link> |
      </template>
      <h1>{{ data }}</h1>
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
    ...mapState(["members","data"])
  }
}
</script>
