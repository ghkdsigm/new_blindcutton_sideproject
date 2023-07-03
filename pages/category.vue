<template>
  <div id="wrap" class="home font-notosans">
    <div>     
      <categorylist />
    </div>
  </div>
</template>

<script>
import categorylist from '~/components/category/CategoryList.vue'

export default {
    components:{
        categorylist
    },
    mounted(){
        
    }
}
</script>

<style>

</style>