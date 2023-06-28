<template>
    <div>
        <h3 class="w-full border-b border-slate-300 flex justify-between text-xl font-bold mb-4 items-center py-2">인기 뽑기 <a href="" class="text-xs font-normal">자세히보기</a></h3>
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div class="group relative">
                <div
                    class="relative h-12 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-28 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="h-full w-full object-cover object-center"></div>
                <h3 class="mt-6 text-sm text-gray-500"><a href="#"><span class="absolute inset-0"></span> Desk and Office
                    </a></h3>
                <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
            </div>
            <div class="group relative">
                <div
                    class="relative h-12 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-28 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                        alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                        class="h-full w-full object-cover object-center"></div>
                <h3 class="mt-6 text-sm text-gray-500"><a href="#"><span class="absolute inset-0"></span> Self-Improvement
                    </a></h3>
                <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
            </div>
            <div class="group relative">
                <div
                    class="relative h-12 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-28 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                        alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                        class="h-full w-full object-cover object-center"></div>
                <h3 class="mt-6 text-sm text-gray-500"><a href="#"><span class="absolute inset-0"></span> Self-Improvement
                    </a></h3>
                <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import data from '~/api/data.json'

export default {
    data() {
        return {
            listData: ''
        }
    },
    created() {
        this.listData = data.board
    }
}
</script>
  
<style></style>