<template>
  <div id="wrap" class="home font-notosans">
    <div>     
      <div class="flex mx-auto max-w-6xl justify-between my-8">
        <div class="w-4/7 flex-1 mr-16  py-4 flex flex-wrap">
          <Search class="w-full pb-8" />
          <Topic class="w-full pb-8" />
          <Recuite class="w-full pb-8" />
          <div class="w-full space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 pb-8">
            <div class="group relative pb-8">
              <div class="relative w-full overflow-hidden rounded-lg">
                <Sports />
              </div>
            </div>
            <div class="group relative pb-8">
              <div class="relative w-full overflow-hidden rounded-lg">
                <Loves />
              </div>
            </div>
            <div class="group relative">
              <div class="relative w-full overflow-hidden rounded-lg">
                <Cars />
              </div>
            </div>
            <div class="group relative">
              <div class="relative w-full overflow-hidden rounded-lg">
                <Games />
              </div>
            </div>
          </div>
          <div class="w-full">
            <a href="">
              <img
                class="w-full"
                src="https://yozm.wishket.com/media/news/1587/%EC%9C%84%EC%8B%9C%EC%BC%93_%EC%A0%84%ED%99%98_%EB%B0%B0%EB%84%88.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="w-2/7 py-4">
          <a href="">
            <img
              class="w-full"
              src="https://yozm.wishket.com/media/news/1587/%EC%9C%84%EC%8B%9C%EC%BC%93_%EC%A0%84%ED%99%98_%EB%B0%B0%EB%84%88.png"
              alt=""
            />
          </a>
          <div class="my-8 bg-slate-100 p-6">
            <strong class="flex w-full text-sm font-bold mb-4">실시간 인기글</strong>
            <ul class="">
              <li
                class="pb-2 tracking-tighter"
                v-for="(item, index) in this.famous"
                :key="index"
              >
                <nuxt-link :to="{name:'boarddetail', params:{id: item}}" class="w-full text-sm flex justify-between">
                  <span class="flex w-11/12"><em class="not-italic font-bold text-gray-400 mr-2 w-4 inline-block text-center text-sm"
                      >{{ index + 1 }}</em
                    >
                    <a href="" class="text-sm truncate tracking-tighter" :title="item.title">{{ item.title }}</a>
                  </span>
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
                </nuxt-link>
              </li>
            </ul>
            <p class="text-xs w-full text-center mt-4 tracking-tighter text-gray-400">
              ※ 실시간으로 많이 조회된 글 순위
            </p>
          </div>          
          <a href="" class="my-8 block">
            <img
              class="w-full"
              src="https://i.pinimg.com/originals/40/6b/6b/406b6b93879ff8a134e75d9f8be619e6.png"
              alt=""
            />
          </a>
          <a href="" class="my-8 block">
            <img
              class="w-full"
              src="https://openads-real.s3.amazonaws.com/openadsAdmin/smart-editor/images/20220715104826418_725689ae-297f-4fd5-b4a0-290858e0fa10.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "~/components/search/Search.vue";
import Topic from "~/pages/topic.vue";
import Recuite from "~/pages/recruite.vue";
import Sports from "~/pages/sports.vue";
import Loves from "~/pages/love.vue";
import Games from "~/pages/games.vue";
import Cars from "~/pages/cars.vue";
import data from "~/api/data.json";

export default {
  components: {
    Topic,
    Search,
    Recuite,
    Sports,
    Loves,
    Games,
    Cars
  },
  data(){
    return {
      famous: ""
    }
  },
  created() {
    this.famous = data.famous;
  }
};
</script>

<style></style>
