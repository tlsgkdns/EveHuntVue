<template>
    <Header />
    <RegisterForm :registerFunction="registerMember"/>
</template>

<script setup>
import Header from '@/components/Header.vue';
import RegisterForm from '@/components/member/MemberRegisterForm.vue'
import { registerMember } from '@/js/member';
</script>