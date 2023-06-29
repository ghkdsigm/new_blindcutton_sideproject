<template>
    <board_list :sports="sports">
        <template v-slot:boardheader>
            스포츠
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