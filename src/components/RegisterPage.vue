<template>
  <div id="register-page">
    <div id="register-title">
      <p>노래방 신규 등록</p>
    </div>

    <div id="register-nav">
      <table>
        <tr>
          <!-- 1. 기본정보 -->
          <td v-show="formPage != 1" style="width: 25%; border-radius: 20px 0 0 20px">
            <p>기본<br />정보</p>
          </td>
          <td
            class="filled"
            v-show="formPage == 1"
            style="width: 25%; border-radius: 20px 0 0 20px"
          >
            <p>기본<br />정보</p>
          </td>

          <!-- 2. 부가정보 -->
          <td v-show="formPage != 2" style="width: 25%">
            <p>부가<br />정보</p>
          </td>
          <td class="filled" v-show="formPage == 2" style="width: 25%">
            <p>부가<br />정보</p>
          </td>

          <!-- 3. 편의정보 -->
          <td v-show="formPage != 3" style="width: 25%">
            <p>편의<br />정보</p>
          </td>
          <td class="filled" v-show="formPage == 3" style="width: 25%">
            <p>편의<br />정보</p>
          </td>

          <!-- 4. 등록하기 -->
          <td v-show="formPage != 4" style="width: 25%; border-radius: 0 20px 20px 0">
            <p>등록<br />하기</p>
          </td>
          <td
            class="filled"
            v-show="formPage == 4"
            style="width: 25%; border-radius: 0 20px 20px 0"
          >
            <p>등록<br />하기</p>
          </td>
        </tr>
      </table>
    </div>

    <div v-show="formPage == 1" class="register-form" id="form-1">
      <p>업체명*</p>
      <input
        class="text-input"
        v-model="cono.conoName"
        placeholder="업체명을 입력해주세요."
        autocomplete="off"
      />
      <p>주소*</p>
      <input
        class="text-input"
        v-model="cono.conoAddress"
        placeholder="주소를 입력해주세요."
        autocomplete="off"
      />
      <p>운영시간*</p>
      <input
        class="text-input"
        v-model="cono.operatingTime"
        placeholder="운영시간을 입력해주세요."
        autocomplete="off"
      />
      <p>전화번호</p>
      <input
        class="text-input"
        v-model="cono.phoneNumber"
        placeholder="대표 전화번호를 입력해주세요."
        autocomplete="off"
      />
    </div>

    <div v-show="formPage == 2" class="register-form" id="form-2">
      <!-- 가격: 동적 input -->
      <p>가격<button id="fee-add-button" @click="addFee()">요금정보 추가</button></p>
      <span v-if="cono.feeList.length == 0">요금정보를 추가하기 위해 위 버튼을 눌러주세요.</span>

      <table id="fee-box" v-show="cono.feeList.length > 0">
        <tr v-for="(item, index) in cono.feeList" v-bind:key="index">
          <td style="width: 30%">
            <div>
              <input type="number" v-model="item.price" autocomplete="off" min="500" step="500" />
            </div>
          </td>
          <td style="width: 10%">
            <span>원에</span>
          </td>
          <td style="width: 20%">
            <div><input type="number" v-model="item.value" autocomplete="off" /></div>
          </td>
          <td style="width: 25%">
            <select v-model="item.unit">
              <option v-for="unit in feeUnits" v-bind:key="unit.value" :value="unit.value">
                {{ unit.label }}
              </option>
            </select>
          </td>
          <td style="width: 15%">
            <button @click="removeFee(index)">삭제</button>
          </td>
        </tr>
      </table>

      <!-- 결제 방식: 체크박스 -->
      <p>결제방식</p>
      <table>
        <tr>
          <td style="width: 50%">
            <span
              class="checkbox-input"
              v-for="payType in payTypes.slice(0, 2)"
              v-bind:key="payType.value"
            >
              <input type="checkbox" :value="payType.value" v-model="cono.checkedPayTypes" />
              <label :for="payType.value">{{ payType.label }}<br /></label>
            </span>
          </td>
          <td style="width: 50%">
            <span
              class="checkbox-input"
              v-for="payType in payTypes.slice(2)"
              v-bind:key="payType.value"
            >
              <input type="checkbox" :value="payType.value" v-model="cono.checkedPayTypes" />
              <label :for="payType.value">{{ payType.label }}<br /></label>
            </span>
          </td>
        </tr>
      </table>

      <!-- 반주기: 라디오 버튼 -->
      <p>반주기</p>
      <span class="radio-input" v-for="osType in osTypes" v-bind:key="osType.value">
        <input type="radio" :value="osType.value" v-model="cono.os" />
        <label :for="osType.value">{{ osType.label }}</label>
      </span>
    </div>

    <div v-show="formPage == 3" class="register-form" id="form-3">
      <!-- 방 개수: 숫자 입력 -->
      <p>방 개수</p>
      <input
        type="number"
        class="text-input"
        v-model="cono.roomCount"
        placeholder="방 개수를 입력해주세요."
        autocomplete="off"
      />

      <!-- 마이크: 체크박스 -->
      <p>마이크 종류</p>
      <span class="checkbox-input" v-for="micType in micTypes" v-bind:key="micType.value">
        <input type="checkbox" :value="micType.value" v-model="cono.checkedMicTypes" />
        <label :for="micType.value">{{ micType.label }}</label>
      </span>

      <!-- 음향 조절: 라디오 버튼 -->
      <p>음향 조절</p>
      <span class="radio-input" v-for="soundType in soundTypes" v-bind:key="soundType.value">
        <input type="radio" :value="soundType.value" v-model="cono.canControlSound" />
        <label :for="soundType.value">{{ soundType.label }}</label>
      </span>

      <!-- 100점 서비스: 라디오 버튼 -->
      <p>100점 보너스</p>
      <span class="radio-input" v-for="bonusType in bonusTypes" v-bind:key="bonusType.value">
        <input type="radio" :value="bonusType.value" v-model="cono.hasScoreBonus" />
        <label :for="bonusType.value">{{ bonusType.label }}</label>
      </span>
    </div>

    <div v-show="formPage == 4" class="register-form" id="form-4">
      <DetailList v-bind:cono="cono" />
      <p style="text-align: center">입력하신 정보로 신규 노래방을 등록합니다.</p>
    </div>

    <!-- 최하단 버튼 그룹 -->
    <table id="form-button">
      <tr>
        <td v-show="formPage == 1" style="width: 100%">
          <button @click="next()">다음</button>
        </td>
        <td v-show="formPage > 1" style="width: 50%">
          <button @click="prev()">이전</button>
        </td>
        <td v-show="formPage > 1 && formPage < 4" style="width: 50%">
          <button @click="next()">다음</button>
        </td>
        <td v-show="formPage == 4" style="width: 50%">
          <button @click="register()">등록</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DetailList from './detail/DetailList.vue'

