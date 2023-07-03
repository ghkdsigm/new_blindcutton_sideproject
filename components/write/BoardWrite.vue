<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" >
        <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 text-center sm:p-0 items-center">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-black dark:bg-gray-800 opacity-80"></div>
            </div>

            <!-- 상단 -->
            <div @click.stop class="flex flex-col max-w-3xl h-[60vh] bg-white dark:bg-black text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="border-b border-gray-200 dark:border-gray-700 p-2 text-right flex items-center justify-between px-7 py-2">
                    <button @click="sendClose()" class="fas fa-times text-primary dark:text-white text-base">Close</button>
                    <span class="text-lg font-bold">글쓰기</span>
                    <!-- 글쓰기버튼 -->
                    <div class="lg:text-right mr-2">
                        <button v-if="this.tBody !== '' && this.tTitle !== '' && this.selected !== '0'" @click="onAddcont" class="bg-primary text-blue-600 text-base hover:bg-dark font-medium py-1 rounded-full">등록</button>
                        <button v-else @click="nonAddcont" class="bg-light text-gray-400 text-base font-medium  py-1 rounded-full cursor-auto">등록</button>
                    </div>
                </div>            
                
                <!-- 트윗섹션 -->
                <div class="flex p-4 flex-col flex-1 h-full">
                    <div class="mx-3 h-full flex flex-col">
                        <!-- 카테고리 -->
                        <div>
                            <select ref="category" v-model="selected" class="w-full cursor-pointer text-lg font-medium focus:outline-none mb-4 pb-4 resize-none">
                                <option v-for="option in options" :value="option.value" :key="option.value" class="px-0">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        <!-- 제목 -->
                        <input type="text" ref="tTitlezone" v-model="tTitle" placeholder="제목을 입력하세요." class="placeholder-gray-300 border-b border-slate-300 w-full dark:bg-black dark:text-white text-lg font-medium focus:outline-none mb-4 pb-4 resize-none" />
                        
                        <!-- 내용 -->
                        <textarea ref="tBodyzone" v-model="tBody" rows="5" placeholder="토픽에 맞지 않는 글로 판단되어 다른 유저로부터 일정 수 이상의 신고를 받는 경우 글이 자동으로 숨김처리 될 수 있습니다." class="flex flex-1 flex-col border border-white focus:border-gray-300 placeholder-gray-400 placeholder-opacity-75 w-full dark:bg-black dark:text-white text-normal font-light focus:outline-none mb-3 resize-none"></textarea>
                        <!-- 스몰일때 트윗버튼 -->
                        <!-- <div class="text-right hidden sm:block">
                            <button v-if="!textBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                            <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                        </div> -->
                    </div>                    
                </div>
                <!-- 하단 -->
                <div clas="w-full bg-black h-2">
                    <img class="w-12 h-12 rounded-full hover:opacity-80 cursor-pointer" /> 
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
            selected: '0',
            options: [
                { text: '카테고리를 선택하세요', value: '0' },
                { text: '부동산', value: '1' },
                { text: '육아', value: '2' },
                { text: '자동차', value: '3' },
                { text: '연예', value: '4' },
                { text: '재테크', value: '5' }
            ]
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
            else if(this.selected === "0"){
                alert('카테고리를 선택하세요!')
                this.$refs.category.focus()
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
