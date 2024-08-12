<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link class="nav-link" to="/home"><a class="navbar-brand" href="#" style="font-size: 50px">EveHunt</a></router-link>
    <div class="collapse navbar-collapse d-flex">
      <ul class="navbar-nav menu">
        <li class="nav-item">
          <router-link class="nav-link" to="/event/list">이벤트 리스트 확인</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/event/host">이벤트 개최</router-link>
        </li>
      </ul>
    </div>
    <form>

    </form>
    <div class="d-flex justify-content-end" v-if="logined">
        <button type="button" class="btn btn-primary me-2 border" v-if="member != null && member.role.includes('ADMIN')" @click="admin">ADMIN</button>
        <button type="button" class="btn btn-primary me-2 border" @click="info">Info</button>
        <button type="button" class="btn btn-primary border" @click="logOut">Logout</button>
    </div>
    <div class="d-flex justify-content-end" v-else>
      <button type="button" class="btn btn-primary me-2 border" @click="login">LogIn</button>
      <button type="button" class="btn btn-primary border" @click="register">Register</button>
    </div>
  </div>
</nav>
</template>
<style>
.menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1em;
    justify-self: center;
}
.nav-item router-link{
  text-align: center;
  font-size: 20px;
}
.menu li:nth-child(1){
    margin-left: 100px;
}

.menu li:nth-child(2){
    margin-right: auto;
}
</style>

<script setup>
  import {memberLogout, isLogin, getLoginMember} from '@/js/member'
  import {ref} from 'vue';
  import { useRouter } from 'vue-router';
  const member = ref(null)
  const router = useRouter()
  const logined = ref(false)
  
  isLogin().then(
    (response) => {
      logined.value = response
      if(response) {
        getLoginMember().then(
          (loginedMember) => {
          member.value = loginedMember
        }
      )
      }
    }
  )
 
  function login()
  {
    router.push('/member/login')
  }
  function register()
  {
    router.push('/member/register')
  }
  function info()
  {
    router.push('/member/info?id=' + member.value.memberId)
  }
  function logOut()
  {
    memberLogout()
    alert('정상적으로 로그아웃되었습니다.')
    location.reload()
  }
  function admin()
  {
    router.push('/member/admin/manage')
  }
</script>