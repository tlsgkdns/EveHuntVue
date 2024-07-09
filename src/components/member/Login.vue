<template>
    <div class = "align-middle">
<div class="container-fluid d-flex justify-content-center" style="height: 100vh">
    <div class="card align-self-center">
        <div class="card-header">
            Login Page
        </div>
        <div class="card-body">
            <div class="input-group mb-3">
                    <span class="input-group-text">ID</span>
                    <input type="text" name="username" class="form-control" placeholder="USER ID" >
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">PASSWORD</span>
                    <input type="password" name="password" class="form-control" placeholder="PASSWORD">
                </div>
                <div class="input-group mb-3">
                    <input class="form-check-input" type="checkbox" name="remember-me">
                    <label class="form-check-label">
                        Auto Login
                    </label>
                </div>
                <div class="my-4">
                    <div class="float-end">
                        <button type="button" class="btn btn-primary submitBtn">LOGIN</button>
                    </div>
                </div>
                <button type="submit" class="btn btn-secondary">Register</button>

        </div>
    </div>
</div>
    </div>
</template>