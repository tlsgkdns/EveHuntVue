<template>
    <Header />
    <div class="row">
        <div class="col align-middle">
            <div class="card align-self-center">
                <div class="card-header">
                    Hello
                </div>
                <div class="card-body">
                    <div class="container justify-content-center">
                        <div class="row w-100">
                            <div class="col-4">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="searchKeyword">
                                    <button class="btn btn-outline-secondary searchBtn" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100">
                            <div class="col">
                                <EventPickWinnerForm />
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
    import Header from '@/components/Header.vue'
    import EventPickWinnerForm from '@/components/event/EventPickWinnerForm.vue'
    import Pagination from '@/components/Pagination.vue';
</script>

<style>
    .participantTable {
        row-gap: 30px;
        align-items: middle;
    }
</style>