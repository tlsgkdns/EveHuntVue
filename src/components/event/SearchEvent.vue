<template>
    <div class="searchBar">
            <select name="searchType" v-model="searchType">
                <option value="TITLE" selected>제목</option>
                <option value="DESCRIPTION">설명</option>
                <option value="TITLEDESCRIPTION">제목 + 설명</option>
                <option value="HOST">개최자</option>
                <option value="TAG">태그</option>
            </select>
            <select name="sortType" v-model="sortType">
                <option value="CLOSE" selected>종료일순</option>
                <option value="NEW">개최순</option>
                <option value="TITLE">제목순</option>
                <option value="HOST">개최자순</option>
            </select>
            <label for="checkbox">오름차순:</label> <input type="checkbox" v-model="asc" />
            <input type="text" class="form-control searchKeyword" v-model="keyword"/>
            <button type="button" class="btn btn-primary searchBtn" id="searchButton"  @click="searchClick">검색</button>
    </div>
</template>

<script setup>

import { useRoute, useRouter} from 'vue-router'; 
import {ref} from 'vue'
const keyword = ref(useRoute().query.keyword ? useRoute().query.keyword : "")
const router = useRouter()
const searchType = ref(useRoute().query.searchType ? useRoute().query.searchType : "TITLE")
const sortType = ref(useRoute().query.sortType ? useRoute().query.sortType : "TITLE")
const asc = ref(useRoute().query.asc != null && useRoute().query.asc ? true : false)

function searchClick()
{
    console.log(searchType)
    router.push("/event/list?keyword=" + keyword.value + "&searchType=" + searchType.value + "&sortType=" + sortType.value + "&asc=" + asc.value)
}
</script>

<style>
.searchBar {
    display: flex;
    gap: 1em;
    position: relative;
    justify-content: center;
}

.searchType {
    width: 100px;
}
.searchKeyword {
    width: 500px;
}
.searchBtn {
    width: 100px
}
</style>