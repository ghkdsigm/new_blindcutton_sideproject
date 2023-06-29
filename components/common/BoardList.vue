<template>
    <div>
      <h3 class="w-full border-b border-slate-300 flex justify-between text-xl font-bold mb-4 items-center py-2"> 
        <slot name="boardheader"></slot> <a href="" class="text-xs font-normal">자세히보기</a>
      </h3>
      <ul>
        <li class="pb-3 last:pb-0 flex justify-between" v-for="(item, index) in listData" :key="index">
          <span class="flex items-center w-11/12">        
            <a href="" class="text-sm items-center max-w-[90%] truncate inline-block">
              <img src="https://www.pngkey.com/png/full/291-2912837_album-comments-album-icon-png.png" alt="" class="relative bottom-0.5 inline-block w-4" v-if="item.addedfile === 'Y'">
              {{ item.title }}
            </a>
          </span>
          <span class="w-1/12 flex justify-between text-left">
            <span class="w-1/2 text-xs"><i class="blind"></i>{{ item.views }}</span>        
          </span>
        </li>
      </ul>      
    </div>
  </template>
  
  <script>  
  export default {
    data(){
      return {
        listData: ''
      }
    },
    props: {
      sports: {
        type: Array,
      },
      loves: {
        type: Array
      },
      games: {
        type: Array
      },
      cars: {
        type: Array
      }
    },
    created(){
      if(this.sports) {
        this.listData = this.sports
      } 
      else if (this.cars) {
        this.listData = this.cars
      }
      else if (this.games) {
        this.listData = this.games
      }
      else {
        this.listData = this.loves
      }
    }
  }
  </script>
  
  <style>
  
  </style>