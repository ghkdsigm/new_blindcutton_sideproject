<template>    
    <div>     
        <div class="flex mx-auto max-w-6xl justify-between my-8">
            <div class="w-full py-4 flex flex-wrap overflow-hidden">          
                <div class="w-1/2 py-8 pl-4 odd:pr-4 odd:pl-0" v-for="(item, index) in detailSet" :key="index">
                    <div>
                        {{ item.category }} 
                    </div>
                    <div>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.content }}</p>
                        <a href="">{{ item.writer }}</a>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>                
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