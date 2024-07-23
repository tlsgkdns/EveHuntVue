<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="card">
                <div class="card-header">
                    <h5 class="modal-title">질문: {{question}}</h5>
                </div>
                <div class="card-body">
                    <h4 style="font-weight: bold"></h4>
                    <div class="input-group mb-3">
                        <span class="input-group-text">답변</span>
                        <textarea rows="3" class="form-control" readonly>{{answer}}</textarea>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" @click="$emit('participate-event', answer)">참여</button>
                    <button type="button" class="btn btn-outline-dark" @click="$emit('modal-close')">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {useRoute} from 'vue-router'
import {ref} from 'vue'

const eventId = useRoute().query.id
const question = ref("")
defineProps({
        answer: {
            Type: String,
            required: true,
        }
    })
getEvent(eventId).then( (response) => {
    question.value = response.question
})

</script>