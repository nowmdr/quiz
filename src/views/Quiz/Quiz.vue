<template>
  <div class="quiz">
    <div class="quiz-layout">
      <QuizHeader />
      <div class="quiz-body">
        <NavProgress/>
        <Questions :question="getQuestions[currentQuestion]" />
      </div>
      <QuizFooter />
    </div>
  </div>
</template>
<script>
import "../Quiz/Quiz.scss";
import QuizHeader from "@/components/quiz-components/quiz-main-layout/quiz-header/QuizHeader.vue";
import QuizFooter from "@/components/quiz-components/quiz-main-layout/quiz-footer/QuizFooter.vue";
import Questions from "@/components/quiz-components/questions/Questions.vue";
import NavProgress from '../../components/quiz-components/nav-progress/NavProgress.vue';
export default {
  components: { QuizHeader, QuizFooter, Questions, NavProgress },
  data:()=>({
    currentQuestion: 0,
  }),
  created(){

  },
  computed:{
    getQuestions(){
      return this.$store.getters.questions;
    },
    getCuerrentQuestion() {
      return this.$store.getters.currentQuestion;
    }
  },
  watch:{
      getCuerrentQuestion(){
            this.currentQuestion = this.getCuerrentQuestion; 
      }
  }
};
</script>
