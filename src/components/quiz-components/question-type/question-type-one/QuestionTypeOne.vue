<template>
  <div class="type-one">
    <div v-if="question.img" class="type-one__img">
      <img :src="`${question.img}`" alt="book" />
    </div>
    <h3 class="type-one__title">{{ question.title }}</h3>
    <p v-if="question.description" class="type-one__description">{{question.description}}</p>
    <div v-if="question.statement" class="type-one__statement">
      <p class="type-one__statement-text">{{question.statement.text}}</p>
    </div>
    <ul :class="{'changed': question.mode}" class="type-one__options">
      <li v-for="option in question.options" :key="option.key">
        <answer-checkbox v-if="!question.mode" :option="option"></answer-checkbox>
        <multi-checkbox @check="checkFunc" v-if="question.mode" :option="option"></multi-checkbox>
      </li>
    </ul>
    <button  class="type-one__button">Kek</button>
  </div>
</template>
<script>
import "../question-type-one/QuestionTypeOne.scss";
import AnswerCheckbox from "../../answers/answer-checkbox/AnswerCheckbox.vue";
import MultiCheckbox from '../../answers/multi-checkbox/MultiCheckbox.vue';
export default {
  components: { AnswerCheckbox, MultiCheckbox },
  props: {
    question: {
      type: Object,
      default: {},
    },
  },
  data: () => ({
    currentQuestion: 0,
    allQuestions: 0,
    check : false
  }),
  created() {
    this.currentQuestion = this.getCuerrentQuestion;
    this.allQuestions = this.getQuestions.length;
  },
  computed: {
    getQuestions() {
      return this.$store.getters.questions;
    },
    getCuerrentQuestion() {
      return this.$store.getters.currentQuestion;
    },
  },
  watch: {
    getCuerrentQuestion() {
      this.currentQuestion = this.getCuerrentQuestion;
    },
  },
  methods:{
    checkFunc(){
      console.log(this.check)
    }
  }
};
</script>