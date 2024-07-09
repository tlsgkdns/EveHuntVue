<template>
    <div class="tagMenu">
        <h1>인기 태그</h1>
        <ul class="list-group tagMenuList">
            <h5 v-for="tag in tagList" class="list-group-item tagItem">
                {{tag.id}}. {{tag.tag}}
            </h5>
        </ul>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const tagList = inject('tagList')

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