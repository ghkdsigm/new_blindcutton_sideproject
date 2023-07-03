<template>
    <div>
      <h3 class="w-full border-b border-slate-300 flex justify-between text-xl font-bold mb-4 items-center py-2"> 
        <slot name="boardheader"></slot> <nuxt-link :to="{name:'category', params:{id: linkData}}" class="text-xs font-normal">더보기</nuxt-link>
      </h3>
      <ul>
        <li class="pb-3 last:pb-0 flex justify-between tracking-tighter" v-for="(item, index) in listData.slice(0,5)" :key="index">
          <span class="flex items-center w-11/12">        
            <nuxt-link :to="{name:'boarddetail', params:{id: item}}" class="text-sm items-center max-w-[90%] truncate inline-block" :title="item.title">
              <img src="https://www.pngkey.com/png/full/291-2912837_album-comments-album-icon-png.png" alt="" class="relative bottom-0.5 inline-block w-4" v-if="item.addedfile === 'Y'">
              {{ item.title }}
            </nuxt-link>
          </span>
          <span class="w-1/12 flex justify-between text-left">
            <span class="w-1/2 text-xs text-gray-500 font-light"><i class="blind"></i>{{ item.views }}</span>        
          </span>
        </li>
      </ul>      
    </div>
  </template>
  
  <script>  
  export default {
    data(){
      return {
        listData: '',
        linkData: ''
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
      },
      link: {
        type: String
      }
    },
    created(){
      if(this.sports) {
        this.listData = this.sports
        this.linkData = 'sports'
      } 
      else if (this.cars) {
        this.listData = this.cars
        this.linkData = 'cars'
      }
      else if (this.games) {
        this.listData = this.games
        this.linkData = 'games'
      }
      else {
        this.listData = this.loves
        this.linkData = 'loves'
      }
    }
  }
  </script>
  
  <style>
  
  </style>