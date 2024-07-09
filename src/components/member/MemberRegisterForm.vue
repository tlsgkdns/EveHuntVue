<template>
    <div class="container py-5 justify-content-center">
        <form class="d-float">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body text-center">
                            <h1>Profile Image</h1>
                            <div class="profileImage">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                     class="rounded-circle img-fluid" style="width: 150px;" id="altImage"/>
                            </div>
                            <div class="d-flex justify-content-center mb-2 my-2">
                                <button class="btn btn-primary setProfileImageBtn" type="button">Set Profile Image</button>
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
                                <input type="text" class="form-control" id="email" placeholder="E-mail">
                            </div>
                            <small style="color:red" id="passwordInfo" v-if="false"></small>
                            <div class="input-group">
                                <span class="input-group-text">Password</span>
                                <input type="password" class="form-control" id="password" placeholder="Password">
                                <span class="input-group-text">Password Check</span>
                                <input type="password" class="form-control" id="passwordCheck" placeholder="Password">
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Name</span>
                                <input type="text" class="form-control" id="name" placeholder="name">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-4">
                <div class="front-end" style="position: relative;left: 790px;">
                    <button type="button" class="btn btn-primary submitBtn">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>
<style>
.registerForm {
    display: flex;
    height: auto;
}
</style>