<template>
    <board_list :cars="cars">
        <template v-slot:boardheader>
            <span class="tracking-tighter">자동차</span>
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
            cars : ""
        }
    },
    created(){
        this.cars = data.cars
    }
  }
  </script>
  
  <style>
  
  </style>