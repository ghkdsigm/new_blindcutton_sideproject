<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" >
        <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-800 dark:bg-gray-800 opacity-75"></div>
            </div>

            <!-- 내용 -->
            <div @click.stop class="inline-block bg-white dark:bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl w-full justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="border-b border-gray-200 dark:border-gray-700 p-2 text-right flex items-center justify-between">
                <button @click="sendClose()" class="fas fa-times text-primary dark:text-white text-sm p-2">닫기</button>
                <!-- 글쓰기버튼 -->
                <div class="lg:text-right mr-2">
                    <button v-if="this.tBody !== '' && this.tTitle !== ''" @click="onAddcont" class="bg-primary text-blue-600 hover:bg-dark text-sm font-bold px-4 py-1 rounded-full">등록</button>
                    <button v-else @click="nonAddcont" class="bg-light text-gray-400 text-sm font-bold  px-4 py-1 rounded-full cursor-auto">등록</button>
                </div>
            </div>
            <!-- 트윗섹션 -->
            <div class="flex p-4">
                <!-- <img :src="currentUser.profile_image_url" class="w-12 h-12 rounded-full hover:opacity-80 cursor-pointer" /> -->
                <div class="mx-3 flex-1 flex flex-col">
                    <input type="text" ref="tTitlezone" v-model="tTitle" placeholder="제목을 입력하세요." class="placeholder-gray-400 border-b border-slate-300 w-full dark:bg-black dark:text-white text-lg font-medium focus:outline-none mb-4 pb-4 resize-none" />
                    <textarea ref="tBodyzone" v-model="tBody" rows="5" placeholder="토픽에 맞지 않는 글로 판단되어 다른 유저로부터 일정 수 이상의 신고를 받는 경우 글이 자동으로 숨김처리 될 수 있습니다." class="border border-white focus:border-gray-300 placeholder-gray-400 placeholder-opacity-75 w-full dark:bg-black dark:text-white text-lg font-light focus:outline-none mb-3 resize-none"></textarea>
                    <!-- 스몰일때 트윗버튼 -->
                    <!-- <div class="text-right hidden sm:block">
                        <button v-if="!textBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                        <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                    </div> -->
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tTitle: "",
            tBody: "",
        }
    },
    methods:{
        onAddcont(){
            alert('ok')
            this.$emit('close-modal');
        },
        nonAddcont(){
            if(this.tTitle === ""){
                alert('제목을 입력하세요!')
                this.$refs.tTitlezone.focus()
            } 
            else if(this.tBody === ""){
                alert('내용을 입력하세요!')
                this.$refs.tBodyzone.focus()
            }
        },
        sendClose(){
            if(this.tTitle === '' && this.tBody === ''){
                this.$emit('close-modal');
            } else {
                if(confirm('작성을 취소하시면 작성히신 내용이 사라집니다. \n그래도 작성을 취소하시겠습니까?')){
                    this.$emit('close-modal');
                }
            }
        }
    }
}
</script>

<style></style>
