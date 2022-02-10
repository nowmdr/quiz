<template>
  <div class="check-multi">
    <label class="check-multi-label">
      <input
        class="check-multi-input"
        type="radio"
        :name="`${getQuestions[currentQuestion].title}`"
        :value="`${option.answerTitle || option.text}`"
        @click="nextQuestion"
      />
      <div class="check-multi-box">
        <div :class="{'changed': !option.urlImg }" class="check-multi-card">
          <img
            v-if="option.urlImg"
            class="check-multi-card__img"
            :src="`${option.urlImg}`"
            :alt="`${option.text}`"
          />
          <p v-if="option.text" class="check-multi-card__text">{{ option.text }}</p>
          <div :class="{'changed': !option.urlImg }" class="check-multi-card__text-wrapper">
            <h4 v-if="option.answerTitle" class="check-multi-card__title">
              {{ option.answerTitle }}
            </h4>
            <p v-if="option.description" class="check-multi-card__description">
              {{ option.description }}
            </p>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>
<script>
import "../multi-checkbox/MultiCheckbox.scss";
export default {
  props: {
    option: {
      type: Object,
      default: {},
    },
  },
  methods: {
    nextQuestion(event) {
      if((this.currentQuestion+1) < this.allQuestions){
        this.$store.commit("setCurrentQuestion", ++this.currentQuestion);
      }
      
    },
  },
  data: () => ({
    currentQuestion: 0,
    allQuestions: 0,
    mode: false
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
};
</script>
