<template>
  <div class="check multi">
    <label class="check-label">
      <input
        class="check-input"
        type="radio"
        :name="`${getQuestions[currentQuestion].title}`"
        :value="`${option.answerTitle || option.text}`"
        @click="nextQuestion"
      />
      <div class="check-box">
        <div :class="{'changed': mode}" class="check-card">
          <img
            v-if="option.urlImg"
            class="check-card__img"
            :src="`${option.urlImg}`"
            :alt="`${option.text}`"
          />
          <img
            v-if="option.text == 'Yes'"
            class="check-card__img img-yes"
            src="@/assets/emoji/yes-img.svg"
            :alt="`${option.text}`"
          />
          <img
            v-if="option.text == 'No'"
            class="check-card__img img-no"
            src="@/assets/emoji/no-img.svg"
            :alt="`${option.text}`"
          />
          <p v-if="option.text" class="check-card__text">{{ option.text }}</p>
          <div class="check-card__text-wrapper">
            <h4 v-if="option.answerTitle" class="check-card__title">
              {{ option.answerTitle }}
            </h4>
            <p v-if="option.description" class="check-card__description">
              {{ option.description }}
            </p>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>
<script>
import "../answer-checkbox/AnswerCheckbox.scss";
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
