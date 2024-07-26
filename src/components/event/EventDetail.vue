<template>
    <div class="container mt-5">
        <div class="row w-100">
            <div class="col-lg-7">
                <article>
                     <!-- Post header-->
                     <header class="mb-4">
                        <!-- Post title-->
                         <h1 class="fw-bolder mb-1">{{event.title}}</h1>
                         <div class="text-muted fst-italic mb-2">개최자: {{hostName}}</div>
                        <!-- Post meta content-->
                        <div class="text-muted fst-italic mb-2">개최 개시일: {{getDateString(event.createdAt)}}</div>
                        <!-- Post categories-->
                        <a class="badge bg-secondary text-decoration-none link-light" v-for="tag in event.eventTags.slice(0)" href="#!">
                            {{tag.tagName}}
                        </a>
                    </header>
                    <!-- Preview image figure-->
                    <figure class="mb-4">
                        <img class="img-fluid rounded" v-if="imageSrc" :src="imageSrc" />
                    </figure>
                    <!-- Post content-->
                    <section class="mb-5">
                        {{event.description}}
                    </section>
                </article>
            </div>
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-header">이벤트 참여 인원</div>
                        <div class="card-body">
                            <div class="input-group">
                                <h3>참가 가능 인원: {{event.capacity}}</h3>
                                <h3>현재 참여 인원: {{event.participantCount}} </h3>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">태그</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li v-for="tag in event.eventTags"><a :href="'/event/list?keyword=' + tag.tagName + '&searchType=tag'">{{tag.tagName}}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">이벤트 종료일</div>
                        <div class="card-body">{{getDateString(event.closedAt)}}</div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">최근 업데이트일</div>
                        <div class="card-body">{{getDateString(event.updatedAt)}}</div>
                    </div>
                    <div v-if="event.status == 'PROCEED'">
                        <div v-if="event.hostId == loginId">
                            <div class="card mb-4">
                                <button class="btn btn-primary" type="button" @click="editEvent">수정하기</button>
                            </div>
                            <div class="card mb-4">
                                <button class="btn btn-primary" type="button" @click="closeEventAndReload">이벤트 종료</button>
                            </div>
                        </div>
                        <div v-else-if="loginId != null"> 
                            <div class="card mb-4">
                                <button class="btn btn-primary" type="button" @click="participateModalOpen">참여하기</button>
                            </div>
                            <div class="card mb-4">
                                <button class="btn btn-primary" type="button" @click="reportModalOpen">신고하기</button>
                            </div>
                        </div>
                        
                    </div>
                    <div v-if="event.status == 'CLOSED'">
                        <div v-if="event.hostId == loginId" class="card mb-4">
                            <button class="btn btn-primary" type="button" @click="pickWinner">당첨자 선택</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <EventParticipateModal v-show="participateModalCheck" :question="event.question" @modal-close="participateModalOpen" @participate-event="participateEventAndRouting"/>
    <ReportModal v-show="reportModalCheck" @modal-close="reportModalOpen"></ReportModal>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { getEvent, participateEvent, closeEvent } from '@/js/event';
import { ref } from 'vue';
import { getLoginMember, getMember } from '@/js/member';
import { getImageSrc } from '@/js/upload';
import ReportModal from '../report/ReportModal.vue';
import EventParticipateModal from './EventParticipateModal.vue';
const eventId = useRoute().query.id;
const hostName = ref("")
const imageSrc = ref(null)
const router = useRouter()
const loginId = ref(null)
function getDateString(date)
{
    return date.substring(0, 10) + " " + date.substring(11, 20)
}
const event = ref({
    title: "Hello Event",
    descrition: "안녕하세요 감사해요 잘있어요 다시 만나요",
    winMessage: "당신이 이겼습니다",
    question: "이것이 질문",
    createdAt: "2012-11-02 12:03",
    updatedAt: "2012-11-03 13:04",
    closedAt: "",
    capacity: 200,
    hostName: "개발자",
    eventType: 0,
    eventImage: null,
    eventTags: []
})
getEvent(eventId).then(
    (response) => {
        event.value = response
        console.log(response)
        getMember(response.hostId).then(
            (member) => {
                hostName.value = member.name
            }
        )
        if(response.eventImage != null)
        {
            getImageSrc(response.eventImage).then(
            (image) => {
                imageSrc.value = image
            }
            )
        }        
    }
)
getLoginMember().then(
    (response) => {
        console.log(response)
        loginId.value = response.memberId
    }
)
const participateModalCheck = ref(false)
const reportModalCheck = ref(false)
function reportModalOpen()
{
    reportModalCheck.value = !reportModalCheck.value
}
function participateModalOpen()
{
    participateModalCheck.value = !participateModalCheck.value
}

function participateEventAndRouting(answer)
{
    participateEvent(eventId, answer).then(
        (response) => {
            alert("성공적으로 참여하였습니다!");
            router.push('/home')
        }
    ).catch(e => {
        alert("이 이벤트에 참여할 수 없습니다.")
        participateModalOpen()
    })
}
function editEvent()
{
    router.push('/event/edit?id=' + eventId)
}

function pickWinner()
{
    router.push('/event/pick-winner?id=' + eventId)
}
function closeEventAndReload()
     {
        closeEvent(eventId).then(
            location.reload()
        )
     }
</script>

<style>
</style>