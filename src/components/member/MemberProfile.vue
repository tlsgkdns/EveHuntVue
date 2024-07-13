<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="card mb-3">
                        <div v-if="member" class="card-body text-center">
                            <div class="profileImage">
                                <img v-if="imageSrc" :src="imageSrc" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;" id="altImage"/>
                                <img v-else src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" style="width: 150px;" alt="avatar"/>
                            </div>
                            <div class="text-muted fst-italic mb-2 my-3">Email: {{member.email}}</div>
                            <div class="d-flex justify-content-center mb-2 my-2">
                                <h1>{{member.name}}</h1>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { getMember } from '@/member';
import { useRoute } from 'vue-router';
import { getImageSrc } from '@/upload';
const memberId = useRoute().query.id
const member = ref(null)
const imageSrc = ref(null)

getMember(memberId).then( memberResponse => {
    member.value = memberResponse
    console.log(member.value)
    getImageSrc(memberResponse.profileImageName).then( imageResponse => {
        imageSrc.value = imageResponse
    }
    )
}
)
</script>