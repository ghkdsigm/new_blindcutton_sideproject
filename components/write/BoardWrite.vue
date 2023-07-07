<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex justify-center min-h-screen sm:pt-6 sm:px-4 text-center sm:p-0 items-center"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <!-- 상단 -->
      <div
        @click.stop
        class="flex flex-col max-w-3xl h-[60vh] bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full justify-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div
          class="border-b border-gray-200 p-2 text-right flex items-center justify-between px-7 py-2"
        >
          <button @click="sendClose()" class="fas fa-times text-primary">
            닫기
          </button>
          <span class="text-lg font-bold">글쓰기</span>
          <!-- 글쓰기버튼 -->
          <div class="lg:text-right mr-2">
            <button
              v-if="
                this.tBody !== '' && this.tTitle !== '' && this.selected !== '' && this.category.length !== 0 && this.setCategory.length !== 0 && this.selected2 !== '카테고리 선택'
              "
              @click="onAddcont"
              class="bg-primary text-blue-600 text-base font-medium py-1 rounded-full"
            >
              등록
            </button>
            <button
              v-else
              @click="nonAddcont"
              class="bg-light text-gray-400 text-base font-medium py-1 rounded-full cursor-auto"
            >
              등록
            </button>
          </div>
        </div>

        <!-- 트윗섹션 -->
        <div class="flex p-4 flex-col flex-1 h-full">
          <div class="mx-3 h-full flex flex-col">
            <!-- 카테고리 -->
            <div class="flex">
              <div class="select w-1/2 pr-1">
                <select
                  ref="category"
                  v-model="selected"
                  class="w-full cursor-pointer text-lg font-medium focus:outline-none mb-4 pb-4 resize-none border border-grayy-400"
                >
                  <option
                    v-for="option in options"
                    :value="option.value"
                    :key="option.value"
                    class="px-0"
                  >
                    {{ option.text }}
                  </option>
                </select>
                <div class="select__arrow"></div>
              </div>
              <div class="select w-1/2 pl-1" v-if="this.category.length !== 0">
                <select                  
                  v-model="selected2"
                  class="w-full cursor-pointer text-lg font-medium focus:outline-none mb-4 pb-4 resize-none border border-grayy-400"
                  >
                  <option
                    ref="setCategory"  
                    v-for="option in setCategory"
                    :value="option"
                    :key="option"
                    class="px-0"
                  >
                    {{ option }}
                  </option>
                </select>
                <div class="select__arrow"></div>
              </div>
            </div>
            <!-- 제목 -->
            <input
              type="text"
              ref="tTitlezone"
              v-model="tTitle"
              placeholder="제목을 입력하세요."
              class="placeholder-gray-300 border-b border-slate-300 w-full text-lg font-medium focus:outline-none mb-4 pb-4 resize-none"
            />

            <!-- 내용 -->
            <textarea
              ref="tBodyzone"
              v-model="tBody"
              rows="5"
              placeholder="토픽에 맞지 않는 글로 판단되어 다른 유저로부터 일정 수 이상의 신고를 받는 경우 글이 자동으로 숨김처리 될 수 있습니다."
              class="flex flex-1 flex-col border border-white focus:border-gray-300 placeholder-gray-400 placeholder-opacity-75 w-full text-normal font-light focus:outline-none mb-3 resize-none"
            ></textarea>
            <!-- 스몰일때 트윗버튼 -->
            <!-- <div class="text-right hidden sm:block">
                            <button v-if="!textBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                            <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                        </div> -->
          </div>
        </div>
        <!-- 하단 -->
        <div clas="w-full bg-black h-2">
          <!-- <img class="w-12 h-12 rounded-full hover:opacity-80 cursor-pointer" /> -->
          <input type="file" accept="image/*" @change="fileChange" multiple />          
          <ul>
            <li clsas="flex" v-for="(item, index) in file" :key="index">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/api/data.json'

