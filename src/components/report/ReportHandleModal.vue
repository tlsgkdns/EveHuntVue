<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="card">
                <div class="card-header">
                    <h5 class="modal-title">신고 처리</h5>
                </div>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text">정지 처리하시겠습니까?</span>
                        <input type="checkbox" v-model="isSuspend">
                    </div>
                    <div class="input-group mb-3" v-show="isSuspend">
                        <span class="input-group-text">정지 기간</span>
                        <select name="suspendDay" v-model="suspendDay">
                            <option value="1" selected>1일</option>
                            <option value="2">2일</option>
                            <option value="3">3일</option>
                            <option value="5">5일</option>
                            <option value="10">10일</option>
                            <option value="15">15일</option>
                            <option value="30">30일</option>
                            <option value="90">90일</option>
                            <option value="180">180일</option>
                            <option value="365">1년</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" @click="handlingReport">처리</button>
                    <button type="button" class="btn btn-outline-dark" @click="$emit('modal-close', reportId)">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import { handleReport } from '@/js/report';
    const isSuspend = ref(false)
    const suspendDay = ref(1)

    const props = defineProps({
        reportId: {
        }
    })
    const emit = defineEmits()
    const reportId = ref(props.reportId)

    watch(() => props.reportId, () => {
        reportId.value = props.reportId
    })
    function handlingReport()
    {
        handleReport(reportId.value, isSuspend.value, suspendDay.value).then(
            (response) => {
                alert("처리되었습니다.")
                emit('modal-close', reportId)
            }
        )
    }
</script>
    