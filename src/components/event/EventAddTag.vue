<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">태그 추가하기</h5>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" name="tagText" class="form-control" v-model="tagName" >
                        <button type="button" name="addTagBtn" class="btn btn-secondary" @click="addTag">추가</button>
                    </div>
                    <div class="container-fluid card-body">
                        <div class="badge bg-secondary text-decoration-none link-light" v-for="tag in tagList">
                            {{tag}}
                            <a @click="deleteTag(tag)">X</a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="$emit('modal-confirm', tagList)">확인</button>
                    <button type="button" class="btn btn-outline-dark closeUploadBtn" @click="$emit('modal-check')">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const emit = defineEmits(["modal-check", "modal-confirm"])
    const tagName = defineModel()

    const tagList = ref([])
    function addTag()
    {
        if(!tagName.value) return
        tagList.value.push(tagName.value)
        tagName.value = ""
    }
    function deleteTag(tag)
    {
        tagList.value.splice(tagList.value.indexOf(tag), 1)
    }
</script>

<style>
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>