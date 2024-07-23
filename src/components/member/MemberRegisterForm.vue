<template>
    <div class="container py-5 justify-content-center">
        <div class="d-float">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body text-center">
                            <h1>Profile Image</h1>
                            <div class="profileImage">
                                <img v-if="imageSrc" :src="imageSrc" alt="avatar"
                                     class="rounded-circle img-fluid" style="width: 150px;" id="altImage"/>
                                <img v-else src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                     class="rounded-circle img-fluid" style="width: 150px;" id="altImage"/>
                            </div>
                            <div class="d-flex justify-content-center mb-2 my-2">
                                <button class="btn btn-primary setProfileImageBtn" type="button" @click="modalOpen">Set Profile Image</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-6">
                    <div class="card-body">
                        <div class="row d-flex justify-content-center registerForm">
                            <small style="color:red" id="nicknameInfo" v-if="false"></small>
                            <div class="input-group">
                                <span class="input-group-text">E-mail</span>
                                <input type="text" class="form-control" id="email" placeholder="E-mail" v-model="email">
                            </div>
                            <small style="color:red" id="passwordInfo" v-if="false"></small>
                            <div class="input-group">
                                <span class="input-group-text">Password</span>
                                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                                <span class="input-group-text">Password Check</span>
                                <input type="password" class="form-control" id="passwordCheck" placeholder="Password" v-model="passwordCheck">
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Name</span>
                                <input type="text" class="form-control" id="name" placeholder="name" v-model="name">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-4">
                <div class="front-end" style="position: relative;left: 790px;">
                    <button type="button" class="btn btn-primary" @click="registerMemberAndRouting()">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <UploadImageModal v-show="modalCheck" @modal-check="modalOpen" @set-image="setImage"></UploadImageModal>
</template>

<script setup>
    import { registerMember, login } from '@/member';
    import { useRouter } from 'vue-router'
    import UploadImageModal from '@/components/UploadImageModal.vue'
    import {ref, toRaw } from 'vue'
    import { getImageSrc } from '@/upload';

    const email = defineModel('email')
    const password = defineModel('password')
    const passwordCheck = defineModel('passwordCheck')
    const name = defineModel('name')
    const modalCheck = ref(false)
    const image = ref(null)
    const imageSrc = ref(null)
    function modalOpen()
    {
        modalCheck.value = !modalCheck.value
    }
    const router = useRouter()
    
    function registerMemberAndRouting()
    {
        registerMember(email.value, name.value, password.value, toRaw(image.value)).then(
            response => {
                login(email.value, password.value).then(
                    () => {
                        alert("회원가입이 완료되었습니다.")
                        router.push({path: '/home'})
                    }
                )
            }
        ).catch(e => {
            if(e.response)
            {
                alert(e.response.data.message)
            }
        })
    }
    function setImage(response)
    {
        image.value = response[0].link
        modalOpen()
        console.log(image)
        getImageSrc(image.value).then(
            response => {
                imageSrc.value = response
            }
        )
    }
</script>
<style>
.registerForm {
    display: flex;
    height: auto;
}
</style>