<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="card mb-3">
                    <div v-if="member" class="card-body text-center">
                            <div class="profileImage">
                                <img v-if="imageSrc" :src="imageSrc" alt="avatar" class="rounded-circle img-fluid" style="width: 150px; height: 150px" id="altImage"/>
                                <img v-else src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" style="width: 150px;" alt="avatar"/>
                            </div>
                            <div class="text-muted fst-italic mb-2 my-3">Email: {{member.email}}</div>
                            <div class="d-flex justify-content-center mb-2 my-2">
                                <h1>{{member.name}}</h1>
                            </div>
                        </div>
                        <div class="card-footer" v-if="isLoginMember" style="display: flex; justify-content: end; gap: 2em;">
                            <button class="btn btn-primary" @click="editProfile">프로필 수정</button>
                            <button class="btn btn-primary" @click="editPassword">비밀번호 수정</button>
                        </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { getMember, getLoginMember } from '@/member';
import { useRoute, useRouter } from 'vue-router';
import { getImageSrc } from '@/upload';
const memberId = useRoute().query.id
const member = ref(null)
const imageSrc = ref(null)
const isLoginMember = ref(false)
const router = useRouter()
getMember(memberId).then( memberResponse => {
    member.value = memberResponse
    getImageSrc(memberResponse.profileImageName).then( imageResponse => {
        imageSrc.value = imageResponse
    })
    getLoginMember().then(
    response => {
        isLoginMember.value = (response.memberId == memberId)
    })
})
function editPassword()
{
    router.push('/member/edit/password')
}

function editProfile()
{
    router.push('/member/edit/profile')
}
</script>