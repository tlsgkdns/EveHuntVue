<template>
<Header/>
<div class="mainScreen">
  <p style="position: relative;top: 200px; left: 1050px; font-size: 60px">당신의 이벤트를 찾아보세요!</p>
  <SearchEvent style= "top: 100px;left: 700px;"/>
  <PopularTagList style="top: -100px;left: 50px; width: 450px; height: 800px;"/>
  <Top5EventCardList style="top: -600px; left: 600px;" title="인기 이벤트 Top5" :eventList="eventList"/>
</div>

</template>

<script setup>
import Header from '@/components/Header.vue'
import Top5EventCardList from '@/components/event/Top5EventCardList.vue'
import SearchEvent from '@/components/event/SearchEvent.vue'
import PopularTagList from '@/components/PopularTagList.vue'
import { getPopularEvent } from '@/js/event'
import { ref } from 'vue'
const eventList = ref([])
getPopularEvent().then(
  (response) => {
    console.log(response)
    eventList.value = response
    console.log(eventList.value)
  }
)
</script>
<style>
.mainScreen {
  display: float;
  width: 1400px;
  height: 500px;
  position: relative;
  left: 50px
}
</style>