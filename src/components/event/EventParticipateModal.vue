<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="card">
                <div class="card-header">
                    <h5 class="modal-title">이벤트 참여에 참여하겠습니까?</h5>
                </div>
                <div class="card-body">
                    <h4 style="font-weight: bold">질문: {{question}}</h4>
                    <div class="input-group mb-3">
                        <span class="input-group-text">답변</span>
                        <textarea rows="3" class="form-control" v-model="answer"/>
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
import { ref } from 'vue';

defineProps({
    question: {
        type: String,
        required: true
    },
})

const answer = ref("")
</script>