export default {
  name: 'RegisterPage',
  components: { DetailList },
  data: () => {
    return {
      payTypes: [
        {
          value: 'CASH',
          label: '현금'
        },
        {
          value: 'CARD',
          label: '카드'
        },
        {
          value: 'APP',
          label: '간편결제'
        }
      ],
      osTypes: [
        {
          value: 'TJ',
          label: 'TJ미디어'
        },
        {
          value: 'KY',
          label: '금영'
        }
      ],
      micTypes: [
        {
          value: 'WIRELESS',
          label: '무선'
        },
        {
          value: 'WIRE',
          label: '유선'
        },
        {
          value: 'STAND',
          label: '스탠드'
        }
      ],
      soundTypes: [
        {
          value: true,
          label: '가능'
        },
        {
          value: false,
          label: '불가능'
        }
      ],
      bonusTypes: [
        {
          value: true,
          label: '제공'
        },
        {
          value: false,
          label: '미제공'
        }
      ],
      feeUnits: [
        {
          value: 'SONG',
          label: '곡'
        },
        {
          value: 'MINUTE',
          label: '분'
        },
        {
          value: 'HOUR',
          label: '시간'
        }
      ],
      formPage: 1,
      cono: {
        conoName: '',
        conoAddress: '',
        operatingTime: '',
        phoneNumber: '',
        feeList: [],
        checkedPayTypes: [],
        os: '',
        roomCount: undefined,
        checkedMicTypes: [],
        canControlSound: undefined,
        hasScoreBonus: undefined
      }
    }
  },
  methods: {
    addFee() {
      if (this.cono.feeList.length < 10) {
        this.cono.feeList.push({})
      }
    },
    removeFee(index) {
      if (this.cono.feeList.length > 0) {
        this.cono.feeList.splice(index, 1)
      }
    },
    next() {
      if (this.formPage == 1) {
        if (
          this.cono.conoName == '' ||
          this.cono.conoAddress == '' ||
          this.cono.operatingTime == ''
        ) {
          alert('필수 정보를 모두 채워주세요.')
          return
        }
      } else if (this.formPage == 2) {
        for (let i = this.cono.feeList.length - 1; i >= 0; i--) {
          var fee = this.cono.feeList[i]
          if (
            fee.price == undefined ||
            fee.price <= 0 ||
            fee.value == undefined ||
            fee.value <= 0 ||
            fee.unit == undefined
          ) {
            this.cono.feeList.splice(i, 1)
          }
        }
      }
      this.formPage += 1
    },
    prev() {
      this.formPage -= 1
    },
    async register() {
      // POST body 생성
      var body = {}
      body.name = this.cono.conoName
      body.address = this.cono.conoAddress
      // TODO - 추후 지도 API 연동 필요
      body.location = {
        lan: 80.1111,
        lon: 80.1111
      }
      if (this.cono.operatingTime != '') body.operating_time = this.cono.operatingTime
      if (this.cono.phoneNumber != '') body.phone_number = this.cono.phoneNumber
      if (this.cono.feeList.length > 0) body.fee = this.cono.feeList
      if (this.cono.checkedPayTypes > 0) body.pay_types = this.cono.checkedPayTypes
      if (this.cono.os != '') body.os = this.cono.os
      if (this.cono.roomCount != undefined) body.room_count = this.cono.roomCount
      if (this.cono.hasScoreBonus != undefined) body.has_score_bonus = this.cono.hasScoreBonus
      if (this.cono.canControlSound != undefined) body.can_control_sound = this.cono.canControlSound
      if (this.cono.checkedMicTypes > 0) body.mic_types = this.cono.checkedMicTypes

      this.axios
        .post('/be-api/conos', body)
        .then((res) => {
          alert('노래방 등록이 완료되었습니다.')
          this.$router.push('/cono/' + res.headers.location + '/detail')
        })
        .catch((res) => {
          console.error(res)
          alert('문제가 발생했습니다. 잠시 후에 다시 시도해주세요.')
        })
    }
  }
}
</script>

