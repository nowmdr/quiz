<template>
    <div class="question">
        <h3 class="question__title">Select your gender</h3>
        <ul class="question__options">
            <li><answer-checkbox></answer-checkbox></li>
            <li>2</li>
        </ul>
    </div>
</template>
<script>
import '../questions/Questions.scss'
import AnswerCheckbox from '../answers/answer-checkbox/AnswerCheckbox.vue'
export default {
components:{AnswerCheckbox}
}
</script>