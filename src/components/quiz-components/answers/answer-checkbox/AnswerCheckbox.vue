<template>
  <div class="check">
    <label class="check-label">
      <input
        class="check-input"
        type="radio"
        name="option.name"
        value="option.name"
      />
      <div class="check-box">
        <div class="check-card">
          <img class="check-card__img" :src="`${option.urlImg}`" :alt="`${option.name}`" />
          <p class="check-card__title">{{ option.name }}</p>
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
};
</script>