<style scoped>
#register-page {
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
  min-height: 90vh;
}

#register-title {
  text-align: center;
  margin-bottom: 3%;
  p {
    font-size: x-large;
    font-weight: bold;
    color: #d0ca2a;
  }
}

#register-nav {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  table {
    width: 100%;
    text-align: center;
    td {
      border: 2px solid #fffb7f;
      padding-top: 1%;
      padding-bottom: 1%;
      font-size: small;
    }
    .filled {
      background-color: #fffb7f;
    }
  }
}

.register-form {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  p {
    font-size: large;
    font-weight: bold;
    color: #d0a22a;
    padding-left: 5px;
    margin-top: 5%;
    margin-bottom: 2%;
  }
}

#form-button {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  text-align: center;

  button {
    width: 95%;
    padding: 10px;
    background-color: #fffb7f;
    border-radius: 10px;
    border: none;
    font-size: medium;
    font-weight: bold;
    color: #3a3a3a;
    cursor: pointer;
  }
}

.text-input {
  padding: 10px;
  padding-left: 15px;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #ffdb7f;
  font-size: medium;
}

.checkbox-input {
  margin-bottom: 2%;
  padding-left: 15px;
  color: #3a3a3a;
  font-weight: bold;
  input {
    accent-color: #9c7e31;
    margin-right: 15px;
    transform: scale(1.5);
  }
}

.radio-input {
  margin-bottom: 2%;
  margin-right: 5%;
  padding-left: 15px;
  color: #3a3a3a;
  font-weight: bold;
  input {
    accent-color: #9c7e31;
    margin-right: 15px;
    transform: scale(1.5);
  }
}

#fee-add-button {
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  font-size: small;
  font-weight: bold;
  color: #3a3a3a;
  cursor: pointer;
}

#fee-box {
  width: 100%;
  text-align: center;
  input {
    text-align: center;
    width: 95%;
    padding: 5px;
    border-radius: 10px;
    border: solid 1px #ffdb7f;
    font-size: medium;
  }
  select {
    text-align: center;
    width: 95%;
    padding: 5px;
    border-radius: 10px;
    border: solid 1px #ffdb7f;
    font-size: medium;
  }
  button {
    width: 95%;
    padding: 5px;
    border-radius: 10px;
    border: none;
    font-size: small;
    font-weight: bold;
    color: #3a3a3a;
    cursor: pointer;
  }
}
</style>
