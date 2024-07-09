<template>
    <Header />
    <MemberProfile />
    <br/><br/> <br/><br/>
    <Top5EventCardList title = "개최한 이벤트"/>
    <br/><br/>
    <Top5EventCardList title = "참여 이벤트"/>
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import MemberProfile from '@/components/member/MemberProfile.vue';
    import Top5EventCardList from '@/components/event/Top5EventCardList.vue';
</script>