<template>
    <Header />
    <MemberProfile />
    <br/><br/> <br/><br/>
    <Top5EventCardList title = "개최한 이벤트" :eventList="hostEventList"/>
    <br/><br/>
    <Top5EventCardList title = "참여 이벤트"  :eventList="participatedEventList"/>
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import MemberProfile from '@/components/member/MemberProfile.vue';
    import Top5EventCardList from '@/components/event/Top5EventCardList.vue';
    import { ref } from 'vue';
    import { searchEvent } from '@/event';
    import { useRoute } from 'vue-router';
    const participatedEventList = ref([])
    const hostEventList = ref([])
    const memberId = useRoute().query.id

    
    searchEvent({"page": 1, "size": 5, "searchType": "participate", "keyword": memberId, "asc": true, "sortType": "new"}).then(
        (response) => {
            participatedEventList.value = response.dtoList
        }
    )
    searchEvent({"page": 1, "size": 5, "searchType": "host", "keyword": memberId, "asc": true, "sortType": "new"}).then(
        (response) => {
            hostEventList.value = response.dtoList
        }
    )
</script>