export default {
  data() {
    return {
      tTitle: "",
      tBody: "",
      selected: "basic",
      selected2: "카테고리 선택",
      options: [
        { text: "테마를 선택하세요", value: "basic" },
        { text: "연예", value: "loves" },
        { text: "게임", value: "games" },
        { text: "스포츠", value: "sports" },
        { text: "자동차", value: "cars" }
      ],
      category: [],
      setCategory : [],
      register: {
        title: '',
        content: '',
        thema: '',
        category: '',
        images: [],
        id: 0
      },
      file: [],
    };
  },
  methods: {
    onAddcont() {
      alert("ok");
      
      if(this.tBody !== '' && this.tTitle !== '' && this.selected !== 'basic' && this.category.length !== 0 && this.setCategory.length !== 0){
        this.register.title = this.tTitle
        this.register.content = this.tBody
        this.register.thema = this.selected
        this.register.category = this.selected2
        this.register.images = '이미지url',
        this.register.id = Math.floor(new Date().getTime() + Math.random())
      }

      if(this.tBody !== '' && this.tTitle !== '' && this.selected !== 'basic' && this.category.length !== 0 && this.setCategory.length !== 0){
        if(this.selected === 'loves'){
          this.$store.commit('content/addLoves', this.register)       
        } else if(this.selected === 'sports') {
          this.$store.commit('content/addSports', this.register)     
        } else if(this.selected === 'games') {
          this.$store.commit('content/addGames', this.register)     
        } else if(this.selected === 'cars') {
          this.$store.commit('content/addCars', this.register)     
        }
      }

      this.$emit("close-modal");
    },
    nonAddcont() {
      if (this.tTitle === "") { 
        alert("제목을 입력하세요!");
        this.$refs.tTitlezone.focus();
      } else if (this.tBody === "") {
        alert("내용을 입력하세요!");
        this.$refs.tBodyzone.focus();
      } else if (!this.category.length) {
        alert("테마를 선택하세요!");
        this.$refs.category.focus();
      } else if (!this.setCategory.length) {
        alert("카테고리 선택");
        this.$refs.setCategory.focus();
      }
    },
    sendClose() {
      if (this.tTitle === "" && this.tBody === "") {
        this.$emit("close-modal");
      } else {
        if (
          confirm(
            "작성을 취소하시면 작성히신 내용이 사라집니다. \n그래도 작성을 취소하시겠습니까?"
          )
        ) {
          this.$emit("close-modal");
        }
      }
    },
    fileChange(e) {
      const file = e.target.files;
      let validation = true;
      let message = '';

      if (file.length > 10) {
          validation= false;
          message = `파일은 한개만 등록 가능합니다.`
      }

      if (file[0].size > 1024 * 1024 * 2) {
          message = `${message}, 파일은 용량은 2MB 이하만 가능합니다.`;
          validation = false;
      }

      if (file[0].type.indexOf('image') < 0) {
          message = `${message}, 이미지 파일만 업로드 가능합니다.`;
          validation = false;
      }

      this.$nextTick(()=>{
        if (validation) {
            for(let i = 0; i < file.length; i++){
              this.file.push(file[i])
            }
        }
        else {
            this.file = '';
            alert(message);
        }
      })      
    }
  },
  watch:{
    selected(e){
      //this.selected2 = ""     
      this.category = []   
      data[e].map((v, i) => {        
        this.category.push(
          {
            text: v.category
          }
        )          
      })
      let res = data[e].reduce((ac, v) => ac.includes(v.category) ? ac : [...ac, v.category], [])
      this.setCategory = res

      if(this.setCategory.length >= 1){
        this.setCategory.unshift('카테고리 선택')
      }
    }    
  }
};
</script>

<style scoped>
.select{
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width :100%;

}

select{
  display:inline-block;
  width:100%;
  padding:10px 15px;
  appearance:none;
  -webkit-appearance:none;
  -moz-appearance:none;
}

select::-ms-expand{
  display:none;
}

.select__arrow{
  position: absolute;
  top :22px;
  right: 15px;
  width :0;
  height :0;
  pointer-events: none;
  border-style :solid;
  border-width: 8px 5px 0 5px;
  border-color: #999 transparent transparent transparent;
}

</style>
