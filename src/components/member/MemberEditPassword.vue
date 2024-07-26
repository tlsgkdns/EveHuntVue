<template>
    <div class = "align-middle">
<div class="container-fluid d-flex justify-content-center" style="height: 100vh">
    <div class="card align-self-center">
        <div class="card-header">
            비밀번호 변경
        </div>
        <div class="card-body">
            <div class="input-group mb-3">
                    <span class="input-group-text">현재 비밀번호: </span>
                    <input type="password" class="form-control" placeholder="현재 비밀번호" v-model="currentPassword">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">새 비밀번호: </span>
                    <input type="password" name="password" class="form-control" placeholder="새 비밀번호" v-model="newPassword">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">비밀번호 확인: </span>
                    <input type="password" name="password" class="form-control" placeholder="비밀번호 확인" v-model="newPasswordCheck">
                </div>
                <div class="my-4">
                    <div class="float-end">
                        <button type="button" class="btn btn-primary" @click="editPasswordAndRouting">수정</button>
                    </div>
                </div>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {getLoginMember, editPassword} from '@/js/member'
import {useRouter} from 'vue-router'

const currentPassword = ref("")
const newPassword = ref("")
const newPasswordCheck = ref("")
const router = useRouter()
const memberId = ref(0)

getLoginMember().then(
    (response) => {
        memberId.value = response.memberId
    }
)
function editPasswordAndRouting()
{
    editPassword(currentPassword.value, newPassword.value, newPasswordCheck.value).then(
        (response) => {
            alert("비밀번호를 성공적으로 변경하였습니다.")
            router.push('/member/info?id=' + memberId)
        }
    ).catch (
        (e) => {
            if(e.response)
            {
                alert(e.response.data.message)
            }
            else if(e.request)
            {
                alert(error.request)
            }
            else
            {
                alert("Error: " + e)
            }
        }
    )
}
</script>