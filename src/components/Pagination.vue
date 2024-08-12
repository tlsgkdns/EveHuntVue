<template>
    <div class="container py-5 mx-auto" v-if="responseDTO">
        <ul class="pagination flex-wrap">
            <li class="page-item" v-if="responseDTO.prev">
                <router-link class="page-link" :to="getURL(responseDTO.start - 1, responseDTO.size, responseDTO.keyword, 
                responseDTO.searchType, responseDTO.sortType, responseDTO.asc)">Previous</router-link>
            </li>
            <li :class="[i - 1 + responseDTO.start == responseDTO.page ? 'page-item active' : 'page-item']" 
                    v-for="i in ((responseDTO.end - responseDTO.start + 1 > 10) ? 10 : responseDTO.end - responseDTO.start + 1)">
                <router-link class="page-link" :to="getURL(i - 1 + responseDTO.start, responseDTO.size, responseDTO.keyword, 
                responseDTO.searchType, responseDTO.sortType, responseDTO.asc)">{{i - 1 + responseDTO.start}}</router-link>
            </li>
            <li class="page-item" v-if="responseDTO.next">
                <router-link class="page-link" :to="getURL(responseDTO.end + 1, responseDTO.size, responseDTO.keyword, 
                responseDTO.searchType, responseDTO.sortType, responseDTO.asc)">Next</router-link>
            </li>
        </ul>
        <router-view :key="useRoute().fullPath"></router-view>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
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
const responseDTO = ref(props.responseDto)

watch(() => props.responseDto, () => {
    responseDTO.value = props.responseDto
})
function getURL(page, size, keyword, searchType, sortType, asc)
{
    console.log(page, size, keyword, searchType, sortType, asc)
    var base = ((id) ? `${currentRoute}?id=${id}&page=${page}&size=${size}` : `${currentRoute}?page=${page}&size=${size}`)
    if(keyword != null && keyword != "") base += `&keyword=${keyword}`
    if(searchType != null && searchType != "") base += `&searchType=${searchType}`
    if(sortType != null && searchType != "") base += `&sortType=${sortType}`
    if(asc != null) base += `&asc=${asc}`
    return base
}
</script>