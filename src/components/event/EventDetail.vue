<template>
    <div class="container mt-5">
        <div class="row w-100">
            <div class="col-lg-7">
                <article>
                     <!-- Post header-->
                     <header class="mb-4">
                        <!-- Post title-->
                         <h1 class="fw-bolder mb-1">{{event.title}}</h1>
                         <div class="text-muted fst-italic mb-2">개최자: {{event.hostName}}</div>
                        <!-- Post meta content-->
                        <div class="text-muted fst-italic mb-2">개최 개시일: {{event.createdAt}}</div>
                        <!-- Post categories-->
                        <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                        <a class="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
                    </header>
                    <!-- Preview image figure-->
                    <figure class="mb-4"><img class="img-fluid rounded" v-if="event.eventImage != null"alt="https://dummyimage.com/900x400/ced4da/6c757d.jpg" /></figure>
                    <!-- Post content-->
                    <section class="mb-5">
                        {{event.descrition}}
                    </section>
                </article>
            </div>
            <div class="col-lg-3">
                <div class="card mb-4">
                    <div class="card-header">이벤트 참여 인원</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">태그</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">이벤트 종료일</div>
                        <div class="card-body">{{event.closedAt}}</div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">최근 업데이트일</div>
                        <div class="card-body">{{event.updatedAt}}</div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">이벤트에 참여하기</div>
                        <div class="card-body">
                            <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const eventId = useRoute().query.id;

const event = {
    title: "Hello Event",
    descrition: "안녕하세요 감사해요 잘있어요 다시 만나요",
    winMessage: "당신이 이겼습니다",
    question: "이것이 질문",
    createdAt: "2012-11-02 12:03",
    updatedAt: "2012-11-03 13:04",
    closedAt: "2012-12-01",
    capacity: 200,
    hostName: "개발자",
    eventType: 0,
    eventImage: null
}
</script>

<style>
</style>