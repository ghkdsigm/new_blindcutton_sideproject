<template>
    <board_list :loves="loves">
        <template v-slot:boardheader>
            <span>연예</span>
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
            loves : ""
        }
    },
    created(){
        this.loves = data.loves
    }
  }
  </script>
  
  <style>
  
  </style>