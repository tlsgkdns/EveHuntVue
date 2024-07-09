<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="card mb-3">
                        <div class="card-body text-center">
                            <div class="profileImage">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                     class="rounded-circle img-fluid" style="width: 150px;" id="altImage"/>
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

const member = {
    email: "aaaa@gmail.com",
    name: "이기훈"
}
</script>