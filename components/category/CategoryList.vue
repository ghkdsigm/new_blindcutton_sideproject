<template>    
    <div>     
        <ul class="border-b border-gray-200 flex px-2">
            <li ref="categorylisttop" v-for="(item, index) in array" :key="index" class="px-4 py-2">
                <span @click="changeSet(item, index)" class="hover:cursor-pointer px-4 py-2">
                    {{ item === 'board' ? '오늘의 이야기' :  item === 'famous' ? '인기' : item === 'sports' ? '스포츠' : item === 'loves' ? '연예' : item === 'games' ? '게임' : item === 'cars' ? '자동차' : null}}
                </span>                    
            </li>
        </ul>
        <div>
            <div class="w-full flex flex-wrap overflow-hidden">          
                <nuxt-link :to="{name:'boarddetail', params:{id: detailSet[index]}}" class="w-1/2 flex flex-col justify-between py-8 pl-4 odd:pr-4 odd:pl-0 border-b border-gray-200 odd:border-r" v-for="(item, index) in detailSet" :key="index">
                    <div class="pb-2 text-sm">
                        {{ item.category }} 
                    </div>
                    <div class="pb-2">
                        <div class="flex items-center">
                            <span :class="{ 'w-5/6' : item.imgurl !== '' }" class="pr-4">
                                <h3 class="text-lg font-bold pb-2">{{ item.title }}</h3>
                                <p class="pb-2 text-sm h-10 items-center line-clamp-2 hidden custormizing max-h-10">{{ item.content }}</p>
                            </span>
                            <span :class="{ 'w-1/6' : item.imgurl !== '' }" v-if="item.imgurl !== ''">
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
  import data from "~/api/data.json";

  export default {
    data(){
        return {
            paramData: this.$route.params.id,
            detailSet: '',
            detailList: '',
            array: [],
            selLi: this.$refs.categorylisttop,
            checkClick: false
        }
    },
    created(){
        
    },
    mounted(){    
        for(var key in data) {         
            if(key !== 'link'){
                this.array.push(key)               
            }            
        }    
        this.$nextTick(function() { 
            this.detailSet = data[this.paramData]
            
            for(let i = 0; i < this.array.length; i++){
                this.array[i] === this.$route.params.id ? this.$refs.categorylisttop[i].classList.add('font-bold') : this.$refs.categorylisttop[i].classList.remove('font-bold')
                this.array[i] === this.$route.params.id ? this.$refs.categorylisttop[i].childNodes[0].classList.add('border-b-2', 'border-blue-400') : this.$refs.categorylisttop[i].childNodes[0].classList.remove('border-b-2', 'border-blue-400')
            }
        }) 
    },
    methods:{
        changeSet(e, index){               
            for(let i = 0; i < this.array.length; i++){
                this.array[i] === e ? this.$refs.categorylisttop[i].classList.add('font-bold') : this.$refs.categorylisttop[i].classList.remove('font-bold')
                this.array[i] === e ? this.$refs.categorylisttop[i].childNodes[0].classList.add('border-b-2', 'border-blue-400') : this.$refs.categorylisttop[i].childNodes[0].classList.remove('border-b-2', 'border-blue-400')
            }
            this.paramData = e
            this.detailSet = data[this.paramData]
        }    
    }
  }
  </script>
  
  <style>
  .custormizing {display: -webkit-inline-box;}
  </style>