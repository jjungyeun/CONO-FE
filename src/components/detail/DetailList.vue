<template>
  <div id="detail-list">
    <table>
      <DetailElement v-bind:title="`업체명`" v-bind:content="conoName" />
      <DetailElement v-bind:title="`위치`" v-bind:content="conoAddress" />
      <DetailElement v-bind:title="`운영시간`" v-bind:content="operatingTime" />
    </table>
    <hr />
    <table>
      <DetailElement v-bind:title="`전화번호`" v-bind:content="phoneNumber" />
      <DetailElement v-bind:title="`가격`" v-bind:content="feeList" />
      <DetailElement v-bind:title="`결제방식`" v-bind:content="checkedPayTypes" />
      <DetailElement v-bind:title="`반주기`" v-bind:content="os" />
    </table>
    <hr />
    <table>
      <DetailElement v-bind:title="`방 개수`" v-bind:content="roomCount" />
      <DetailElement v-bind:title="`마이크 종류`" v-bind:content="checkedMicTypes" />
      <DetailElement v-bind:title="`음향 조절`" v-bind:content="canControlSound" />
      <DetailElement v-bind:title="`100점 서비스`" v-bind:content="hasScoreBonus" />
    </table>
    <hr />
  </div>
</template>

<script>
import DetailElement from './DetailElement.vue'

export default {
  name: 'DetailList',
  components: {
    DetailElement
  },
  props: {
    cono: Object
  },
  data: () => {
    return {
      payTypes: { CASH: '현금', CARD: '카드', APP: '간편결제' },
      osTypes: { TJ: 'TJ미디어', KY: '금영' },
      micTypes: { WIRELESS: '무선', WIRE: '유선', STAND: '스탠드' },
      soundTypes: { true: '가능', false: '불가능' },
      bonusTypes: { true: '제공', false: '미제공' },
      feeUnits: { SONG: '곡', MINUTE: '분', HOUR: '시간' },
      conoName: '',
      conoAddress: '',
      operatingTime: '',
      phoneNumber: '',
      feeList: '',
      checkedPayTypes: '',
      os: '',
      roomCount: '',
      checkedMicTypes: '',
      canControlSound: '',
      hasScoreBonus: ''
    }
  },
  created() {
    var noneStr = '정보 없음'
    this.conoName = this.cono.conoName != '' ? this.cono.conoName : noneStr
    this.conoAddress = this.cono.conoAddress != '' ? this.cono.conoAddress : noneStr
    this.operatingTime = this.cono.operatingTime != '' ? this.cono.operatingTime : noneStr
    this.phoneNumber = this.cono.phoneNumber != '' ? this.cono.phoneNumber : noneStr
    this.feeList = this.cono.feeList != '' ? this.cono.feeList : noneStr
    this.checkedPayTypes = this.cono.checkedPayTypes != '' ? this.cono.checkedPayTypes : noneStr
    this.os = this.cono.os != '' ? this.cono.os : noneStr
    this.roomCount = this.cono.roomCount != undefined ? this.cono.roomCount + '개' : noneStr
    this.checkedMicTypes = this.cono.checkedMicTypes != '' ? this.cono.checkedMicTypes : noneStr
    this.canControlSound =
      this.cono.canControlSound != undefined ? this.soundTypes[this.cono.canControlSound] : noneStr
    this.hasScoreBonus =
      this.cono.hasScoreBonus != undefined ? this.bonusTypes[this.cono.hasScoreBonus] : noneStr
  },
  watch: {
    'cono.conoName': function () {
      this.conoName = this.cono.conoName
    },
    'cono.conoAddress': function () {
      this.conoAddress = this.cono.conoAddress
    },
    'cono.operatingTime': function () {
      this.operatingTime = this.cono.operatingTime
    },
    'cono.phoneNumber': function () {
      this.phoneNumber = this.cono.phoneNumber
    },
    'cono.feeList': {
      deep: true,
      handler() {
        var str = ''
        for (let i = 0; i < this.cono.feeList.length; i++) {
          var val = this.cono.feeList[i]
          str += val.price + '원 ' + val.value + this.feeUnits[val.unit]

          if (i != this.cono.feeList.length - 1) {
            str += ',\n'
          }
        }
        this.feeList = str
      }
    },
    'cono.checkedPayTypes': function () {
      var str = ''
      for (let i = 0; i < this.cono.checkedPayTypes.length; i++) {
        str += this.payTypes[this.cono.checkedPayTypes[i]]
        if (i != this.cono.checkedPayTypes.length - 1) {
          str += ', '
        }
      }
      this.checkedPayTypes = str
    },
    'cono.os': function () {
      this.os = this.osTypes[this.cono.os]
    },
    'cono.roomCount': function () {
      this.roomCount = this.cono.roomCount + '개'
    },
    'cono.checkedMicTypes': function () {
      var str = ''
      for (let i = 0; i < this.cono.checkedMicTypes.length; i++) {
        str += this.micTypes[this.cono.checkedMicTypes[i]]
        if (i != this.cono.checkedMicTypes.length - 1) {
          str += ', '
        }
      }
      this.checkedMicTypes = str
    },
    'cono.canControlSound': function () {
      this.canControlSound = this.soundTypes[this.cono.canControlSound]
    },
    'cono.hasScoreBonus': function () {
      this.hasScoreBonus = this.bonusTypes[this.cono.hasScoreBonus]
    }
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
  width: 95%;
}
hr {
  width: 100%;
  height: 1px;
  background-color: lightgray;
  border: 0;
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
