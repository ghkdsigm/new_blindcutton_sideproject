<template>
  <div class="border-b border-stone-300">
    <div
      v-if="topUrl"
      class="w-full px-14 py-2 bg-gray-700 flex items-center justify-between"
    >
      <a :href="topUrl" target="_blank" class="text-white text-sm"
        ><em class="font-bold not-italic tracking-tighter">MotorH</em>
        포트폴리오 바로가기 <span aria-hidden="true">&rarr;</span></a
      >
      <button class="text-white text-normal hover:font-bold" @click="closeTop">
        X
      </button>
    </div>
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#"><AppLogo /></a>
        <a
          href="#"
          class="text-xl font-semibold leading-6 text-gray-900 self-center"
          >홈</a
        >
        <a
          href="#"
          class="text-xl font-medium leading-6 text-gray-900 self-center"
          >기업</a
        >
        <a
          href="#"
          class="text-xl font-medium leading-6 text-gray-900 self-center"
          >리뷰</a
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          class="text-sm font-bold leading-6 text-white border-solid bg-blue-600 px-5 py-2 mr-3"
          >글쓰기</a
        >
        <a
          href="#"
          class="text-sm font-bold leading-6 text-gray-900 border-solid border border-gray-300 px-5 py-2"
          >로그인</a
        >
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              src="https://framerusercontent.com/images/4YE8woWOAvHzPL0wqcy1b7dS1i4.png"
              alt=""
              class="w-20"
            />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Home</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Company</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 bg-black-600"
                >글쓰기</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >로그인</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo,
  },
  props: {
    topUrl: {
      type: String,
    },
  },
  methods: {
    closeTop() {
      this.topUrl = "";
    },
  },
};
</script>

<style></style>
