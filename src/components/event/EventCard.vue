<template>
<div class="col card" style="width: 18rem; height: 24rem;" v-if="eventCard != null">
    <img class="card-img-top" v-if="imageSrc" :src="imageSrc" style="width: 270px; height: 180px;">
    <img class="card-img-top" v-else src="https://placehold.co/600x400" alt="https://placehold.co/600x400">
  <div class="card-body">
    <h5 class="card-title" style="font-weight: bold;">{{eventCard.title}}</h5>
    <div class="card-text">
        <i>개최자: {{eventCard.hostName}}<br> </i>
        <i>종료예정일: {{getDateString(eventCard.closedAt)}}</i>
    </div> 
    <div class="bottomContainer">
        <div>
            {{eventCard.capacity}} / {{eventCard.participantCount}}
        </div>
        <div > 
            <a class="btn btn-primary" @click="routeToDetail">확인</a>
        </div>
    </div>
  </div>
</div>
</template>
<script setup>
    import { ref } from 'vue';
    import { getImageSrc } from '@/js/upload';
    import { useRouter } from 'vue-router';
    const imageSrc = ref(null)
    const props = defineProps({
        eventCard: {
            Type: Object,
            required: true,
            default: {
                id: 0,
                eventImage: ""
            }

        }
    })
    const router = useRouter()
    function getDateString(date)
    {
        return date.substring(0, 10)
    }
    function routeToDetail()
    {
        router.push("/event/detail?id=" + props.eventCard.id)
    }
    getImageSrc(props.eventCard.eventImage).then(
        (response) => {
            console.log(props.eventCard.eventImage)
            imageSrc.value = response
        }
    )

</script>
<style>
p {
    height: 40%;
    width: 100%;
}
.bottomContainer {
    display: flex;
    position: relative;
    top: 50px;
    justify-content: space-between;
}
</style>