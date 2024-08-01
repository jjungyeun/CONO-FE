<template>
  <div id="detail-page">
    <div>
      <div id="detail-title">
        <p>{{ cono.conoName }}</p>
      </div>

      <table id="detail-nav">
        <tr>
          <td style="width: 50%; box-shadow: 0 3px 8px -4px rgba(0, 0, 0, 0.15) inset">
            <p>정보</p>
          </td>
          <td style="width: 50%; box-shadow: 0 3px 8px -4px rgba(0, 0, 0, 0.15)">
            <p>리뷰</p>
          </td>
        </tr>
      </table>
    </div>
    <div id="detail-box" v-if="isSuccess">
      <DetailList v-bind:cono="cono" />
      <span id="edit-cono">
        <p>
          {{ cono.updated_date }} 업데이트됨
          <router-link to="/edit">* 정보 수정 요청하기</router-link>
        </p>
      </span>
    </div>
  </div>
</template>

<script>
import DetailList from './detail/DetailList.vue'

export default {
  name: 'DetailPage',
  components: { DetailList },
  data: () => {
    return {
      cono: {},
      isSuccess: false
    }
  },
  created() {
    this.getCono()
  },
  methods: {
    async getCono() {
      this.axios
        .get('/be-api/conos/' + this.$route.params.conoId)
        .then((res) => {
          this.cono = res.data
          this.isSuccess = true
        })
        .catch((res) => {
          console.error(res)
        })
    }
  }
}
</script>

<style scoped>
#detail-page {
  padding-top: 5%;
  padding-bottom: 3%;
  min-height: 90vh;
}

#detail-box {
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
}

#detail-nav {
  width: 100%;
  text-align: center;
  td {
    border: 1px solid #f0f0f0;
    padding-top: 3%;
    padding-bottom: 3%;
    p {
      font-weight: bold;
    }
  }
}

#detail-title {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 5%;
  p {
    font-size: x-large;
    font-weight: bold;
  }
}

#edit-cono {
  P {
    color: #d0a22a;
    padding-left: 3%;
  }
  a {
    margin-left: 7px;
    color: gray;
    font-size: small;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
