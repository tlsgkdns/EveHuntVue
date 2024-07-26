<template>
<div class="modal-wrap">
    <div class="modal-container">
        <div class="card">
            <div class="card-header">
                <h5 class="modal-title">이벤트 신고</h5>
            </div>
            <div class="card-body">
                <div class="input-group mb-3">
                    <span class="input-group-text">신고 사유</span>
                    <textarea rows="3" class="form-control" v-model="reason"/>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <button type="button" class="btn btn-primary" @click="reportEvent">신고</button>
                <button type="button" class="btn btn-outline-dark" @click="$emit('modal-close')">닫기</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { createReport } from '@/js/report';
const reason = ref("")
const router = useRoute()
const eventId = router.query.id
const emit = defineEmits()
function reportEvent()
{
    createReport(eventId, reason.value).then(
        response => {
            alert("신고가 완료되었습니다.")
            emit('modal-close')
        }
    ).catch(e => {
        if(e.response)
        {
            alert(e.response.data.message)
        }
    })
}
</script>
