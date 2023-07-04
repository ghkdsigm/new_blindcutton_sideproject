<template>
  <div id="wrap" class="home font-notosans">
    <div class="flex flex-col mx-auto max-w-6xl justify-between my-8">   
        
        <categorylist />
    </div>
  </div>
</template>

<script>
import categorylist from '~/components/category/CategoryList.vue'
import data from "~/api/data.json";

export default {
    components:{
        categorylist,
    },
    data(){
      return {
        fulldata: ''
      }
    },
    mounted(){
      this.fulldata = data
    }
}
</script>

<style>

</style>