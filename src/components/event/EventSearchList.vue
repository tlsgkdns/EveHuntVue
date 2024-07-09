<template>
    <div class="album py-5" style="width: 40.7%; position: relative; top: 200px;">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
                <EventCard v-for="eventCard in eventPage" :key="eventCard.id" :eventCard="eventCard"/>
            </div>
        </div>
        <router-view :key="useRoute().fullPath"></router-view>
        <Pagination />
    </div>
</template>

<script setup>
import EventCard from '@/components/event/EventCard.vue'
import Pagination from '@/components/Pagination.vue';
const allEventList = [
    {id: 1, title: "안녕하세요!", description: "감사해요", capacity: 10, participate: 3},
    {id: 2, title: "잘 있어요", description: "다시만나요", capacity: 10, participate: 5},
    {id: 3, title: "음", description: "그렇게", capacity: 100, participate: 6},
    {id: 4, title: "안녕하세요!", description: "이런 이벤트가 존재한다는 것을 알립니다. 그렇게 시간을 보내는 것은 어떨까요?", capacity: 20, participate: 7},
    {id: 5, title: "이미 자취를 감추다.", description: "글쩍", capacity: 10, participate: 3},
    {id: 6, title: "굉장해요", description: "글쎄여", capacity: 120, participate: 120},
    {id: 7, title: "Hello World!", description: "I am here I am here", capacity: 10, participate: 5},
    {id: 8, title: "위 윌 위 윌", description: "락 유", capacity: 100, participate: 6},
    {id: 9, title: "Redeeem", description: "당신은 사랑 받기 위해 태어난 사람, 상속 받은 것은 어느것일 까요, 제가 무슨 말을 하는 건지 모르겠습니다. 갸갸갸", capacity: 200, participate: 54},
    {id: 10, title: "API가 제대로 작동하나요", description: "이벤트 리스트 확인", capacity: 30, participate: 23},
    {id: 11, title: "나는 여기에 있습니다.", description: "굉장해 엄청나", capacity: 40, participate: 25},
    {id: 12, title: "안녕하세요!", description: "감사해요", capacity: 10, participate: 3}
  ]
import { useRoute } from 'vue-router'
const page = (useRoute().query.page) ? useRoute().query.page : 1;
const size = (useRoute().query.size) ? useRoute().query.size : 9;

const eventPage = allEventList.slice((page - 1) * size, page * size)
</script>

<style>
.row {
    gap: 3em;
}
.album {
    height: 1400px;
}
</style>