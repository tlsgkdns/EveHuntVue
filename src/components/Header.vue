<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style="font-size: 50px">EveHunt</a>
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
    <div class="d-flex justify-content-end" v-if="false">
        <button type="button" class="btn btn-primary me-2 border">Info</button>
        <button type="button" class="btn btn-primary border">Logout</button>
    </div>
    <div class="d-flex justify-content-end" v-else>
      <button type="button" class="btn btn-primary me-2 border">LogIn</button>
      <button type="button" class="btn btn-primary border">Register</button>
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
  import {getLoginMember} from '@/member'
</script>