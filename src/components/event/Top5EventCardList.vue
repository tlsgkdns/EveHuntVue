<template>


<div class="container">
    <div class="justify-content-space-between">
        <h2>{{title}}</h2>
    </div>
    <div class="d-flex justify-content-end" style=" gap: 1em">
        <EventCard v-for="eventCard in eventList" :key="eventCard.id" :eventCard="eventCard"/>
    </div>
    <div class="front-end">
    </div>
</div>

</template>

<script setup>
import EventCard from '@/components/event/EventCard.vue'
import { inject } from 'vue';

const eventList = inject('eventList')
defineProps({
    title: {
        type: String,
        required: true
    },
})

</script>

<style>
.container {
    flex-wrap: wrap;
    display: flex;
    position: relative;
}
</style>