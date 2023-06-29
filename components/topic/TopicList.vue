<template>
  <div>
    <h3 class="w-full border-b border-slate-300 flex justify-between text-xl font-bold mb-4 items-center py-2 tracking-tighter">오늘의 이야기 <a href="" class="text-xs font-normal">자세히보기</a></h3>
    <ul>
      <li class="pb-3 last:pb-0 flex justify-between tracking-tighter" v-for="(item, index) in this.listData" :key="index">
        <span class="flex items-center w-11/12">        
          <span class="flex items-center border border-slate-300 px-2 text-xs mr-2 text-slate-500">{{ item.category }}</span> 
          <a href="" class="text-sm items-center max-w-[90%] truncate inline-block">
            <img src="https://www.pngkey.com/png/full/291-2912837_album-comments-album-icon-png.png" alt="" class="relative bottom-0.5 inline-block w-4" v-if="item.addedfile === 'Y'">
            {{ item.title }}
          </a>
        </span>
        <span class="w-1/12 flex justify-between text-left">
          <span class="w-1/2 text-xs"><i class="blind"></i>{{ item.views }}</span>
          <span class="w-1/2 text-xs"><i class="blind"></i>{{ item.likes }}</span>           
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '~/api/data.json'

export default {
  data(){
    return {
      listData: ''
    }
  },
  created(){
    this.listData = data.board
  }
}
</script>

<style>

</style>