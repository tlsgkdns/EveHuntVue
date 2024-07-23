<template>
    <div class="album py-5" style="width: 40.7%; position: relative; top: 200px;">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
                <EventCard v-for="eventCard in eventList" :key="eventCard.id" :eventCard="eventCard"/>
            </div>
        </div>
        
        <Pagination :response-dto="responseDto" :key="useRoute().fullPath"/>
    </div>
</template>

<script setup>
import EventCard from '@/components/event/EventCard.vue'
import Pagination from '@/components/Pagination.vue';
import { useRoute } from 'vue-router'
import { searchEvent } from '@/event';
import { ref } from 'vue';
const eventList = ref([])
const responseDto = ref(null)

const page = (useRoute().query.page) ? useRoute().query.page : 1;
const size = (useRoute().query.size) ? useRoute().query.size : 9;
const keyword = (useRoute().query.keyword) ? useRoute().query.keyword : null
const sortType = (useRoute().query.sortType) ? useRoute().query.sortType : null
const searchType = (useRoute().query.searchType) ? useRoute().query.searchType : null
const asc = (useRoute().query.searchType) ? useRoute().query.asc : true

searchEvent({"page": page, "size": size, "keyword": keyword, "sortType": sortType, "searchType": searchType, "asc": asc}).then(
    (response) => {
        eventList.value = response.dtoList
        responseDto.value = response
    }   
)
</script>

<style>
.row {
    gap: 3em;
}
.album {
    height: 1400px;
}
</style>