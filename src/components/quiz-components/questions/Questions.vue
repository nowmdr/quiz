<template>
  <div class="questions">
    <question-type-one :question="question"></question-type-one>
  </div>
</template>
<script>
import "../questions/Questions.scss";
import AnswerCheckbox from "../answers/answer-checkbox/AnswerCheckbox.vue";
import QuestionTypeOne from "../question-type/question-type-one/QuestionTypeOne.vue";
export default {
  components: { AnswerCheckbox, QuestionTypeOne },
  data: () => ({}),
  mounted() {
    // console.log(questions)
  },
  props: {
    question: {
      type: Object,
      default: {},
    },
  },
};
</script>