<script setup>
import { reactive, provide, computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const logined = ref(false)
provide('logined', logined)

const route = useRoute()
</script>

<template>

<router-view :key="$route.fullPath"/>

</template>

<style>


</style>