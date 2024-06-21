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
    <div id="detail-box">
      <DetailList v-bind:cono="cono" />
      <span id="edit-cono">
        <p>
          {{ cono.updatedDateTime }} 업데이트됨
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
      cono: {
        conoName: 'XXX코인노래방 미금역점',
        conoAddress: '경기도 성남시 어쩌구로 25 뭐시기저시기 엄청 긴 주소',
        operatingTime: '매일 13:00~24:00',
        phoneNumber: '010-1234-5678',
        feeList: '1000원 2곡\n5000원 12곡',
        checkedPayTypes: '현금, 카드',
        os: 'TJ미디어',
        roomCount: 5,
        checkedMicTypes: '',
        canControlSound: undefined,
        hasScoreBonus: true,
        updatedDateTime: new Date().toLocaleDateString()
      }
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
