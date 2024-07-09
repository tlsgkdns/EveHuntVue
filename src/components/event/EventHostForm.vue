<template>
   <div class="card justify-content-center" style="max-width: 500px; margin: auto">
        <div class="card-header" style="font-size: 30px;">이벤트 개최</div>
        <div class="card-body ">
            <form>
                <small style="color:red" id="titleInfo"></small>
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">제목</span>
                    <input type="text" class="form-control" id="title" placeholder="Title">
                </div>
                
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">이벤트 설명</span>
                    <textarea id="explanation" class="form-control col-sm-5" rows="10" style="white-space: pre-wrap"></textarea>
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">이벤트 이미지</span>
                    <div class="float-end uploadHidden">
                        <button type="button" class="btn btn-primary uploadFileBtn" style="height: 50px;">ADD Files</button>
                    </div>
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">추가 질문</span>
                    <input type="text" class="form-control" id="title" placeholder="이벤트 참여자에게 질문할 것을 입력하세요">
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">이벤트 종료 날짜</span>
                    <input type="date" class="form-control" id="endDate">
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">이벤트 당첨자 메시지</span>
                    <textarea id="explanation" class="form-control col-sm-5" rows="5" style="white-space: pre-wrap"></textarea>
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">참여 가능 인원 수</span>
                    <input type="text" class="form-control" id="capacity" placeholder="최대 100,000명 가능합니다.">
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text inputTitle">태그</span>
                    <div class="float-end">
                        <button type="button" class="btn btn-primary uploadFileBtn" style="height: 50px;" @click="modalOpen">태그 추가</button>
                        <input type="text" class="form-control" :value="getTagString()" readonly> </input>
                    </div>
                </div>
                <div class="my-4">
                    <div class="front-end">
                        <button type="button" class="btn btn-primary submitBtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <EventAddTag v-show="modalCheck" @modal-check="modalOpen" @modal-confirm="modalConfirm"></EventAddTag>
</template>

<script setup>
    import { ref, toRaw } from 'vue';
    import EventAddTag from './EventAddTag.vue';
    const modalCheck = ref(false)
    const tagList = ref([])
    function modalOpen()
    {
        modalCheck.value = !modalCheck.value
    }
    function modalConfirm(list)
    {
        tagList.value = toRaw(list)
        modalOpen()
        console.log(tagList)
    }
    function getTagString()
    {
        let str = ''
        const target = toRaw(tagList._value)
        if(target.length > 0) str += target[0]
        if(target.length > 1) str += " 외 " + (target.length - 1) + "개의 태그"
        return str
    }
</script>
<style>
    .inputTitle {
        font-size: 20px
    }
    .hostForm {
        display: flex;
    justify-content: center;
    align-items: center;
    }
</style>