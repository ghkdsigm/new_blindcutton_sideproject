<template>
    <board_list :games="games" :link="link">
        <template v-slot:boardheader>
            <span class="tracking-tighter">게임</span>
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
            games : "",
            link : "/sports"
        }
    },
    created(){
        this.games = data.games
    }
  }
  </script>
  
  <style>
  
  </style>