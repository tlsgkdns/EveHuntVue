<template>
    <div class="container py-5 justify-content-center" style="position: relative; top: 250px;">
        <div class="d-float">
            <div class="row">
                <div style="width: 600px">
                    <div class="card mb-3">
                        <div class="card-body text-center">
                            <h1>Profile Image</h1>
                            <div class="profileImage">
                                <img v-if="imageSrc" :src="imageSrc" alt="avatar"
                                     class="rounded-circle img-fluid" style="width: 150px; height: 150px" id="altImage"/>
                                <img v-else src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                     class="rounded-circle img-fluid" style="width: 150px;" id="altImage"/>
                            </div>
                            <div class="d-flex justify-content-center mb-2 my-2">
                                <button class="btn btn-primary setProfileImageBtn" type="button" @click="modalOpen">Set Profile Image</button>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">이름</span>
                                <input type="text" class="form-control" id="name" placeholder="이름" v-model="name">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex my-4 justify-content-center">
                <button type="button" class="btn btn-primary" @click="editProfileAndRouting">Submit</button>
            </div>
        </div>
    </div>
    <UploadImageModal v-show="modalCheck" @modal-check="modalOpen" @set-image="setImage"></UploadImageModal>
</template>

<script setup>
    import { ref } from 'vue';
    import { getLoginMember, editProfile } from '@/js/member';
    import { getImageSrc } from '@/js/upload';
    import UploadImageModal from '@/components/UploadImageModal.vue'
    import { useRouter } from 'vue-router';

    const name = ref("")
    const image = ref(null)
    const imageSrc = ref(null)
    const modalCheck = ref(false)
    const router = useRouter()
    const memberId = ref(0)
    getLoginMember().then(
        (response) => {
            name.value = response.name
            memberId.value = response.memberId
            getImageSrc(response.profileImageName).then(
                (imageResponse) => {
                imageSrc.value = imageResponse
            }
            )
        }
    )
    function modalOpen()
    {
        modalCheck.value = !modalCheck.value
    }
    function setImage(response)
    {
        image.value = response[0].link
        console.log(image)
        modalOpen()
        getImageSrc(image.value).then(
            response => {
                imageSrc.value = response
            }
        )
    }
    function editProfileAndRouting()
    {
        console.log(image.value)
        editProfile(memberId.value, name.value, image.value).then(
            (response) => {
                alert("프로필을 수정했습니다.")
                router.push('/member/info?id=' + response.memberId)
            }
        )
    }
</script>