<template>
<div class="col card" style="width: 18rem; height: 24rem;">
    <img class="card-img-top" src="https://placehold.co/600x400" alt="https://placehold.co/600x400">
  <div class="card-body">
    <h5 class="card-title" style="font-weight: bold;">{{eventCard.title}}</h5>
    <p class="card-text">{{eventCard.description.substring(0, 50)}}</p>

    <div class="bottomContainer">
        <div>
            {{eventCard.capacity}} / {{eventCard.participate}}
        </div>
        <div > 
            <a class="btn btn-primary">확인</a>
        </div>
    </div>
    
  </div>
</div>
</template>
<script setup>
    defineProps({
        eventCard: {
            Type: Object,
            required: true
        }
    })
</script>
<style>
p {
    height: 50%;
    width: 100%;
}
.bottomContainer {
    display: flex;
    justify-content: space-between;
}
</style>