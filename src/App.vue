<script setup>
import { reactive, provide, computed } from 'vue';
import { useRoute } from 'vue-router';
const states = reactive({
  eventList: [
    {id: 1, title: "안녕하세요!", description: "감사해요", capacity: 10, participate: 3},
    {id: 2, title: "잘 있어요", description: "다시만나요", capacity: 10, participate: 5},
    {id: 3, title: "음", description: "그렇게", capacity: 100, participate: 6},
    {id: 4, title: "안녕하세요!", description: "이런 이벤트가 존재한다는 것을 알립니다. 그렇게 시간을 보내는 것은 어떨까요?", capacity: 20, participate: 7},
    {id: 5, title: "이미 자취를 감추었다.", description: "글쩍", capacity: 10, participate: 3}
  ],
  tagList: [
    {id: 1, tag: "그림"},
    {id: 2, tag: "선착순"},
    {id: 3, tag: "공식"},
    {id: 4, tag: "인형"},
    {id: 5, tag: "게임"},
    {id: 6, tag: "만화"},
    {id: 7, tag: "음악"},
    {id: 8, tag: "TV"},
    {id: 9, tag: "챌린지"},
    {id: 10, tag: "상금"}
  ]
})

provide('eventList', computed(() => states.eventList))
provide('tagList', computed(() => states.tagList))
provide('allEventList', computed(() => states.allEventList))

const route = useRoute()
</script>

<template>

<router-view :key="$route.fullPath"/>

</template>

<style>


</style>