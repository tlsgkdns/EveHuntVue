<template>
    <Header />
    <RegisterForm :registerFunction="registerAdmin"/>
</template>

<script setup>
import Header from '@/components/Header.vue';
import RegisterForm from '@/components/member/MemberRegisterForm.vue'
import { registerAdmin } from '@/js/member';
</script>