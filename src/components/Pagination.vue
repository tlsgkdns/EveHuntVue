<template>
    <div class="container py-5 mx-auto" v-if="responseDto">
        <ul class="pagination flex-wrap">
            <li class="page-item" v-if="responseDto.prev">
                <router-link class="page-link" :to="getURL(responseDto.start - 1, responseDto.size, responseDto.keyword, 
                responseDto.searchType, responseDto.sortType, responseDto.asc)">Previous</router-link>
            </li>
            <li :class="[i - 1 + responseDto.start == responseDto.page ? 'page-item active' : 'page-item']" 
                    v-for="i in ((responseDto.end - responseDto.start + 1 > 10) ? 10 : responseDto.end - responseDto.start + 1)">
                <router-link class="page-link" :to="getURL(i - 1 + responseDto.start, responseDto.size, responseDto.keyword, 
                responseDto.searchType, responseDto.sortType, responseDto.asc)">{{i - 1 + responseDto.start}}</router-link>
            </li>
            <li class="page-item" v-if="responseDto.next">
                <router-link class="page-link" :to="getURL(responseDto.end + 1, responseDto.size, responseDto.keyword, 
                responseDto.searchType, responseDto.sortType, responseDto.asc)">Next</router-link>
            </li>
        </ul>
        <router-view :key="useRoute().fullPath"></router-view>
    </div>
</template>

<script setup>
import { useRoute} from 'vue-router'

const currentRoute = useRoute().path
const page = (useRoute().query.page) ? useRoute().query.page : 1;
const id = useRoute().query.id
const props = defineProps({
    responseDto: {
        Type: Object,
        required: true,
        default: {
             prev: false,
        page: 1,
        size: 9,
        total: 99,
        next: true,
        end: 11,
        start: 1
        }
    }
})
function getURL(page, size, keyword, searchType, sortType, asc)
{
    var base = ((id) ? `${currentRoute}?id=${id}&page=${page}&size=${size}` : `${currentRoute}?page=${page}&size=${size}`)
    if(keyword != null && keyword != "") base += `&keyword=${keyword}`
    if(searchType != null && searchType != "") base += `&searchType=${searchType}`
    if(sortType != null && searchType != "") base += `&sortType=${sortType}`
    if(asc != null) base += `&asc=${asc}`
    return base
}
</script>