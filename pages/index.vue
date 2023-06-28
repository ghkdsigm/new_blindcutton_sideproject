<template>
  <section id="wrap" class="home">
    <div>
      <Header :top-url="topUrl" />
      <a class="download-blind" style="display: none"
        ><img
          src="https://images.squarespace-cdn.com/content/v1/55a8d6f7e4b054bcba8dfc63/1553722639427-F85K3SJ5IPAWILG60L7D/test.png?format=750w"
        />
        <i class="blind">대한민국 직장인 생활백서 블라인드 다운로드</i></a
      >
      <div class="flex mx-auto max-w-6xl justify-between px-6 my-8">
        <div class="w-5/7 mr-16 py-4">
          <Search class="pb-8" />
          <Topic class="pb-8" />
          <Recuite />
        </div>
        <div class="w-2/7 py-4">
          <a href="">
            <img
              class="w-full"
              src="https://yozm.wishket.com/media/news/1587/%EC%9C%84%EC%8B%9C%EC%BC%93_%EC%A0%84%ED%99%98_%EB%B0%B0%EB%84%88.png"
              alt=""
            />
          </a>
          <div class="my-8 border bg-slate-100 p-6">
            <strong class="flex w-full text-sm font-bold mb-4">인기글</strong>
            <ul class="">
              <li
                class="pb-2"
                v-for="(item, index) in this.famous"
                :key="index"
              >
                <span class="w-full text-sm flex justify-between">
                  <span
                    ><em
                      class="not-italic font-bold text-gray-400 mr-2 w-4 inline-block text-center"
                      >{{ index + 1 }}</em
                    >
                    <a href="">{{ item.title }}</a></span
                  >
                  <span class="w-3 text-center" v-if="item.before === 'up'"
                    ><em class="w-full not-italic text-red-600">▲</em></span
                  >
                  <span
                    class="w-3 text-center"
                    v-else-if="item.before === 'same'"
                    ><em
                      class="w-full not-italic text-black text-xl leading-superzero"
                      >-</em
                    ></span
                  >
                  <span class="w-3 text-center" v-else
                    ><em class="w-full not-italic text-blue-600">▼</em></span
                  >
                </span>
              </li>
            </ul>
            <p class="text-xs w-full text-center mt-4">
              ※ 실시간으로 많이 검색된 회사 순위
            </p>
          </div>
          <a href="">
            <img
              class="w-full"
              src="https://openads-real.s3.amazonaws.com/openadsAdmin/smart-editor/images/20220715104826418_725689ae-297f-4fd5-b4a0-290858e0fa10.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "~/components/Header.vue";
import Search from "~/components/search/Search.vue";
import Topic from "~/pages/topic.vue";
import Recuite from "~/pages/recruite.vue";
import data from "~/api/data.json";

export default {
  components: {
    Header,
    Topic,
    Search,
    Recuite,
  },
  data() {
    return {
      famous: "",
      topUrl: "",
    };
  },
  created() {
    this.famous = data.famous;
  },
  mounted() {
    this.topUrl = data.link.url;
  },
};
</script>

<style></style>
