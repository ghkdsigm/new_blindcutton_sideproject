<template>    
    <div>     
        <div class="flex mx-auto max-w-6xl justify-between my-8">
            <div class="w-full py-4 flex flex-wrap overflow-hidden">          
                <nuxt-link :to="{name:'boarddetail', params:{id: detailSet[index]}}" class="w-1/2 py-8 pl-4 odd:pr-4 odd:pl-0" v-for="(item, index) in detailSet" :key="index">
                    <div class="pb-2 text-sm">
                        {{ item.category }} 
                    </div>
                    <div>
                        <h3 class="text-lg font-bold pb-2">{{ item.title }}</h3>
                        <p class="pb-3 text-sm">{{ item.content }}</p>
                        <a href="" class="text-xs">{{ item.writer }}</a>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </nuxt-link>                
            </div>        
        </div>
    </div>
  </template>
  
  <script>
  import board_list from '~/components/common/BoardList.vue'
  import data from "~/api/data.json";

  export default {
    data(){
        return {
            paramData: this.$route.params.id,
            detailSet: ''
        }
    },
    created(){        
        this.$nextTick(function() { 
            this.detailSet = data[this.paramData]
        })        
    }
  }
  </script>
  
  <style>
  
  </style>