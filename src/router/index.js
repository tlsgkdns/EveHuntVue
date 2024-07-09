import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import EventList from  '@/pages/event/EventList.vue';
import Login from '@/pages/member/Login.vue';
import Register from '@/pages/member/Register.vue';
import EventHost from '@/pages/event/EventHost.vue';
import EventDetail from '@/pages/event/EventDetail.vue';
import Info from '@/pages/member/Info.vue';
import EventWinnerPick from '@/pages/event/EvenWinnerPick.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/event/list', name: 'list', component: EventList},
        {path: '/member/login', name: 'login', component: Login},
        {path: '/member/register', name: 'register', component: Register},
        {path: '/member/info', name: 'info', component: Info},
        {path: '/event/host', name: 'host', component: EventHost},
        {path: '/event/detail', name: "detail", component: EventDetail},
        {path: '/event/pick-winner', name: "pick-winner", component: EventWinnerPick}
    ]
})

export default router