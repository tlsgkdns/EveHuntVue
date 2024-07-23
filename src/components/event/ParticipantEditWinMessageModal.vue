<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="card">
                <div class="card-header">
                    <h5 class="modal-title">{{participantId}}번 당첨 메시지 수정</h5>
                </div>
                <div class="card-body">
                    <h4 style="font-weight: bold"></h4>
                    <div class="input-group mb-3">
                        <span class="input-group-text">당첨 메시지</span>
                        <textarea rows="3" class="form-control" v-model="winMessage"></textarea>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" @click="editWinMessage">수정</button>
                    <button type="button" class="btn btn-outline-dark" @click="$emit('modal-close', participantId)">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, watch } from 'vue';
    const props = defineProps({
        participantId: {
        },
        winMessage: {
        }
    })
    const emit = defineEmits()
    const participantId = ref(props.participantId)
    const winMessage = ref(props.winMessage)

    watch(() => props.participantId, () => {
        participantId.value = props.participantId
    })
    watch(() => props.winMessage, () => {
        winMessage.value = props.winMessage
        console.log("Change to " + winMessage.value)
    })

    function editWinMessage()
    {
        emit('edit-win-message', participantId.value, winMessage.value)
        emit('modal-close', participantId.value)
    }
</script>