<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Upload File</h5>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="file" name="file" class="form-control" v-on:change="onFileChange">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary uploadBtn" @click="clickUpload">Upload</button>
                    <button type="button" class="btn btn-outline-dark closeUploadBtn" @click="$emit('modal-check')">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {uploadImage} from '@/upload'
import {ref} from 'vue'

const emit = defineEmits(['modal-check', 'set-image'])
const currentFile = ref(null)
function onFileChange(e)
{
    currentFile.value = e.target.files
}
function clickUpload()
{
    uploadImage(currentFile).then(
        response => {
            emit('set-image', response)
        }
    )
}
</script>