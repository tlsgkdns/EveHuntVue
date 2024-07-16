<template>
    <Header />
    <SearchEvent style="top: 50px; left: 200px;"/>
    <div class="eventListScreen">
      <div class="eventsInfos">
        <PopularTagList style="top: 250px; left: 100px; width: 450px; height: 800px;"/>
        <EventSearchList style="left: 400px;"/>
      </div>
    </div>
</template>

<script setup>
import EventSearchList from '@/components/event/EventSearchList.vue'
import Header from '@/components/Header.vue';
import SearchEvent from '@/components/event/SearchEvent.vue'
import PopularTagList from '@/components/PopularTagList.vue'
</script>

<style>
.eventsInfos {
    display: flex;
    width: auto;
    height: 500px;
}
.eventListScreen {
  display: float;
}
</style>