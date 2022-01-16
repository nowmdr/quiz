<template>
  <div class="quiz">
    <div class="quiz-layout">
      <QuizHeader />
      <div class="quiz-body">
        <Questions />
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
export default {
  components: { QuizHeader, QuizFooter, Questions },
};
</script>
