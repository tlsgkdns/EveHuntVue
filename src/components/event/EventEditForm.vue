<template>
    <div class="card justify-content-center" style="margin: auto">
         <div class="card-header" style="font-size: 30px;">이벤트 수정</div>
         <div class="card-body ">
             <form>
                 <small style="color:red" id="titleInfo"></small>
                 <div class="input-group mb-4">
                     <span class="input-group-text">제목</span>
                     <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
                 </div>
                 
                 <div class="input-group mb-4">
                     <span class="input-group-text">이벤트 설명</span>
                     <textarea id="explanation" class="form-control col-sm-5" rows="10" style="white-space: pre-wrap" v-model="description"></textarea>
                 </div>
                 <div class="input-group mb-4">
                     <span class="input-group-text">이벤트 이미지</span>
                     <div class="float-end uploadHidden">
                         <button type="button" class="btn btn-primary uploadFileBtn" style="height: 50px;" @click="imageModalOpen">ADD Files</button>
                     </div>
                 </div>
                 <figure class="mb-4"><img class="img-fluid rounded" v-if="imageSrc" :src="imageSrc" /></figure>
                 <div class="input-group mb-4">
                     <span class="input-group-text">추가 질문</span>
                     <input type="text" class="form-control" id="question" placeholder="이벤트 참여자에게 질문할 것을 입력하세요" v-model="question">
                 </div>
                 <div class="input-group mb-4">
                     <span class="input-group-text">이벤트 종료 날짜</span>
                     <input type="datetime-local" class="form-control" id="closeDate" v-model="closeDate">
                 </div>
                 <div class="input-group mb-4">
                     <span class="input-group-text">이벤트 당첨자 메시지</span>
                     <textarea id="explanation" class="form-control col-sm-5" rows="5" style="white-space: pre-wrap" v-model="winMessage"></textarea>
                 </div>
                 <div class="input-group mb-4">
                     <span class="input-group-text">참여 가능 인원 수</span>
                     <input type="text" class="form-control" id="capacity" placeholder="최대 100,000명 가능합니다." v-model = "capacity">
                 </div>
                 <div class="input-group mb-4">
                     <span class="input-group-text">태그</span>
                     <button type="button" class="btn btn-primary uploadFileBtn" style="height: 50px;" @click="tagModalOpen">태그 추가</button>
                     <div class="float-end">
                         <input type="text" class="form-control" :value="getTagString()" style="height: 50px;" readonly> </input>
                     </div>
                 </div>
                 <div class="my-4">
                     <div class="front-end">
                         <button type="button" class="btn btn-primary submitBtn" @click="editEventAndRouting">Submit</button>
                     </div>
                 </div>
             </form>
         </div>
     </div>
     <EventAddTag v-show="tagModalCheck" @modal-check="tagModalOpen" @modal-confirm="tagModalConfirm" :initTagList="tagList"></EventAddTag>
     <UploadImageModal v-show="imageModalCheck" @modal-check="imageModalOpen" @set-image="setImage" ></UploadImageModal>

 </template>
 
 <script setup>
     import { ref, toRaw } from 'vue';
     import EventAddTag from './EventAddTag.vue';
     import UploadImageModal from '@/components/UploadImageModal.vue'
     import { getImageSrc } from '@/js/upload';
     import { getEvent, editEvent, closeEvent } from '@/js/event';
     import { useRoute, useRouter } from 'vue-router';
     const eventId = useRoute().query.id
     const tagList = ref([])
     const tagModalCheck = ref(false)
     const imageModalCheck = ref(false)
     const imageSrc = ref(null)
     const image = ref(null)
     const title = defineModel('title')
     const description = defineModel('description')
     const capacity = defineModel('capacity')
     const winMessage = defineModel('winMessage')
     const closeDate = defineModel('closeDate')
     const question = defineModel('question')
     const router = useRouter()
     
     getEvent(eventId).then(
        (eventResponse) => {
            image.value = eventResponse.eventImage
            tagList.value = eventResponse.eventTags.map(function(element) {return element.tagName})
            title.value = eventResponse.title
            capacity.value = eventResponse.capacity
            winMessage.value = eventResponse.winMessage,
            closeDate.value = eventResponse.closedAt,
            question.value = eventResponse.question,
            description.value = eventResponse.description
            getImageSrc(image.value).then(
             response => {
                 imageSrc.value = response
             }
            )
        }
     )
     function tagModalOpen()
     {
         tagModalCheck.value = !tagModalCheck.value
     }
     function tagModalConfirm(list)
     {
         tagList.value = toRaw(list)
         tagModalOpen()
         console.log(tagList)
     }
     function imageModalOpen()
     {
         imageModalCheck.value = !imageModalCheck.value
     }
     function getTagString()
     {
         let str = ''
         const target = toRaw(tagList._value)
         if(target.length > 0) str += target[0]
         if(target.length > 1) str += " 외 " + (target.length - 1) + "개의 태그"
         return str
     }
     function setImage(response)
     {
         image.value = response[0].link
         imageModalOpen()
         getImageSrc(image.value).then(
             response => {
                 imageSrc.value = response
             }
         )
     }
     function editEventAndRouting()
     {
         const tagAddRequests = tagList.value.map((str) => {
             return {"tagName": str}
         })
         console.log(tagAddRequests)
         editEvent(eventId, title.value, description.value, capacity.value, winMessage.value, toRaw(image.value), question.value, closeDate.value, tagAddRequests)
         .then(
             response => {
                 console.log(response)
                 router.push('/event/detail?id='+eventId)
             }
         )
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