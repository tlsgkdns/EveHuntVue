import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import EventList from  '@/pages/event/EventList.vue';
import Login from '@/pages/member/Login.vue';
import Register from '@/pages/member/Register.vue';
import EventHost from '@/pages/event/EventHost.vue';
import EventDetail from '@/pages/event/EventDetail.vue';
import Info from '@/pages/member/Info.vue';
import EventWinnerPick from '@/pages/event/EvenWinnerPick.vue'
import PasswordEdit from '@/pages/member/PasswordEdit.vue'
import ProfileEdit from '@/pages/member/ProfileEdit.vue'
import EventEdit from '@/pages/event/EventEdit.vue';
import NotFound from '@/pages/NotFound.vue'
import Manage from '@/pages/admin/Manage.vue';
import AdminRegister from '@/pages/admin/AdminRegister.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home, alias: ['/home']},
        {path: '/event/list', name: 'list', component: EventList, props: true},
        {path: '/member/login', name: 'login', component: Login},
        {path: '/member/register', name: 'register', component: Register},
        {path: '/member/info', name: 'info', component: Info},
        {path: '/event/host', name: 'host', component: EventHost},
        {path: '/event/detail', name: "detail", component: EventDetail},
        {path: '/event/pick-winner', name: "pick-winner", component: EventWinnerPick},
        {path: '/member/edit/password', name: 'edit-member-password', component: PasswordEdit},
        {path: '/member/edit/profile', name: 'edit-member-profile', component: ProfileEdit},
        {path: '/event/edit', name: 'event-edit', component: EventEdit},
        {path: '/member/admin/manage', name: 'admin-manage', component: Manage},
        {path: '/member/admin/register', name: 'admin-register', component: AdminRegister},
        {path: '/:NotFound(.*)', component: NotFound}
    ]
})

export default router