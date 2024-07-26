<template>
    <div class="tagMenu">
        <h1>인기 태그</h1>
        <ul class="list-group tagMenuList">
            <h5 v-for="(tag, rank) in tagList" class="list-group-item tagItem" @click="searchTag(tag.tagName)">
                {{rank + 1}}. {{tag.tagName}}
            </h5>
        </ul>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { getPopularTagList } from '@/js/tag';
import { useRouter } from 'vue-router';
const tagList = ref([])
const router = useRouter()
getPopularTagList().then(
    (response) => {
        console.log(response)
        tagList.value = response
    }
)

function searchTag(tagName)
{
    router.push('/event/list?keyword=' + tagName + "&searchType=tag")
}
</script>

<style>
.tagMenu {
    flex-wrap: wrap;
    background-color:lightgray;
    position: relative;
    align-items: center;
    align-content: stretch;
}
.tagMenuList {
    justify-items: center;
}
.tagItem {
    font-size: 30px;
    top: 30px;
    position: relative;
    border: 1px solid black;
    background-color: lightgreen;
}
</style>