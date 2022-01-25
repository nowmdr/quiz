<template>
  <div class="progress-nav">
    <div class="progress-nav__wrapper">
      <button @click="previousQuestion" class="progress-nav__btn">
        <svg class="btn-icon" width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M11 15c-.3 0-.5-.1-.7-.3L3.6 8l6.7-6.7c.4-.4 1-.4 1.4 0s.4 1 0 1.4L6.4 8l5.3 5.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"
            fill="#5b6280"
          ></path>
        </svg>
        <span class="btn-text">Back</span>
      </button>
      <div class="count-area">
        <span class="current-question">{{currentQuestion+1}}</span>
        /
        <span class="all-question">{{allQuestions}}</span>
      </div>
    </div>
    <div class="grey-line">
      <div :style="{
                width: `${width}`,
              }"
               class="green-line"></div>
    </div>
  </div>
</template>
<script>
import "../nav-progress/NavProgress.scss";
export default {
  data:()=>({
    currentQuestion: 0,
    allQuestions: 0,
    width: ''
  }),
  created() {
      this.allQuestions = this.$store.getters.questions.length;
      this.currentQuestion = this.getCuerrentQuestion;
      this.process();
  },
  methods:{
      previousQuestion(){
          if(this.currentQuestion){
              this.$store.commit('setCurrentQuestion', --this.currentQuestion)
          }
          
      },
      process(){
        this.width = (((this.currentQuestion+1)/this.allQuestions)*100 + '%')
      }
  },
  computed: {
    getCuerrentQuestion() {
      return this.$store.getters.currentQuestion;
    },
  },
  watch:{
      getCuerrentQuestion(){
            this.currentQuestion = this.getCuerrentQuestion; 
            this.process();
      }
  }
};
</script>