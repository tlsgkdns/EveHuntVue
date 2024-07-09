<template>
    <div class="searchBar">
            <select name="searchType">
                <option>제목</option>
                <option>제목 + 설명</option>
                <option>개최자</option>
                <option>태그</option>
            </select>
            <input type="text" class="form-control searchKeyword"/>
            <button type="button" class="btn btn-primary searchBtn" id="searchButton" >검색</button>
    </div>
    
</template>

<script>
</script>

<style>
.searchBar {
    display: flex;
    gap: 1em;
    position: relative;
    justify-content: center;
}

.searchType {
    width: 100px;
}
.searchKeyword {
    width: 500px;
}
.searchBtn {
    width: 100px
}
</style>