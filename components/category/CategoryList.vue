<template>    
    <div>     
        <div class="flex mx-auto max-w-6xl justify-between my-8">
            <div class="w-full py-4 flex flex-wrap overflow-hidden">          
                <nuxt-link :to="{name:'boarddetail', params:{id: detailSet[index]}}" class="w-1/2 py-8 pl-4 odd:pr-4 odd:pl-0 border-b border-gray-200 odd:border-r" v-for="(item, index) in detailSet" :key="index">
                    <div class="pb-2 text-sm">
                        {{ item.category }} 
                    </div>
                    <div class="pb-2">
                        <div class="flex">
                            <span :class="{ 'w-9/12' : item.imgurl !== '' }">
                                <h3 class="text-lg font-bold pb-2">{{ item.title }}</h3>
                                <p class="pb-2 text-sm">{{ item.content }}</p>
                            </span>
                            <span :class="{ 'w-3/12' : item.imgurl !== '' }" v-if="item.imgurl !== ''">
                                <img :src="item.imgurl" alt="" />
                            </span>
                        </div>
                        <a href="" class="pb-3 text-xs">{{ item.writer }}</a>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-xs">
                            <span>{{ item.views }}</span>
                            <span>{{ item.likes }}</span>
                            <span>{{ item.dislikes }}</span>
                        </span>
                        <span class="text-xs"> {{ item.date }} </span>
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