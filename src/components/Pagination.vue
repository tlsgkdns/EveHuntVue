<template>
    <div class="container py-5 mx-auto">
        <ul class="pagination flex-wrap">
            <li class="page-item" v-if="responseDTO.prev">
                <router-link class="page-link" :to="`${currentRoute}?page=${responseDTO.start - 1}&size=${responseDTO.size}`">Previous</router-link>
            </li>
            <li :class="[i - 1 + responseDTO.start == page ? 'page-item active' : 'page-item']" v-for="i in ((responseDTO.end - responseDTO.start + 1 > 10) ? 10 : responseDTO.end - responseDTO.start + 1)">
                <router-link class="page-link" :to="`${currentRoute}?page=${responseDTO.start + i - 1}&size=${responseDTO.size}`">{{i - 1 + responseDTO.start}}</router-link>
            </li>
            <li class="page-item" v-if="responseDTO.next">
                <router-link class="page-link" :to="`${currentRoute}?page=${responseDTO.end + 1}&size=${responseDTO.size}`">Next</router-link>
            </li>
        </ul>
        <router-view :key="useRoute().fullPath"></router-view>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const page = (useRoute().query.page) ? useRoute().query.page : 1
const size = (useRoute().query.size) ? useRoute().query.size : 9
const responseDTO = {
    prev: false,
    page: page,
    size: size,
    total: 99,
    next: true,
    end: 11,
    start: 1
}
const currentRoute = useRoute().path
</script>