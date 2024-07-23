<template>
    <Header />
    <EventPickWinnerForm />
</template>
<script setup>
    import Header from '@/components/Header.vue'
    import EventPickWinnerForm from '@/components/event/EventPickWinnerForm.vue'
</script>

<style>
    .participantTable {
        row-gap: 30px;
        align-items: middle;
    }
</style>