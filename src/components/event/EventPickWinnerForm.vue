<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">추가질문 답</th>
                    <th scope="col">당첨 여부</th>
                    <th scope="col">당첨 메시지 수정</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="participant in participantPage">
                    <th scope="row">{{participant.id}}</th>
                    <td>{{participant.email}}</td>
                    <td>{{participant.answer}}</td>
                    <td><input type="checkbox" :value="participant.id"/></td>
                    <td><input type="button" class="btn btn-primary" v-show = "true"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

 const participantList = [
    {id: 1, email: "ajtwlsgkdns@naver.com", answer: "Hello"},
    {id: 2, email: "tlsgkdns@naver.com", answer: "Nice to Meet you"},
    {id: 3, email: "ajtwlsgkdns@gmail.com", answer: "How are you"},
    {id: 4, email: "tlsgkdns@gmail.com", answer: "I am fine thank you"},
    {id: 5, email: "ajtwlsgkdns@daum.com", answer: "May I help you"},
    {id: 6, email: "tslgkdns@daum.com", answer: "You are bad"},
    {id: 7, email: "mayIhelpYou@naver.com", answer: "Can you speak English"},
    {id: 8, email: "noreply@naver.com", answer: "and you"},
    {id: 9, email: "ajtwlsgkdns1@gmail.com", answer: "Thank you"},
    {id: 10, email: "ajtwlsgkdns2@gmail.com", answer: "You're welcome"},
    {id: 11, email: "ajtwlsgkdns1@naver.com", answer: "I can swimming"},
    {id: 12, email: "ajtwlsgkdns2@naver.com", answer: "Tell Me"},
    {id: 13, email: "ajtwlsgkdns3@naver.com", answer: "Help yourself"},
 ]

 import { useRoute } from 'vue-router'
const page = (useRoute().query.page) ? useRoute().query.page : 1;
const size = (useRoute().query.size) ? useRoute().query.size : 9;

const participantPage = participantList.slice((page - 1) * size, page * size)
</script>

<style>

</style>