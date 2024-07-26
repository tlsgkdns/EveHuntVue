<template>
    <div class = "align-middle">
<div class="container-fluid d-flex justify-content-center" style="height: 100vh">
    <div class="card align-self-center">
        <div class="card-header">
            Login Page
        </div>
        <div class="card-body">
                <div class="input-group mb-3">
                    <span class="input-group-text">EMAIL</span>
                    <input type="text" name="username" class="form-control" placeholder="Email" v-model="email">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">PASSWORD</span>
                    <input type="password" name="password" class="form-control" placeholder="PASSWORD" v-model="password">
                </div>
                <div class="input-group mb-3">
                    <input class="form-check-input" type="checkbox" name="remember-me">
                    <label class="form-check-label">
                        Auto Login
                    </label>
                </div>
                <div class="my-4">
                    <div class="float-end">
                        <button type="button" class="btn btn-primary submitBtn" @click="loginAndRouting()">LOGIN</button>
                    </div>
                </div>
                <button type="submit" class="btn btn-secondary" to="/member/register">Register</button>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
    import { login } from '@/js/member';
    import { useRouter } from 'vue-router';

    const email = defineModel('email')
    const password = defineModel('password')
    const router = useRouter()

    function loginAndRouting()
    {
        login(email.value, password.value).then(
            reponse => {
                router.push({path: '/home'})
            }
        ).catch(e => {
            if(e.message)
            {
                email.value = ""
                password.value = ""
                alert("아이디와 비밀번호가 일치하지 않습니다.")
            }
        })
    }
</script>