<template>


<div class="container">
    <div>
        <h2>{{title}}</h2>
        <div class="d-flex justify-content-end" style=" gap: 1em">
            <EventCard v-for="eventCard in eventList" :key="eventCard.id" :eventCard="eventCard"/>
        </div>
    </div>
    
    <div class="front-end">
    </div>
</div>

</template>

<script setup>
import EventCard from '@/components/event/EventCard.vue'
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    eventList: {
        type: Array,
        required: true
    }
})
</script>

<style>
.container {
    flex-wrap: wrap;
    display: flex;
    position: relative;
}
</style>