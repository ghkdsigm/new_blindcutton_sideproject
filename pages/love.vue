<template>
    <board_list :loves="loves" :link="link">
        <template v-slot:boardheader>
            <span class="tracking-tighter">연예</span>
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
            loves : "",
            link : "/love"
        }
    },
    created(){
        this.loves = data.loves
    }
  }
  </script>
  
  <style>
  
  </style>