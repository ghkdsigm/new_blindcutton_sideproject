<template>
  <div class="flex mx-auto max-w-6xl justify-between my-8">
    <div class="w-5/7 mr-16 flex flex-wrap content-start">
      <div class="w-full border-b border-gray-200 pb-8">
        <h1>
          <span href="" class="font-bold tracking-tighter flex items-center">
            <nuxt-link
              :to="{ name: 'category', params: { id: 'board' } }"
              class="h-full text-sm font-semibold"
              >토픽</nuxt-link
            >
            <span class="text-xs px-3 font-mono h-full">></span>
            <span class="h-full text-sm font-semibold">{{
              cont.category
            }}</span>
          </span>
        </h1>
        <h2 class="text-2xl my-3 font-bold tracking-tighter">
          {{ cont.title }}
        </h2>
        <div>
          <a href="" class="text-sm font-medium text-sky-500">{{
            cont.writer
          }}</a>
          <span></span>
        </div>
        <div>
          <span>
            <span class="text-xs text-gray-500 font-medium">{{
              cont.date
            }}</span>
            <span class="text-xs text-gray-500 font-medium">{{
              cont.views
            }}</span>
            <span class="text-xs text-gray-500 font-medium">{{
              cont.likes
            }}</span>
          </span>
          <span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <div class="w-full py-8">
        <p class="text-base tracking-tighter">
          {{ cont.content }}
        </p>
        <div v-if="cont.imgurl" class="pt-8">
          <img :src="cont.imgurl" alt="" />
        </div>
        <div class="flex pt-8">
          <span class="tracking-tighter">{{ cont.recommentcount }}</span>
        </div>
        <ul class="flex pt-8">
          <li v-for="(item, index) in cont.hashtag" :key="index">
            <span class="pr-2 font-mono text-xs text-gray-600 tracking-tight">
              {{ "#" + item }}
            </span>
          </li>
        </ul>
      </div>
      <!-- 댓글존 -->
      <div class="w-full border-t border-b border-gray-200">
        <p class="pt-4 pl-2 pr-2 text-base font-bold tracking-tight">
          댓글 <span>14</span>
        </p>
        <div class="write_area pb-4">
          <form>
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center py-2 rounded-lg">
              <button
                type="button"
                class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Upload image</span>
              </button>
              <textarea
                ref="comment"
                id="chat"
                rows="1"
                @keyup="focusText"
                class="block p-2.5 mx-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="댓글을 남겨주세요..."
              ></textarea>
              <span
                @click="commentbt"
                type="submit"
                :class="[
                  emptyValue
                    ? 'text-gray-400 hover:bg-gray-100'
                    : 'text-blue-600 hover:bg-blue-100',
                ]"
                class="inline-flex justify-center p-2 rounded-full cursor-pointer"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
                <span class="sr-only">Send message</span>
              </span>
            </div>
          </form>
        </div>
      </div>
      <!-- //댓글존 -->
      <!-- 대댓글존 -->
      <div class="w-full p-4 border-b border-gray-200">
        <p class="flex">
          <a href="" class="text-sm font-medium text-sky-500">{{
            cont.writer
          }}</a>
        </p>
        <p class="text-base tracking-tighter pt-2 pb-4">
          {{ cont.content }}
        </p>
        <div class="flex justify-between">
          <span class="text-xs">
            <span></span>
            <a href="">좋아요</a>
            <a href="">대댓글</a>
          </span>
          <span class="text-xs"> 대댓글쓰기 </span>
        </div>
      </div>
      <div class="w-full p-4 border-b border-gray-200">
        <p class="flex">
          <a href="" class="text-sm font-medium text-sky-500">{{
            cont.writer
          }}</a>
        </p>
        <p class="text-base tracking-tighter pt-2 pb-4">
          {{ cont.content }}
        </p>
        <div class="flex justify-between">
          <span class="text-xs">
            <span></span>
            <a href="">좋아요</a>
            <a href="">대댓글</a>
          </span>
          <span class="text-xs"> 대댓글쓰기 </span>
        </div>
      </div>
      <!-- //대댓글존 -->
      <!-- View 광고존 -->
      <div class="w-full mt-10 mb-6">
        <a href="">
          <img
            src="http://d2u3dcdbebyaiu.cloudfront.net/img/web_banner/web_banner_kr_1683619733.jpg"
            alt=""
          />
        </a>
      </div>
      <!-- //View 광고존 -->
    </div>
    <div class="w-2/7">
      <div class="mb-8 border border-slate-200 p-6">
        <strong class="flex w-full text-sm font-bold mb-4"
          >'{{ cont.category }}'관련 추천글</strong
        >
        <!-- 관련 추천글 -->
        <ul>
          <li v-if="this.newarr.length === 0">
            <span class="w-full text-sm flex justify-between">
              <span class="flex w-full">
                <span class="text-sm truncate tracking-tighter"
                  >관련글이 존재하지 않습니다.</span
                >
              </span>
            </span>
          </li>
          <li
            v-else
            class="pb-2 tracking-tighter"
            v-for="(item, index) in this.newarr"
            :key="index"
          >
            <span class="w-full text-sm flex justify-between">
              <span class="flex w-full"
                ><em
                  class="not-italic font-bold text-gray-400 mr-2 w-4 inline-block text-center text-sm"
                  >{{ index + 1 }}</em
                >
                <span
                  class="text-sm truncate tracking-tighter hover:cursor-pointer"
                  @click="viewRelative(item)"
                  >{{ item.title }}</span
                >
              </span>
            </span>
          </li>
        </ul>
        <!-- //관련 추천글 -->
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
</template>

<script>
import data from "~/api/data.json";

export default {
  data() {
    return {
      cont: "",
      cbt: "",
      emptyValue: true,
      recommend: "",
      newarr: [],
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.cont = this.$route.params.id;
    }

    if (data[this.cont.type]) {
      for (let i = 0; i < data[this.cont.type].length; i++) {
        if (
          this.cont.category === data[this.cont.type][i].category &&
          this.cont.id !== data[this.cont.type][i].id
        ) {
          this.newarr.push(data[this.cont.type][i]);
        }
      }
    }
  },
  methods: {
    focusText(newValue, oldValue) {
      if (newValue.target.value !== "") {
        this.emptyValue = false;
        this.$refs.comment.setAttribute("rows", 5);
      } else {
        this.emptyValue = true;
        this.$refs.comment.setAttribute("rows", 1);
      }
    },
    commentbt() {
      if (this.emptyValue === true) {
        alert("내용을 입력해주세요");
        this.$refs.comment.focus();
      }
    },
    viewRelative(e) {
      this.cont = e;

      if (data[this.cont.type]) {
        for (let i = 0; i < data[this.cont.type].length; i++) {
          if (
            this.cont.category === data[this.cont.type][i].category &&
            this.cont.id !== data[this.cont.type][i].id
          ) {
            this.newarr = [];
            this.newarr.push(data[this.cont.type][i]);
          }
        }
      }
    },
  },
  watch: {
    focusText(newValue, oldValue) {
      // methods에 정의된 함수를 활용하여 데이터의 변화를 처리
      this(newValue, oldValue);
    },
  },
};
</script>

<style></style>
