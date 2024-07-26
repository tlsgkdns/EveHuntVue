<template>

<div class="align-middle">
      <div class="container-fluid d-flex justify-content-center" style="position: relative;top: 130px">
        <div class="card align-self-center" style="width: 1500px; height: 1000px">
          <div class="card-header mb-5"> 신고 처리 </div>
          <div class="container">
            <div class="row w-100" style="column-gap: 550px;">
              <div class="col-6 mb-5">
                <div class="input-group" style="gap: 1em;">
                  <select name="searchType" v-model="searchType">
                  <option value="reporter" selected>신고자</option>
                  <option value="event">이벤트</option>
                  <option value="reason">사유</option>
            </select>
            <select name="sortType" v-model="sortType">
                <option value="new" selected>등록순</option>
                <option value="reporter">신고자순</option>
                <option value="event">이벤트순</option>
            </select>
            <label for="checkbox">오름차순:</label> <input type="checkbox" v-model="asc" />
                  <input type="text" class="form-control" id="searchKeyword" v-model="keyword">
                  <button class="btn btn-outline-secondary searchBtn" type="button" @click="searchReportList">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="container justify-content-center">
              <div class="row w-100">
                <div class="col">
                  <div class="container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">신고자</th>
                          <th scope="col">신고 이벤트</th>
                          <th scope="col">신고 사유</th>
                          <th scope="col">처리</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for= "report in reportList" :key="report.reportId">
                          <th scope="row">{{report.reportId}}</th>
                          <td><a :href="'/member/info?id=' + report.reporterId" >{{report.reporterName}}</a></td>
                          <td><a :href="'/event/detail?id=' + report.eventId" >{{report.eventTitle}}</a></td>
                          <td row="3">
                            {{report.reason}}
                          </td>
                          <td>
                            <div v-if="report.processed == 'WAIT'">
                              <button class="btn btn-primary" @click="handleModalOpen(report.reportId)">처리</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination :response-dto="responseDto" :key="useRoute().fullPath"></Pagination>
        </div>
      </div>
    </div>
    <ReportHandleModal v-show="reportId >= 0" @modal-close="handleModalOpen" :reportId="reportId"></ReportHandleModal>
</template>

<script setup>
  import { getReports } from '@/js/report';
  import { ref } from 'vue';
  import { useRoute , useRouter} from 'vue-router';
  import Pagination from '@/components/Pagination.vue';
  import ReportHandleModal from './ReportHandleModal.vue';

  const reportList = ref([])
  const responseDto = ref(null)
  const router = useRouter()
  const page = (useRoute().query.page) ? useRoute().query.page : 1;
  const size = (useRoute().query.size) ? useRoute().query.size : 10;
  const keyword = ref((useRoute().query.keyword) ? useRoute().query.keyword : "")
  const sortType = ref((useRoute().query.sortType) ? useRoute().query.sortType : "")
  const searchType = ref((useRoute().query.searchType) ? useRoute().query.searchType : "")
  const asc = ref((useRoute().query.searchType) ? useRoute().query.asc : true)

  getReports({"page": page, "size": size, "sortType": sortType.value, "asc": asc.value, "keyword": keyword.value, "searchType": searchType.value}).then(
    (response) => {
      reportList.value = response.dtoList
      responseDto.value = response
    }
  )
  function searchReportList()
  {
    router.push("/member/admin/manage?keyword=" + keyword.value + "&searchType=" + searchType.value + "&sortType=" + sortType.value + "&asc=" + asc.value)
  }
  const reportId = ref(-1)
  function handleModalOpen(rId)
  {
    if(reportId.value == rId) reportId.value = -1
    else reportId.value = rId
  }
</script>