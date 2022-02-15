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
        <div :class="{ changed: !option.urlImg }" class="check-multi-card">
          <img
            v-if="option.urlImg && !option.multiple"
            class="check-multi-card__img"
            :src="`${option.urlImg}`"
            :alt="`${option.text}`"
          />
          <p
            :class="{ changed: option.multiple }"
            v-if="option.text"
            class="check-multi-card__text"
          >
            {{ option.text }}
          </p>
          <img
            v-if="option.multiple"
            class="check-multi-card__img-multiple"
            :src="`${option.urlImg}`"
            :alt="`${option.text}`"
          />
          <div
            :class="{ changed: !option.urlImg }"
            class="check-multi-card__text-wrapper"
          >
            <h4 v-if="option.answerTitle" class="check-multi-card__title">
              {{ option.answerTitle }}
            </h4>
            <p v-if="option.description" class="check-multi-card__description">
              {{ option.description }}
            </p>
          </div>
          <div
            v-if="option.multiple"
            class="check-multi-card__check-box-container"
          >
            <span class="check-multi-card__check-box">
              <svg
                class="check-multi-card__check-mark"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path
                  d="M1 4.75L2.875 7L7 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
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
      if (option.multiple) {

        this.$emit('check');
      } else {
        if (this.currentQuestion + 1 < this.allQuestions) {
          this.$store.commit("setCurrentQuestion", ++this.currentQuestion);
        }
      }
    },
  },
  data: () => ({
    currentQuestion: 0,
    allQuestions: 0,
    mode: false,
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
