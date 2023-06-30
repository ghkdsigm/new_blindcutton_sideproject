<template>
  <div class="flex mx-auto max-w-6xl justify-between px-6 my-8">
    <div class="w-5/7 mr-16 flex flex-wrap">
        <div class="w-full border-b border-gray-200 pb-8">
            <h1>
              <a href="" class="font-bold tracking-tighter">
                {{ cont.category }}
              </a>
            </h1>
            <h2 class="text-2xl my-3 font-bold tracking-tighter">              
              {{ cont.title }}
            </h2>
            <div>
              <a href="" class="text-sm font-medium text-sky-500">{{ cont.writer }}</a>
              <span></span>
            </div>
            <div>
              <span>
                <span class="text-xs text-gray-500 font-medium">{{ cont.date }}</span>
                <span class="text-xs text-gray-500 font-medium">{{ cont.views }}</span>
                <span class="text-xs text-gray-500 font-medium">{{ cont.likes }}</span>
              </span>
              <span>
                <span></span>
                <span></span>
              </span>
            </div>
        </div>
        <div class="w-full py-8">
          <p class="text-sm tracking-tighter">
            {{ cont.content }}
          </p>
          <div class="flex py-3 ">
            <span class="tracking-tighter">{{ cont.recommentcount }}</span>
          </div>
        </div>
        <div class="w-full border-t border-gray-200 pb-8">

        </div>
    </div>
    <div class="w-2/7 py-4">
        <div class="mb-8 border border-slate-200 p-6">
            <strong class="flex w-full text-sm font-bold mb-4">'{{cont.category}}'관련 추천글</strong>
            <!-- <ul class="">
              <li
                class="pb-2 tracking-tighter"
                v-for="(item, index) in this.famous"
                :key="index"
              >
                <span class="w-full text-sm flex justify-between">
                  <span class="flex w-11/12"><em class="not-italic font-bold text-gray-400 mr-2 w-4 inline-block text-center text-sm"
                      >{{ index + 1 }}</em
                    >
                    <a href="" class="text-sm truncate tracking-tighter" :title="item.title">{{ item.title }}</a></span
                  >
                  <span class="w-3 text-center text-xs" v-if="item.before === 'up'"
                    ><em class="w-full not-italic text-red-600">▲</em></span
                  >
                  <span class="w-3 text-center text-xs"
                    v-else-if="item.before === 'same'"
                    ><em
                      class="w-full not-italic text-black text-xl leading-superzero"
                      >-</em
                    ></span
                  >
                  <span class="w-3 text-center text-xs" v-else
                    ><em class="w-full not-italic text-blue-600">▼</em></span
                  >
                </span>
              </li>
            </ul> -->
            <p class="text-xs w-full text-center mt-4 tracking-tighter text-gray-400">
              ※ 실시간으로 많이 조회된 글 순위
            </p>
        </div>      
    </div>
  </div>
</template>

<script>
import data from "~/api/data.json";

export default {
  data(){
    return {
      cont : ""
    }
  },
  mounted(){
    if(this.$route.params.id){
      this.cont = this.$route.params.id
    }
  }
}
</script>

<style>

</style>