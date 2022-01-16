<template>
    <div class="question">
        <h3 class="question__title">{{question.title}}</h3>
        <ul class="question__options">
            <li v-for="option in question.options" :key="option.key"><answer-checkbox :option="option"></answer-checkbox></li>
        </ul>
    </div>
</template>
<script>
import '../questions/Questions.scss'
import AnswerCheckbox from '../answers/answer-checkbox/AnswerCheckbox.vue'
export default {
components:{AnswerCheckbox},
data:()=>({
}),
mounted(){
    // console.log(questions)
},
props:{
    question:{
        type: Object,
        default: {}
    }
}
}
</script>