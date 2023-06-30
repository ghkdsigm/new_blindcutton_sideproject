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
        <p class="pt-4 pl-2 pr-2 text-base font-bold tracking-tight">댓글 <span>14</span></p>
        <!-- 댓글존 -->
        <div class="write_area">
          <form>
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center py-2 rounded-lg">
                <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Upload image</span>
                </button>
                <textarea id="chat" rows="1" class="block p-2.5 mx-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="댓글을 남겨주세요..."></textarea>
                <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    <span class="sr-only">Send message</span>
                </button>
            </div>
          </form>          
        </div>
      </div>
    </div>
    <div class="w-2/7 py-4">
      <div class="mb-8 border border-slate-200 p-6">
        <strong class="flex w-full text-sm font-bold mb-4">'{{ cont.category }}'관련 추천글</strong>
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
</div></template>

<script>

export default {
  data() {
    return {
      cont: ""
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.cont = this.$route.params.id
    }
  }
}
</script>

<style></style>