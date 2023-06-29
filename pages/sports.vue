<template>
    <board_list :sports="sports">
        <template v-slot:boardheader>
            <span class="tracking-tighter">스포츠</span>
        </template>
    </board_list>
  </template>
  
  <script>
  import board_list from '~/components/common/BoardList.vue'
  import data from "~/api/data.json";
  
  
  export default {
    components: {
        board_list
    },
    data(){
        return {
            sports : ""
        }
    },
    created(){
        this.sports = data.sports
    }
  }
  </script>
  
  <style>
  
  </style>