<template>
    <div class="align-middle">
      <div class="container-fluid d-flex justify-content-center" style="position: relative;top: 130px">
        <div class="card align-self-center" style="width: 1500px; height: 1000px">
          <div class="card-header mb-5"> 당첨자 선별 </div>
          <div class="container">
            <div class="row w-100" style="column-gap: 550px;">
              <div class="col-4 mb-5"></div>
              <div class="col mb-5">
                <div class="input-group">
                  <span class="input-group-text">인원 수</span>
                  <input type="text" class="form-control" style="text-align: center;" v-model.number="winnerCount">
                  <button class="btn btn-secondary" @click="setRandomWinner">랜덤 추첨 시작</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body scrollBar">
            <div class="container justify-content-center">
              <div class="row w-100">
                <div class="col">
                  <div class="container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">E-mail</th>
                          <th scope="col">추가질문 답</th>
                          <th scope="col">당첨 여부</th>
                          <th scope="col">당첨 메시지 수정</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="participant in participantList" :key="participant.id">
                          <th scope="row">{{participant.id}}</th>
                          <td>{{participant.email}}</td>
                          <td row="3">
                            <div v-for="answerLine in participant.answer.split('\n')">
                              {{answerLine}}
                            </div>
                          </td>
                          <td>
                            <input type="checkbox" @change="changeCheckbox(participant.id, event.winMessage)" :value="participant.id" :checked="winners.has(participant.id)"/>
                          </td>
                          <td>
                            <button type="button" class="btn btn-primary" v-show="winners.has(participant.id)" @click="editModalOpen(participant.id)">수정</button>
                          </td>
                        </tr>
                      </tbody>
                      <ParticipantEditWinMessageModal v-show="targetId >= 0" @modal-close="editModalOpen" 
                        :participantId="targetId" @edit-win-message="editWinMessage" :winMessage="winMessage" />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-warning" style="position: relative; left: 1390px; top: 100px; width: 100px; height: 50px" @click="setEventResultAndRouting">확인</button>
        </div>
      </div>
    </div>

  </template>

<script setup>
    import { getEvent, getParticpants, setEventResult} from '@/js/event';
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import ParticipantEditWinMessageModal from './ParticipantEditWinMessageModal.vue';

    const eventId = useRoute().query.id
    const event = ref(null)
    const winners = ref(new Map())
    const router = useRouter()
    const participantList = ref([])
    const winnerCount = ref(0)
    const targetId = ref(-1)
    const winMessage = ref("")

    getEvent(eventId).then( (response) => {        
        event.value = response
    })
    getParticpants(eventId).then((response) => {
        participantList.value = response
    })
    function changeCheckbox(id, message)
    {
        console.log(winners)
        if(winners.value.has(id)) winners.value.delete(id)
        else winners.value.set(id, message)
    }
    function setRandomWinner()
    {
        winners.value.clear()
        if(winnerCount.value > participantList.value.length)
        {
            alert("현재 참가 인원 수 보다 큰 인원입니다.")
            return;
        }
        let participantIds = participantList.value.map((p) => p.id)
        for(let i = 0; i < winnerCount.value; i++)
        {
            const randomIdx = Math.floor(Math.random() * participantIds.length)
            changeCheckbox(participantIds[randomIdx], event.value.winMessage)
            participantIds.splice(randomIdx, 1)
        }
    }
    

    function editModalOpen(id)
    {
        if(targetId.value == id) targetId.value = -1
        else 
        {
            targetId.value = id
            winMessage.value = winners.value.get(id)
        }
    }
    function editWinMessage(id, message)
    {
        winners.value.set(id, message)
    }
    function setEventResultAndRouting()
    {
        
        setEventResult(eventId, winners.value).then(
            (response) => {
                alert("당첨자 선별이 완료되었습니다.")
                router.push("/home")
            }
        )
    }
    getEvent(useRoute().query.id).then(
        (response) => {
            winMessage.value = response.winMessage
        }
    )
    
</script>

<style>
.scrollBar {
  overflow-y: scroll;
}
</style>